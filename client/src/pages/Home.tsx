import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Top Light Brown Strip */}
      <div className="h-4 bg-amber-50" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero-riad.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-10 container max-w-5xl px-6">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-bold text-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-white/90 text-[1.125rem] md:text-[1.5rem] max-w-3xl mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col gap-4 w-fit">
            <Button 
              size="lg" 
              onClick={() => setLocation('/showroom')}
              className="text-lg px-6 py-6 bg-primary hover:bg-primary/90 text-white font-semibold justify-center whitespace-nowrap"
            >
              Nos Réalisations
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setLocation('/contact')}
              className="text-lg px-6 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold justify-center whitespace-nowrap"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
}
