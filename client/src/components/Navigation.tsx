import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/a-propos', label: 'À Propos' },
    { path: '/pourquoi-nous-choisir', label: 'Pourquoi Nous Choisir ?' },
    { path: '/notre-methode', label: 'Notre Méthode' },
    { path: '/materiaux-expertises', label: 'Matériaux & Expertises' },
    { path: '/showroom', label: 'Showroom' },
    { path: '/contact', label: 'Contact' },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-secondary/95 backdrop-blur-md'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/images/PHOTO-2026-01-25-15-41-21.jpg"
                alt="NanoProtects Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-xl font-bold text-white whitespace-nowrap">
                NanoProtects
              </span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  language === lang.code
                    ? 'bg-primary text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary border-t border-white/10">
          <div className="container py-4 space-y-3">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-white/90'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-2 pt-4 border-t border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                    language === lang.code
                      ? 'bg-primary text-white'
                      : 'text-white/70 bg-white/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
