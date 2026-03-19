import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// framer-motion chargé uniquement quand le menu mobile est ouvert
const MotionDiv = lazy(() =>
  import('framer-motion').then(m => ({ default: m.motion.div }))
);
const AnimatePresence = lazy(() =>
  import('framer-motion').then(m => ({ default: m.AnimatePresence }))
);

export default function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const handleBackdropClick = useCallback(() => setMobileMenuOpen(false), []);

  const menuItems = [
    { path: '/pourquoi-nous-choisir', label: t.nav.hospitality },
    { path: '/notre-methode', label: t.nav.materials },
    { path: '/materiaux-expertises', label: t.nav.projects },
    { path: '/showroom', label: t.nav.realizations },
    { path: '/a-propos', label: t.nav.philosophy },
    { path: '/contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  const skipLinkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 60,
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ backgroundColor: '#A33215' }}>
      <a href="#main-content" className="sr-only focus:not-sr-only" style={skipLinkStyle}>Aller au contenu principal</a>

      <div className="container">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="logo-link flex items-center gap-2">
            <picture>
              <source srcSet="/images/nanoprotects-logo-new-1.webp" type="image/webp" />
              <img src="/images/nanoprotects-logo-new.png" alt="NanoProtects – Nettoyage Bejmat Zellige Marrakech" className="h-16 object-contain brightness-0 invert" loading="eager" width="423" height="112" decoding="sync" />
            </picture>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path} className={`text-xs font-bold transition-colors text-center leading-tight whitespace-pre-line focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-2 py-1 ${location === item.path ? 'text-white border-b-2 border-b-amber-600 pb-2' : 'text-white border-b-2 border-b-amber-600/40 hover:border-b-amber-600 pb-2'}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="https://web.facebook.com/NanoProtects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on Facebook"><SiFacebook className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/company/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on LinkedIn"><SiLinkedin className="w-6 h-6" /></a>
            <a href="https://www.instagram.com/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on Instagram"><SiInstagram className="w-6 h-6" /></a>

            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-auto border-0 bg-transparent text-white hover:bg-white/10 focus:ring-0 px-3 py-1.5 h-auto"><SelectValue placeholder="Language" /></SelectTrigger>
              <SelectContent className="bg-secondary border-white/20">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer">{lang.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <button className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile — framer-motion chargé en lazy uniquement ici */}
      {mobileMenuOpen && (
        <Suspense fallback={
          <div className="lg:hidden bg-secondary border-t border-white/10 relative z-50">
            <div className="container py-4">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path} className="block text-lg py-3 px-4 rounded text-white/90" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        }>
          <Suspense fallback={null}>
            <AnimatePresence>
              {mobileMenuOpen && (
                <>
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden fixed inset-0 top-20 bg-black/50 z-40"
                    onClick={handleBackdropClick}
                    aria-hidden="true"
                  />

                  <MotionDiv
                    ref={mobileMenuRef as any}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="lg:hidden bg-secondary border-t border-white/10 relative z-50"
                  >
                    <div className="container py-4 space-y-3">
                      <div className="flex flex-col space-y-2">
                        {menuItems.map((item) => (
                          <Link key={item.path} href={item.path} className={`block text-lg py-3 px-4 rounded transition-colors w-full text-left min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${location === item.path ? 'text-white bg-white/10 font-semibold' : 'text-white/90 hover:bg-white/5 hover:text-white'}`} onClick={() => setMobileMenuOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex gap-6">
                        <a href="https://web.facebook.com/NanoProtects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on Facebook"><SiFacebook className="w-7 h-7" /></a>
                        <a href="https://www.linkedin.com/company/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on LinkedIn"><SiLinkedin className="w-7 h-7" /></a>
                        <a href="https://www.instagram.com/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 rounded p-1" aria-label="Visit NanoProtects on Instagram"><SiInstagram className="w-7 h-7" /></a>
                      </div>

                      <div className="pt-4">
                        <Select value={language} onValueChange={(value) => { setLanguage(value as any); setMobileMenuOpen(false); }}>
                          <SelectTrigger className="w-full border border-white/20 bg-white/10 text-white focus:ring-0 py-2 min-h-[44px]"><SelectValue placeholder="Language" /></SelectTrigger>
                          <SelectContent className="bg-secondary border-white/20">
                            {languages.map((lang) => (
                              <SelectItem key={lang.code} value={lang.code} className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer">{lang.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </MotionDiv>
                </>
              )}
            </AnimatePresence>
          </Suspense>
        </Suspense>
      )}
    </nav>
  );
}
