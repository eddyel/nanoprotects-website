import { useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { Droplet, Shield, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

// Section "veille reglementaire". Le texte est porte par la page elle-meme
// pour ne pas alourdir translations.ts. Le lien n'apparait qu'en francais,
// car la page de destination n'existe qu'en francais.
const veilleTexts: Record<string, { title: string; p1: string; p2: string; p3: string; cta: string }> = {
  fr: {
    title: 'Notre veille au service des établissements',
    p1: "Le cadre dans lequel travaillent les hôtels et les riads marocains a changé. La réforme du classement des établissements d'hébergement touristique place le bon état d'entretien et de propreté des sols parmi les normes obligatoires, et les visites mystères engagées en mai 2026 évaluent l'expérience réelle du client.",
    p2: "Nous suivons ces évolutions de près, parce qu'elles déterminent ce que l'on attend de vos surfaces. Cette veille fait partie du service : lorsqu'un texte change ce qui est exigé d'un sol, nos clients l'apprennent par nous, et non le jour d'un contrôle.",
    p3: "Nous ne sommes ni consultants en classement, ni organisme de contrôle. Nous suivons ce qui concerne les surfaces, et nous le traduisons en décisions d'entretien concrètes, au bon moment et au bon coût.",
    cta: 'Classement hôtelier : vos sols sont inspectés',
  },
  en: {
    title: 'Our regulatory watch, for the benefit of our clients',
    p1: "The framework Moroccan hotels and riads work in has changed. The reform of the tourist accommodation classification system places the good condition and cleanliness of floors among the mandatory standards, and the mystery visits launched in May 2026 assess the guest's actual experience.",
    p2: 'We follow these developments closely, because they determine what is expected of your surfaces. This watch is part of the service: when a text changes what is required of a floor, our clients hear it from us, not on the day of an inspection.',
    p3: 'We are neither classification consultants nor an inspection body. We track what concerns surfaces, and we translate it into concrete maintenance decisions, at the right time and the right cost.',
    cta: '',
  },
  ar: {
    title: 'رصدنا الدائم في خدمة المؤسسات',
    p1: 'تغيّر الإطار الذي تعمل فيه الفنادق والرياضات في المغرب. فإصلاح تصنيف مؤسسات الإيواء السياحي يضع حسن صيانة الأرضيات ونظافتها ضمن المعايير الإلزامية، كما أن زيارات الزبون الخفي التي انطلقت في ماي 2026 تقيّم تجربة النزيل الفعلية.',
    p2: 'نتابع هذه التطورات عن قرب لأنها تحدد ما هو مطلوب من أسطحكم. وهذه المتابعة جزء من الخدمة: عندما يغيّر نص قانوني ما هو مطلوب من أرضية، يعلم زبناؤنا ذلك منّا، لا يوم المراقبة.',
    p3: 'لسنا مستشارين في التصنيف ولا هيئة مراقبة. نتابع ما يخص الأسطح ونترجمه إلى قرارات صيانة ملموسة، في الوقت المناسب وبالتكلفة المناسبة.',
    cta: '',
  },
  es: {
    title: 'Nuestra vigilancia al servicio de los establecimientos',
    p1: 'El marco en el que trabajan los hoteles y riads marroquíes ha cambiado. La reforma de la clasificación de los establecimientos de alojamiento turístico sitúa el buen estado de conservación y limpieza de los suelos entre las normas obligatorias, y las visitas misteriosas iniciadas en mayo de 2026 evalúan la experiencia real del cliente.',
    p2: 'Seguimos de cerca esta evolución, porque determina lo que se espera de sus superficies. Esta vigilancia forma parte del servicio: cuando un texto cambia lo que se exige de un suelo, nuestros clientes lo saben por nosotros, y no el día de una inspección.',
    p3: 'No somos ni consultores en clasificación ni organismo de control. Seguimos lo que concierne a las superficies y lo traducimos en decisiones de mantenimiento concretas, en el momento adecuado y al coste adecuado.',
    cta: '',
  },
};

export default function APropos() {
  const { language } = useLanguage();
  const t = translations[language];

  const veille = veilleTexts[language] ?? veilleTexts.fr;

  const references = [
    'Palais Ronsard',
    'Palais Selman',
    'M Avenue',
    'Rotana Palmeraie',
    'Riad Villa Nomade',
    'Riad Al Dall',
    'Ayaso'
  ];

  // SEO : title dynamique par langue
  useEffect(() => {
    // En francais, le titre est gere par SEOUpdater (App.tsx) pour rester identique au pre-rendu.
    if (language === 'fr') return;
    const pageTitles: Record<string, string> = {
      fr: 'À Propos – NanoProtects Marrakech | Expert Nettoyage Bejmat & Surfaces Traditionnelles',
      en: 'About – NanoProtects Marrakech | Bejmat & Traditional Surface Cleaning Expert',
      ar: 'حول NanoProtects مراكش | خبير تنظيف البيجمات والأسطح التقليدية',
      es: 'Acerca de – NanoProtects Marrakech | Experto en Limpieza Bejmat y Superficies Tradicionales',
    };
    document.title = pageTitles[language] || pageTitles['fr'];
  }, [language]);

  // SEO : Schema.org JSON-LD page À Propos
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": language === 'fr' ? "À Propos – NanoProtects Marrakech"
        : language === 'en' ? "About – NanoProtects Marrakech"
        : language === 'ar' ? "حول NanoProtects مراكش"
        : "Acerca de – NanoProtects Marrakech",
      "url": "https://nanoprotects.com/a-propos/",
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

          {/* Section 4: Notre veille reglementaire */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              {veille.title}
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>{veille.p1}</p>
              <p>{veille.p2}</p>
              <p>{veille.p3}</p>
              {language === 'fr' && veille.cta && (
                <p>
                  <Link
                    href="/classement-hotelier-maroc-etat-des-sols"
                    className="font-semibold underline underline-offset-4"
                    style={{ color: '#A33215' }}
                  >
                    {veille.cta}
                  </Link>
                </p>
              )}
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
