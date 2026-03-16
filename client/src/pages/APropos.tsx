import { useEffect } from 'react';
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

  // SEO — title dynamique par langue
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      fr: 'À Propos – NanoProtects Marrakech | Expert Nettoyage Bejmat & Surfaces Traditionnelles',
      en: 'About – NanoProtects Marrakech | Bejmat & Traditional Surface Cleaning Expert',
      ar: 'حول NanoProtects مراكش | خبير تنظيف البيجمات والأسطح التقليدية',
      es: 'Acerca de – NanoProtects Marrakech | Experto en Limpieza Bejmat y Superficies Tradicionales',
    };
    document.title = pageTitles[language] || pageTitles['fr'];
  }, [language]);

  // SEO — Schema.org JSON-LD page À Propos
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": language === 'fr' ? "À Propos – NanoProtects Marrakech"
        : language === 'en' ? "About – NanoProtects Marrakech"
        : language === 'ar' ? "حول NanoProtects مراكش"
        : "Acerca de – NanoProtects Marrakech",
      "url": "https://nanoprotects.com/a-propos",
      "description": language === 'fr' ? "Fondée en 2019, NanoProtects est spécialiste du nettoyage et traitement nanotechnologique du bejmat, zellige, carreaux de ciment beldi, pierre taza et marbre pour hôtels et riads à Marrakech."
        : language === 'en' ? "Founded in 2019, NanoProtects specialises in nanotechnology cleaning and treatment of bejmat, zellige, beldi cement tiles, taza stone and marble for hotels and riads in Marrakech."
        : language === 'ar' ? "تأسست NanoProtects عام 2019، متخصصة في التنظيف النانوي للبيجمات والزليج وبلاط الإسمنت البلدي وحجر تازة والرخام للفنادق والرياض في مراكش."
        : "Fundada en 2019, NanoProtects es especialista en limpieza nanotecnológica de bejmat, zellige, baldosas de cemento beldi, piedra taza y mármol para hoteles y riads en Marrakech.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "NanoProtects",
        "telephone": "+212675971971",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Q.I. Sidi Ghanem, N°158, B44",
          "addressLocality": "Marrakech",
          "addressRegion": "Marrakech-Safi",
          "postalCode": "40000",
          "addressCountry": "MA"
        },
        "foundingDate": "2019",
        "url": "https://nanoprotects.com",
        "sameAs": [
          "https://www.linkedin.com/company/nanoprotects",
          "https://web.facebook.com/NanoProtects",
          "https://www.instagram.com/nanoprotects"
        ]
      },
      "mentions": references.map(ref => ({
        "@type": "Hotel",
        "name": ref,
        "addressLocality": "Marrakech",
        "addressCountry": "MA"
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'apropos-schema-ld';
    script.textContent = JSON.stringify(schemaData);

    const existing = document.getElementById('apropos-schema-ld');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('apropos-schema-ld');
      if (el) el.remove();
    };
  }, [language]);

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: `url('/images/BackgroundImages/bg-a-propos.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.18, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10" style={{ backgroundColor: 'transparent' }}>
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
      <section className="py-20" style={{ backgroundColor: 'transparent' }}>
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
    </div>
  );
}
