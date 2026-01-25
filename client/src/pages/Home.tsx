/*
Design Philosophy: Moroccan Modernism with Immersive Overlay
- Atmospheric depth through layered imagery and dark overlays
- Material authenticity with bejmat, carreaux de ciment, pierre de Taza, marble
- Dual-service clarity through visual storytelling (cleaning → protection)
- Typography: Playfair Display (display) + Inter (body)
- Colors: Deep charcoal overlays, vibrant blue accent (#0066CC), warm material tones
*/

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplet, Users, TrendingUp, Microscope, SprayCan, Shield, CheckCircle } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="section-immersive"
        style={{ backgroundImage: 'url(/images/hero-riad.jpg)' }}
      >
        <div className="container w-full px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 text-shadow-lg animate-fade-up leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 text-shadow animate-fade-up animate-delay-200 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg animate-fade-up animate-delay-400"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section
        id="philosophy"
        className="section-immersive"
        style={{ backgroundImage: 'url(/images/refined_why_materials.png)' }}
      >
        <div className="container w-full px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 text-shadow-lg leading-tight">
              {t.why.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed text-shadow">
              {t.why.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* What Section - Transformation */}
      <section
        id="what"
        className="section-immersive"
        style={{ backgroundImage: 'url(/images/revised_what_threestage.png)' }}
      >
        <div className="container w-full">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-4 text-shadow-lg leading-tight">
              {t.what.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-shadow">
              {t.what.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {/* Benefit 1 */}
            <div className="glass-card text-white animate-fade-up">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full mb-3 sm:mb-4 mx-auto">
                <Droplet className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">{t.what.benefit1Title}</h3>
              <p className="text-sm sm:text-base text-white/90 text-center leading-relaxed">{t.what.benefit1Text}</p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-card text-white animate-fade-up animate-delay-200">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full mb-3 sm:mb-4 mx-auto">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">{t.what.benefit2Title}</h3>
              <p className="text-sm sm:text-base text-white/90 text-center leading-relaxed">{t.what.benefit2Text}</p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-card text-white animate-fade-up animate-delay-400">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full mb-3 sm:mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">{t.what.benefit3Title}</h3>
              <p className="text-sm sm:text-base text-white/90 text-center leading-relaxed">{t.what.benefit3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Section - Two-Phase Method */}
      <section
        id="how"
        className="section-immersive"
        style={{ backgroundImage: 'url(/images/revised_how_twophase.png)' }}
      >
        <div className="container w-full">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-4 text-shadow-lg leading-tight">
              {t.how.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-shadow">
              {t.how.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
            {/* Phase 1: Cleaning */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="phase-badge">1</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  {t.how.phase1Title}
                </h3>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Microscope className="flex-shrink-0 text-primary w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{t.how.phase1Step1Title}</h4>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{t.how.phase1Step1Text}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <SprayCan className="flex-shrink-0 text-primary w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{t.how.phase1Step2Title}</h4>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{t.how.phase1Step2Text}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Protection */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="phase-badge">2</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  {t.how.phase2Title}
                </h3>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Shield className="flex-shrink-0 text-primary w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{t.how.phase2Step1Title}</h4>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{t.how.phase2Step1Text}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card text-white">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <CheckCircle className="flex-shrink-0 text-primary w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{t.how.phase2Step2Title}</h4>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{t.how.phase2Step2Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center bg-gradient-to-br from-secondary to-secondary/80 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(/images/marble-macro.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12">
              {t.contact.subtitle}
            </p>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Formulaire de contact - À implémenter avec backend');
            }}>
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                placeholder={t.contact.messagePlaceholder}
                rows={6}
                className="w-full px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                {t.contact.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/95 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src="/images/PHOTO-2026-01-25-15-41-21.jpg"
                alt="NanoProtects"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-display text-xl font-semibold">NanoProtects</div>
                <div className="text-sm text-white/70">{t.footer.tagline}</div>
              </div>
            </div>
            <div className="text-sm text-white/70">
              © 2026 NanoProtects. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
