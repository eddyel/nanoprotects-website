import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/images/PHOTO-2026-01-25-15-41-21.jpg"
              alt="NanoProtects Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-white font-display text-xl font-semibold">
              NanoProtects
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.philosophy}
            </button>
            <button
              onClick={() => scrollToSection('what')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.hospitality}
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.materials}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-secondary/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors px-4 py-2"
            >
              {t.nav.philosophy}
            </button>
            <button
              onClick={() => scrollToSection('what')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors px-4 py-2"
            >
              {t.nav.hospitality}
            </button>
            <button
              onClick={() => scrollToSection('how')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors px-4 py-2"
            >
              {t.nav.materials}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white/90 hover:text-white transition-colors px-4 py-2"
            >
              {t.nav.contact}
            </button>
            <div className="flex items-center space-x-2 px-4 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-primary text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
