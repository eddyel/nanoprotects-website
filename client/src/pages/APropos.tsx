import Navigation from '@/components/Navigation';
import { Droplet, Shield, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function APropos() {
  const { language } = useLanguage();
  const t = translations[language];
  const references = [
    'Palais Ronsard',
    'Palais Selman',
    'M Avenue',
    'Rotana Palmeraie',
    'Riad Villa Nomade',
    'Riad Al Dall',
    'Ayaso'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container max-w-5xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-6 leading-tight" style={{ color: '#A33215' }}>
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Three Sections */}
      <section className="py-10">
        <div className="container max-w-4xl space-y-20">
          {/* Section 1: Notre Raison d'Être */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              {t.about.section1Title}
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>{t.about.section1Text}</p>
            </div>
          </div>

          {/* Section 2: Notre Méthode */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              {t.about.section2Title}
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>{t.about.section2Text}</p>
            </div>
          </div>

          {/* Section 3: Notre Expertise */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              {t.about.section3Title}
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>{t.about.section3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-[1.75rem] font-bold text-secondary">
                  {t.method.highTechTitle}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t.method.highTechDescription}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-[1.75rem] font-bold text-secondary">
                  {t.method.protectionTitle}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t.method.protectionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestigious References */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-left text-secondary mb-12">
            {t.method.trustTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {references.map((ref, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-secondary text-sm">
                    {ref}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
