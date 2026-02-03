import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  
  return (
    <div className="w-full">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Static Background Image */}
      <section 
        className="relative h-screen flex flex-col items-center justify-between w-full pt-20"
        style={{
          backgroundImage: 'url(/images/hero-riad.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay - Earth Protection Charter with A75C16 terracotta */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: '#A75C16', opacity: 0.55 }}
        />
        
        {/* Centered Hero Content */}
        <div className="relative z-10 container max-w-5xl px-6 text-center md:text-left flex-1 flex items-center">
          <div>
            <h1 className="font-display text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-8 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-white/90 text-[1.125rem] md:text-[1.5rem] max-w-3xl mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col gap-4 w-fit">
              <Button 
                size="lg" 
                onClick={() => setLocation('/showroom')}
                className="text-lg px-6 py-6 font-semibold justify-center whitespace-nowrap border-2 btn-brand"
              >
                Nos Réalisations
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setLocation('/contact')}
                className="text-lg px-6 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 backdrop-blur-sm font-semibold justify-center whitespace-nowrap"
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Logos at Bottom of Hero */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center items-center gap-6">
          {/* LinkedIn Logo */}
          <a
            href="https://www.linkedin.com/company/nanoprotects"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:rotate-12 opacity-50 hover:opacity-100"
            aria-label="Visit NanoProtects on LinkedIn"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/flWxAWaYuRyOYOUb.png"
              alt="LinkedIn"
              className="h-12 w-12 object-contain"
            />
          </a>

          {/* Facebook Logo */}
          <a
            href="https://web.facebook.com/NanoProtects"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:rotate-12 opacity-50 hover:opacity-100"
            aria-label="Visit NanoProtects on Facebook"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/oiXWMMLIEqiMfpaq.png"
              alt="Facebook"
              className="h-12 w-12 object-contain"
            />
          </a>

          {/* Instagram Logo */}
          <a
            href="https://www.instagram.com/nanoprotects"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:rotate-12 opacity-50 hover:opacity-100"
            aria-label="Visit NanoProtects on Instagram"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/BzmFgcmiGLTeRhZF.png"
              alt="Instagram"
              className="h-12 w-12 object-contain"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
