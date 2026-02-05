import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
                className={`text-xs font-bold transition-colors text-center leading-tight whitespace-pre-line ${
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
            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/company/nanoprotects"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:rotate-12"
              aria-label="Visit NanoProtects on LinkedIn"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/AiHOKqCgyvAriTei.png"
                alt="LinkedIn"
                className="h-10 w-10 object-contain"
              />
            </a>

            {/* Facebook Logo */}
            <a
              href="https://web.facebook.com/NanoProtects"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:rotate-12"
              aria-label="Visit NanoProtects on Facebook"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/sbRQGaemFkCXerSO.png"
                alt="Facebook"
                className="h-10 w-10 object-contain"
              />
            </a>

            {/* Instagram Logo */}
            <a
              href="https://www.instagram.com/nanoprotects"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:rotate-12"
              aria-label="Visit NanoProtects on Instagram"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/XVSxuBfKhOsWjxcz.png"
                alt="Instagram"
                className="h-10 w-10 object-contain"
              />
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
                {/* Social Media Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="pt-4 border-t border-white/10 flex gap-4"
                >
                  <a
                    href="https://www.linkedin.com/company/nanoprotects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:rotate-12"
                    aria-label="Visit NanoProtects on LinkedIn"
                  >
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/AiHOKqCgyvAriTei.png"
                      alt="LinkedIn"
                      className="h-10 w-10 object-contain"
                    />
                  </a>
                  <a
                    href="https://web.facebook.com/NanoProtects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:rotate-12"
                    aria-label="Visit NanoProtects on Facebook"
                  >
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/sbRQGaemFkCXerSO.png"
                      alt="Facebook"
                      className="h-10 w-10 object-contain"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nanoprotects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:rotate-12"
                    aria-label="Visit NanoProtects on Instagram"
                  >
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/XVSxuBfKhOsWjxcz.png"
                      alt="Instagram"
                      className="h-10 w-10 object-contain"
                    />
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
