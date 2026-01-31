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
        className="relative min-h-screen flex items-center justify-center w-full pt-20"
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
        <div className="relative z-10 container max-w-5xl px-6 text-center md:text-left py-20">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-white mb-8 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-white/90 text-[1.125rem] md:text-[1.5rem] max-w-3xl mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col gap-4 w-fit">
            <Button 
              size="lg" 
              onClick={() => setLocation('/showroom')}
              className="text-lg px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold justify-center whitespace-nowrap border-2 border-blue-600"
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
      </section>
    </div>
  );
}
