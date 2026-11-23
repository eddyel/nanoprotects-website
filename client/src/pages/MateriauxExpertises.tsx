import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getCategoriesData = (t: any) => [
  {
    id: 'pierres',
    titleKey: 'category1Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category1Issues',
    actionsKey: 'category1Actions',
    surfacesKey: 'category1Surfaces'
  },
  {
    id: 'maconnerie',
    titleKey: 'category2Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category2Issues',
    actionsKey: 'category2Actions',
    surfacesKey: 'category2Surfaces'
  },
  {
    id: 'bois',
    titleKey: 'category3Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category3Issues',
    actionsKey: 'category3Actions',
    surfacesKey: 'category3Surfaces'
  },
  {
    id: 'textiles',
    titleKey: 'category4Title',
    showProcessIcons: true,
    processStepsKeys: ['processStep1', 'processStep2', 'processStep3'],
    issuesKey: 'category4Issues',
    actionsKey: 'category4Actions',
    surfacesKey: 'category4Surfaces'
  },
  {
    id: 'securite',
    titleKey: 'category5Title',
    icon: 'slipping',
    issuesKey: 'category5Issues',
    actionsKey: 'category5Actions',
    surfacesKey: 'category5Surfaces'
  },
  {
    id: 'metaux',
    titleKey: 'category6Title',
    subtitleKey: 'category6Subtitle',
    issuesKey: 'category6Issues',
    actionsKey: 'category6Actions',
    surfacesKey: 'category6Surfaces'
  }
];

const processIcons: Record<string, React.ReactNode> = {
  prep: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
    </svg>
  ),
  nano: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  protect: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
};

