import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Handle outside click
  const handleBackdropClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{ backgroundColor: '#A33215' }}
    >
      {/* Skip to main content link - only visible on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Aller au contenu principal
      </a>

      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="logo-link flex items-center gap-2">
            <img
              src="/images/nanoprotects-logo-new.png"
              alt="NanoProtects Logo"
              className="h-16 object-contain brightness-0 invert"
              loading="eager"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs font-bold transition-colors text-center leading-tight whitespace-pre-line focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded px-2 py-1 ${
                  location === item.path
                    ? 'text-white border-b-2 border-b-amber-600 pb-2'
                    : 'text-white border-b-2 border-b-amber-600/40 hover:border-b-amber-600 pb-2'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons + Language Switcher */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Facebook Logo */}
            <a
              href="https://web.facebook.com/NanoProtects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
              aria-label="Visit NanoProtects on Facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>

            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/company/nanoprotects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
              aria-label="Visit NanoProtects on LinkedIn"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>

            {/* Instagram Logo */}
            <a
              href="https://www.instagram.com/nanoprotects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
              aria-label="Visit NanoProtects on Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>

            {/* Language Switcher - Dropdown */}
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-auto border-0 bg-transparent text-white hover:bg-white/10 focus:ring-0 px-3 py-1.5 h-auto">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-secondary border-white/20">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code} className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer">
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-20 bg-black/50 z-40"
              onClick={handleBackdropClick}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden bg-secondary border-t border-white/10 relative z-50"
            >
              <div className="container py-4 space-y-3">
                {/* Navigation Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="flex flex-col space-y-2"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.path}
                        className={`block text-lg py-3 px-4 rounded transition-colors w-full text-left min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] ${
                          location === item.path
                            ? 'text-white bg-white/10 font-semibold'
                            : 'text-white/90 hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="pt-4 border-t border-white/10 flex gap-6"
                >
                  <a
                    href="https://web.facebook.com/NanoProtects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
                    aria-label="Visit NanoProtects on Facebook"
                  >
                    <SiFacebook className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nanoprotects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
                    aria-label="Visit NanoProtects on LinkedIn"
                  >
                    <SiLinkedin className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.instagram.com/nanoprotects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#A33215] rounded p-1"
                    aria-label="Visit NanoProtects on Instagram"
                  >
                    <SiInstagram className="w-7 h-7" />
                  </a>
                </motion.div>

                {/* Language Switcher */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                  className="pt-4"
                >
                  <Select value={language} onValueChange={(value) => {
                    setLanguage(value as any);
                    setMobileMenuOpen(false);
                  }}>
                    <SelectTrigger className="w-full border border-white/20 bg-white/10 text-white focus:ring-0 py-2 min-h-[44px]">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-secondary border-white/20">
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code} className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer">
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
