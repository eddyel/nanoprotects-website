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
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => setLocation('/showroom')}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Showroom
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setLocation('/contact')}
              className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Light Brown Strip */}
      <div className="h-4 bg-amber-50" />

      {/* Quick Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-display font-bold text-primary">60%</span>
              </div>
              <h3 className="font-semibold text-secondary text-lg mb-2">{t.home.benefit1Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.home.benefit1Text}
              </p>
            </div>
            
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">3-5 ans</span>
              </div>
              <h3 className="font-semibold text-secondary text-lg mb-2">{t.home.benefit2Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.home.benefit2Text}
              </p>
            </div>
            
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-primary">12-18 mois</span>
              </div>
              <h3 className="font-semibold text-secondary text-lg mb-2">{t.home.benefit3Title}</h3>
              <p className="text-gray-600 text-sm">
                {t.home.benefit3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Light Brown Strip */}
      <div className="h-4 bg-amber-50" />
    </div>
  );
}
