import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <Navigation />

      <section
        className="relative h-screen flex flex-col items-center justify-between w-full pt-20"
        style={{
          backgroundImage: 'url(/images/hero-riad-marrakech-1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: '#A75C16', opacity: 0.55 }} />

        <div className="relative z-10 container max-w-5xl px-6 text-left flex-1 flex items-center">
          <div>
            <h1
              className="font-display text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-8 leading-tight"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            <p
              className="text-white/90 text-[1.125rem] md:text-[1.5rem] max-w-3xl mb-12 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
            />
            <div className="flex flex-col gap-4 w-fit md:gap-4 gap-3">
              <Button
                size="lg"
                onClick={() => setLocation('/showroom')}
                className="text-lg px-6 py-6 font-semibold justify-center whitespace-nowrap border-2 btn-brand md:text-lg text-base md:px-6 px-4 md:py-6 py-4"
              >
                {t.hero.realizationsButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation('/contact')}
                className="text-lg px-6 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-[#A75C16] backdrop-blur-sm font-semibold justify-center whitespace-nowrap md:text-lg text-base md:px-6 px-4 md:py-6 py-4"
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center items-center gap-6 md:gap-8 md:bottom-2">
          <a href="https://web.facebook.com/NanoProtects" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 p-1" aria-label="Visit NanoProtects on Facebook">
            <SiFacebook className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/company/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 p-1" aria-label="Visit NanoProtects on LinkedIn">
            <SiLinkedin className="w-7 h-7" />
          </a>
          <a href="https://www.instagram.com/nanoprotects" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-[#A75C16] transition-all duration-300 hover:scale-110 p-1" aria-label="Visit NanoProtects on Instagram">
            <SiInstagram className="w-7 h-7" />
          </a>
        </div>
      </section>
    </div>
  );
}
