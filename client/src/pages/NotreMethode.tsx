import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Sparkles, Shield, CheckCircle, Clock, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function NotreMethode() {
  const { language } = useLanguage();
  const t = translations[language];

  // SEO — title dynamique par langue
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      fr: 'Notre Méthode Nanotechnologique – Diagnostic, Nettoyage & Protection | NanoProtects Marrakech',
      en: 'Our Nanotechnology Method – Diagnosis, Cleaning & Protection | NanoProtects Marrakech',
      ar: 'طريقتنا النانوية – التشخيص والتنظيف والحماية | NanoProtects مراكش',
      es: 'Nuestro Método Nanotecnológico – Diagnóstico, Limpieza y Protección | NanoProtects Marrakech',
    };
    document.title = pageTitles[language] || pageTitles['fr'];
  }, [language]);

  // SEO — Schema.org HowTo pour les 3 phases de la méthode
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": language === 'fr' ? "Méthode NanoProtects : nettoyage et protection nanotechnologique surfaces traditionnelles Marrakech"
        : language === 'en' ? "NanoProtects Method: nanotechnology cleaning and protection of traditional surfaces Marrakech"
        : language === 'ar' ? "طريقة NanoProtects: التنظيف النانوي والحماية للأسطح التقليدية مراكش"
        : "Método NanoProtects: limpieza y protección nanotecnológica de superficies tradicionales Marrakech",
      "description": language === 'fr' ? "Protocole en 3 phases pour le nettoyage et la protection nanotechnologique du bejmat, zellige, carreaux de ciment beldi, pierre taza et marbre à Marrakech."
        : language === 'en' ? "3-phase protocol for nanotechnology cleaning and protection of bejmat, zellige, beldi cement tiles, taza stone and marble in Marrakech."
        : language === 'ar' ? "بروتوكول من 3 مراحل لتنظيف وحماية البيجمات والزليج وبلاط الإسمنت البلدي وحجر تازة والرخام في مراكش."
        : "Protocolo de 3 fases para la limpieza y protección nanotecnológica de bejmat, zellige, baldosas de cemento beldi, piedra taza y mármol en Marrakech.",
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
        }
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": t.method.phase1Title,
          "text": t.method.phase1Description,
          "itemListElement": [
            { "@type": "HowToDirection", "text": t.method.phase1Point1 },
            { "@type": "HowToDirection", "text": t.method.phase1Point2 },
            { "@type": "HowToDirection", "text": t.method.phase1Point3 }
          ]
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": t.method.phase2Title,
          "text": t.method.phase2Description,
          "itemListElement": [
            { "@type": "HowToDirection", "text": t.method.phase2Point1 },
            { "@type": "HowToDirection", "text": t.method.phase2Point2 },
            { "@type": "HowToDirection", "text": t.method.phase2Point3 }
          ]
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": t.method.phase3Title,
          "text": t.method.phase3Description,
          "itemListElement": [
            { "@type": "HowToDirection", "text": t.method.phase3Point1 },
            { "@type": "HowToDirection", "text": t.method.phase3Point2 },
            { "@type": "HowToDirection", "text": t.method.phase3Point3 }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'methode-schema-ld';
    script.textContent = JSON.stringify(schemaData);

    const existing = document.getElementById('methode-schema-ld');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('methode-schema-ld');
      if (el) el.remove();
    };
  }, [language, t]);

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      {/* DO NOT CHANGE - backgroundSize must stay '100% auto' */}
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: `url('/images/BackgroundImages/bg-notre-methode.png')`, backgroundSize: '100% auto', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', opacity: 0.18, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-8" style={{ color: '#A33215' }}>
            {t.method.title}
          </h1>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20">
            {/* Subtitle removed as per new design */}
          </p>
          
          {/* Three Phases */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 auto-rows-fr">
            {/* Phase 1: Diagnostic */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                1
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase1Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase1Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase1Point3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2: Révéler */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                2
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase2Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase2Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase2Point3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3: Protéger */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-display text-3xl font-bold shadow-lg">
                3
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-2xl p-10 pt-16 h-full" style={{ borderColor: '#A75C16' }}>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                  <h2 className="font-display text-[1.75rem] font-bold text-secondary">
                    {t.method.phase3Title}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.method.phase3Description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t.method.phase3Point3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Three Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl font-bold text-primary mb-2">60%</div>
              <p className="text-gray-700 font-semibold mb-2">{t.method.metric1Label}</p>
              <p className="text-sm text-gray-600">
                {t.method.metric1Description}
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl font-bold text-primary mb-2">12-18</div>
              <p className="text-gray-700 font-semibold mb-2">{t.method.metric2Label}</p>
              <p className="text-sm text-gray-600">
                {t.method.metric2Description}
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="font-display text-4xl font-bold text-primary mb-2">{t.method.metric3Label}</div>
              <p className="text-gray-700 font-semibold mb-2">{t.method.metric3Subtitle}</p>
              <p className="text-sm text-gray-600">
                {t.method.metric3Description}
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