export default function MateriauxExpertises() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState('pierres');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const bgImages: Record<string, string> = {
    pierres:    '/images/BackgroundImages/bg-pierres-marbres.png',
    maconnerie: '/images/BackgroundImages/bg-maconnerie.png',
    bois:       '/images/BackgroundImages/bg-bois.png',
    textiles:   '/images/BackgroundImages/bg-textile.png',
    securite:   '/images/BackgroundImages/bg-anti-derapant.png',
    metaux:     '/images/BackgroundImages/bg-mineralisant.png',
  };
  const [bgImage, setBgImage] = useState(bgImages['pierres']);
  const [bgOpacity, setBgOpacity] = useState(0.18);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const categories = getCategoriesData(t);
  const activeCategory = categories.find(cat => cat.id === activeTab);

  // SEO - titre de page dynamique pour les langues autres que le francais.
  // En francais, le titre est gere par SEOUpdater (App.tsx) pour rester identique au pre-rendu.
  useEffect(() => {
    if (language === 'fr') return;
    const pageTitles: Record<string, string> = {
      fr: 'Bejmat, Zellige, Pierre Taza, Marbre – Matériaux & Expertises | NanoProtects Marrakech',
      en: 'Bejmat, Zellige, Taza Stone, Marble – Materials & Expertise | NanoProtects Marrakech',
      ar: 'البيجمات، الزليج، حجر تازة، الرخام – المواد والخبرات | NanoProtects مراكش',
      es: 'Bejmat, Zellige, Piedra Taza, Mármol – Materiales & Experiencias | NanoProtects Marrakech',
    };
    document.title = pageTitles[language] || pageTitles['fr'];
  }, [language]);

  // SEO - Schema.org JSON-LD pour la page materiaux (invisible pour l'utilisateur)
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": t.materials.title,
      "description": t.materials.subtitle,
      "url": "https://nanoprotects.com/materiaux-expertises/",
      "provider": {
        "@type": "LocalBusiness",
        "name": "NanoProtects",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marrakech",
          "addressCountry": "MA"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": language === 'fr' ? "Services de nettoyage et protection nanotechnologique" : "Nanotechnology cleaning and protection services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": language === 'fr' ? "Nettoyage et protection bejmat, zellige, carreaux ciment beldi Marrakech"
              : language === 'en' ? "Bejmat, zellige, beldi cement tiles cleaning and protection Marrakech"
              : language === 'ar' ? "تنظيف وحماية البيجمات والزليج وبلاط الإسمنت البلدي مراكش"
              : "Limpieza y protección bejmat, zellige, baldosas cemento beldi Marrakech"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": language === 'fr' ? "Traitement et protection pierre taza et marbre hôtels riads Marrakech"
              : language === 'en' ? "Taza stone and marble treatment for hotels and riads Marrakech"
              : language === 'ar' ? "معالجة وحماية حجر تازة والرخام للفنادق والرياض مراكش"
              : "Tratamiento protección piedra taza y mármol hoteles riads Marrakech"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": language === 'fr' ? "Protection nanotechnologique surfaces traditionnelles marocaines"
              : language === 'en' ? "Nanotechnology protection for traditional Moroccan surfaces"
              : language === 'ar' ? "الحماية النانوية للأسطح التقليدية المغربية"
              : "Protección nanotecnológica superficies tradicionales marroquíes"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'materiaux-schema-ld';
    script.textContent = JSON.stringify(schemaData);

    const existing = document.getElementById('materiaux-schema-ld');
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('materiaux-schema-ld');
      if (el) el.remove();
    };
  }, [language, t]);

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => checkScroll();
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setBgOpacity(0);
    if (fadeRef.current) clearTimeout(fadeRef.current);
    fadeRef.current = setTimeout(() => {
      setBgImage(bgImages[tab]);
      setBgOpacity(0.18);
    }, 300);
  };

  useEffect(() => () => {
    if (fadeRef.current) clearTimeout(fadeRef.current);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getTranslationValue = (key: string): string => {
    const keys = key.split('.');
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Section zellige : chaine de degradation. Contenu porte par la page pour ne pas
  // alourdir translations.ts, dans les quatre langues.
  const zelligeTexts: Record<string, {
    title: string; lead: string; chainLabel: string;
    steps: { t: string; d: string }[];
    replaceTitle: string; replaceText: string;
    doTitle: string; doText: string; cta: string;
  }> = {
    fr: {
      title: 'Zellige : comprendre la chaîne de dégradation',
      lead: "Le zellige ne se dégrade pas d'un coup. Il suit un enchaînement précis, et chaque étape rend la suivante plus coûteuse. Comprendre cet enchaînement, c'est savoir à quel moment intervenir.",
      chainLabel: "L'enchaînement, étape par étape",
      steps: [
        { t: 'Le calcaire se dépose sur l\u2019émail', d: "L'eau dure laisse un film blanchâtre sur la partie émaillée. Les couleurs s'éteignent, la surface perd son éclat. À ce stade, le zellige est intact : il est seulement encrassé." },
        { t: 'Les joints s\u2019attaquent', d: "Les joints subissent toutes sortes d'agressions : eau, calcaire, produits de nettoyage inadaptés, passage. Ils sont presque toujours négligés, alors que leur rôle est central." },
        { t: 'Les arêtes se découvrent', d: "Un joint dégradé n'enveloppe plus les bords des pièces. Les arêtes de l'émail se trouvent exposées, et l'écaillage commence." },
        { t: 'Le calepinage se fragilise', d: "Plus profondément, c'est la structure qui maintient les pièces en place qui faiblit. Des pièces peuvent se déchausser et se retirer du calepinage." },
      ],
      replaceTitle: 'Pourquoi le remplacement est un piège',
      replaceText: "Le zellige ancien est très difficile à remplacer à l'identique, et le zellige récent l'est parfois tout autant. Les teintes varient d'une cuisson à l'autre, puis évoluent avec l'exposition aux UV. Une pièce neuve posée au milieu d'un calepinage ancien se voit, et elle se verra encore plus dans cinq ans.",
      doTitle: 'Ce que nous faisons',
      doText: "Nous détartrons l'émail et ravivons les couleurs, nous traitons les joints au lieu de les ignorer, puis nous protégeons l'ensemble par une imprégnation hydrofuge et oléofuge non filmogène, qui laisse le support respirer. L'objectif est d'arrêter l'enchaînement avant l'étape 3, celle où la perte devient irréversible.",
      cta: 'Demander un diagnostic gratuit',
    },
    en: {
      title: 'Zellige: understanding the chain of damage',
      lead: 'Zellige does not fail all at once. It follows a precise sequence, and each stage makes the next one more expensive. Understanding that sequence is knowing when to act.',
      chainLabel: 'The sequence, step by step',
      steps: [
        { t: 'Limescale settles on the glaze', d: 'Hard water leaves a whitish film on the glazed surface. Colours fade and the surface loses its shine. At this stage the zellige is intact: it is only soiled.' },
        { t: 'The joints come under attack', d: 'Joints face every kind of aggression: water, limescale, unsuitable cleaning products, foot traffic. They are almost always neglected, although their role is central.' },
        { t: 'The edges become exposed', d: 'A damaged joint no longer wraps the edges of each piece. The edges of the glaze are left exposed, and chipping begins.' },
        { t: 'The layout itself weakens', d: 'Deeper down, the structure holding the pieces in place gives way. Pieces can work loose and come out of the layout.' },
      ],
      replaceTitle: 'Why replacement is a trap',
      replaceText: 'Old zellige is very hard to replace identically, and recent zellige sometimes just as hard. Shades vary from one firing to the next, then shift with UV exposure. A new piece set into an old layout shows, and it will show even more in five years.',
      doTitle: 'What we do',
      doText: 'We descale the glaze and revive the colours, we treat the joints instead of ignoring them, then we protect the whole with a water and oil repellent impregnation that forms no film, so the substrate keeps breathing. The aim is to stop the sequence before stage 3, where the loss becomes irreversible.',
      cta: 'Request a free assessment',
    },
    ar: {
      title: 'الزليج: فهم سلسلة التدهور',
      lead: 'لا يتدهور الزليج دفعة واحدة، بل يتبع تسلسلاً دقيقاً، وكل مرحلة تجعل التي تليها أكثر كلفة. فهم هذا التسلسل يعني معرفة الوقت المناسب للتدخل.',
      chainLabel: 'التسلسل، مرحلة بمرحلة',
      steps: [
        { t: 'ترسّب الكلس على المينا', d: 'يترك الماء العسر طبقة بيضاء على الجزء المطلي بالمينا، فتخبو الألوان ويفقد السطح لمعانه. في هذه المرحلة يبقى الزليج سليماً، وهو متسخ فقط.' },
        { t: 'تضرّر الفواصل', d: 'تتعرض الفواصل لكل أنواع الاعتداء: الماء والكلس ومواد التنظيف غير الملائمة وحركة المرور. وغالباً ما تُهمل رغم دورها المركزي.' },
        { t: 'انكشاف الحواف', d: 'الفاصل المتضرر لم يعد يغلف حواف القطع، فتنكشف حواف المينا ويبدأ التقشر.' },
        { t: 'ضعف بنية التركيب', d: 'في العمق، تضعف البنية التي تثبّت القطع في مكانها، فقد تتزحزح بعض القطع وتخرج من التركيب.' },
      ],
      replaceTitle: 'لماذا يعدّ الاستبدال فخاً',
      replaceText: 'يصعب كثيراً استبدال الزليج القديم بالمثل، وأحياناً حتى الزليج الحديث. فالألوان تختلف من حرق إلى آخر، ثم تتغير مع التعرض للأشعة فوق البنفسجية. القطعة الجديدة وسط تركيب قديم تُرى، وستُرى أكثر بعد خمس سنوات.',
      doTitle: 'ما نقوم به',
      doText: 'نزيل الكلس عن المينا ونعيد إحياء الألوان، ونعالج الفواصل بدل إهمالها، ثم نحمي المجموع بتشريب طارد للماء والزيوت لا يشكّل طبقة، فيبقى السطح قادراً على التنفس. الهدف هو إيقاف التسلسل قبل المرحلة الثالثة، حيث تصبح الخسارة غير قابلة للإصلاح.',
      cta: 'اطلب تشخيصاً مجانياً',
    },
    es: {
      title: 'Zellige: entender la cadena de deterioro',
      lead: 'El zellige no se deteriora de golpe. Sigue una secuencia precisa, y cada etapa encarece la siguiente. Entender esa secuencia es saber cuándo intervenir.',
      chainLabel: 'La secuencia, etapa por etapa',
      steps: [
        { t: 'La cal se deposita sobre el esmalte', d: 'El agua dura deja una película blanquecina sobre la parte esmaltada. Los colores se apagan y la superficie pierde su brillo. En esta etapa el zellige está intacto: solo está sucio.' },
        { t: 'Las juntas se deterioran', d: 'Las juntas sufren todo tipo de agresiones: agua, cal, productos de limpieza inadecuados, tránsito. Casi siempre se descuidan, aunque su papel es central.' },
        { t: 'Los cantos quedan expuestos', d: 'Una junta deteriorada ya no envuelve los bordes de las piezas. Los cantos del esmalte quedan expuestos y empieza el desconchado.' },
        { t: 'La estructura se debilita', d: 'Más a fondo, se debilita la estructura que mantiene las piezas en su sitio. Algunas piezas pueden aflojarse y salirse del despiece.' },
      ],
      replaceTitle: 'Por qué sustituir es una trampa',
      replaceText: 'El zellige antiguo es muy difícil de sustituir de forma idéntica, y el reciente a veces también. Los tonos varían de una cocción a otra y luego evolucionan con la exposición a los rayos UV. Una pieza nueva colocada en un despiece antiguo se nota, y se notará aún más dentro de cinco años.',
      doTitle: 'Lo que hacemos',
      doText: 'Descalcificamos el esmalte y revivimos los colores, tratamos las juntas en lugar de ignorarlas, y después protegemos el conjunto con una impregnación hidrófuga y oleófuga que no forma película, de modo que el soporte sigue respirando. El objetivo es detener la secuencia antes de la etapa 3, donde la pérdida se vuelve irreversible.',
      cta: 'Solicitar un diagnóstico gratuito',
    },
  };

  const zellige = zelligeTexts[language] ?? zelligeTexts.fr;

  const bejmatLinkTexts: Record<string, { title: string; text: string; cta: string }> = {
    fr: {
      title: 'Bejmat : notre page dédiée',
      text: 'Nettoyage, décapage, traitement du salpêtre et protection du bejmat : méthode, réalisations et questions fréquentes.',
      cta: 'Voir la page Nettoyage et protection du bejmat',
    },
    en: {
      title: 'Bejmat: our dedicated page',
      text: 'Cleaning, stripping, saltpetre treatment and protection of bejmat: method, projects and frequently asked questions.',
      cta: 'See the Bejmat cleaning and protection page',
    },
    ar: {
      title: 'البيجمات: صفحتنا المخصصة',
      text: 'تنظيف البيجمات وإزالة طبقاته القديمة ومعالجة الأملاح وحمايته: المنهجية والإنجازات والأسئلة الشائعة.',
      cta: 'عرض صفحة تنظيف وحماية البيجمات',
    },
    es: {
      title: 'Bejmat: nuestra página dedicada',
      text: 'Limpieza, decapado, tratamiento del salitre y protección del bejmat: método, realizaciones y preguntas frecuentes.',
      cta: 'Ver la página de limpieza y protección del bejmat',
    },
  };
  const bejmatLink = bejmatLinkTexts[language] ?? bejmatLinkTexts.fr;

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      {/* DO NOT CHANGE - backgroundSize must stay '100% auto' */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: bgOpacity,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />
      <Navigation />

      {/* Hero Section with Title */}
      <section className="pt-32 pb-10" style={{ backgroundColor: 'rgba(245,245,245,0.18)', position: 'relative', zIndex: 1 }}>
        <div className="container max-w-5xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-6 leading-tight" style={{ color: '#A33215' }}>
            {t.materials.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8" style={{ backgroundColor: 'rgba(245,245,245,0.18)', position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-gray-600">
              {t.materials.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="relative mb-12">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
            )}

            <div
              ref={containerRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeTab === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTranslationValue(`materials.${category.titleKey}`)}
                </button>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            )}
          </div>

          {/* Category Content */}
          {activeCategory && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslationValue(`materials.${activeCategory.titleKey}`)}
                </h2>

                {activeCategory.subtitleKey && (
                  <p className="text-gray-600 mb-6 italic">
                    {getTranslationValue(`materials.${activeCategory.subtitleKey}`)}
                  </p>
                )}

                {activeCategory.showProcessIcons && activeCategory.processStepsKeys && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                      Processus
                    </p>
                    <div className="flex gap-6">
                      {activeCategory.processStepsKeys.map((stepKey, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {processIcons[['prep', 'nano', 'protect'][idx]] || null}
                          </div>
                          <span className="text-xs font-medium text-gray-800 text-center whitespace-nowrap">
                            {getTranslationValue(`materials.${stepKey}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.issuesLabel}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getTranslationValue(`materials.${activeCategory.issuesKey}`)}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.actionsLabel}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getTranslationValue(`materials.${activeCategory.actionsKey}`)}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.materials.surfacesLabel}</h3>
                  <p className="text-gray-600 italic">
                    {getTranslationValue(`materials.${activeCategory.surfacesKey}`)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section zellige : chaine de degradation, dans les quatre langues */}
      <section className="pb-16 px-4 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[1.75rem] md:text-[2.25rem] font-bold mb-3" style={{ color: '#A33215' }}>
            {zellige.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">{zellige.lead}</p>

          <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">{zellige.chainLabel}</p>
          <ol className="grid md:grid-cols-2 gap-4 list-none p-0 m-0 mb-8">
            {zellige.steps.map((step, i) => (
              <li
                key={step.t}
                className="rounded-lg p-5 flex gap-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' }}
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: '#A33215' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.t}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 gap-4">
            <div
              className="rounded-lg p-5"
              style={{ backgroundColor: 'rgba(167,92,22,0.08)', border: '1px solid rgba(167,92,22,0.3)' }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{zellige.replaceTitle}</h3>
              <p className="text-gray-700 leading-relaxed">{zellige.replaceText}</p>
            </div>
            <div
              className="rounded-lg p-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{zellige.doTitle}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{zellige.doText}</p>
              <Link
                href="/contact"
                className="font-semibold underline underline-offset-4"
                style={{ color: '#A33215' }}
              >
                {zellige.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lien vers la page dediee Bejmat (toujours visible, y compris dans le HTML pre-rendu) */}
      <section className="pb-16 px-4 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-7xl mx-auto rounded-lg p-6" style={{ backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: '#A33215' }}>{bejmatLink.title}</h2>
          <p className="text-gray-700 mb-3">{bejmatLink.text}</p>
          <Link href="/nettoyage-bejmat-marrakech" className="font-semibold underline underline-offset-4" style={{ color: '#A33215' }}>
            {bejmatLink.cta}
          </Link>
        </div>
      </section>

      {/* Renvoi vers la page reglementaire. Francais uniquement : la page n'existe qu'en francais. */}
      {language === 'fr' && (
        <section className="pb-16 px-4 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <div className="max-w-7xl mx-auto rounded-lg p-6" style={{ backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' }}>
            <h2 className="text-xl font-bold mb-2" style={{ color: '#A33215' }}>
              Classement hôtelier : vos sols sont inspectés
            </h2>
            <p className="text-gray-700 mb-3">
              La réforme du classement des établissements d&apos;hébergement touristique classe le bon état
              d&apos;entretien et de propreté des sols parmi les normes obligatoires, et impose aux riads des matériaux
              traditionnels : pierre, marbre, zellijs ou parquet en bois.
            </p>
            <Link href="/classement-hotelier-maroc-etat-des-sols" className="font-semibold underline underline-offset-4" style={{ color: '#A33215' }}>
              Ce que la réforme exige de vos sols
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
