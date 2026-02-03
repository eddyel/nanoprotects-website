export type Language = 'fr' | 'ar' | 'es' | 'en';

export interface Translations {
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    ogType: string;
    twitterHandle: string;
  };
  nav: {
    philosophy: string;
    hospitality: string;
    materials: string;
    projects: string;
    realizations: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    benefit1Title: string;
    benefit1Text: string;
    benefit2Title: string;
    benefit2Text: string;
    benefit3Title: string;
    benefit3Text: string;
  };
  showroom: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterBejmat: string;
    filterPierreTaza: string;
    filterMarble: string;
    filterCarreauxBeldi: string;
    filterZellige: string;
    filterMetal: string;
    filterMineralization: string;
  };
  why: {
    title: string;
    subtitle: string;
    reason1Title: string;
    reason1Description: string;
    reason2Title: string;
    reason2Description: string;
    reason3Title: string;
    reason3Description: string;
    reason4Title: string;
    reason4Description: string;
  };
  what: {
    title: string;
    subtitle: string;
    benefit1Title: string;
    benefit1Text: string;
    benefit2Title: string;
    benefit2Text: string;
    benefit3Title: string;
    benefit3Text: string;
    stageBefore: string;
    stageClean: string;
    stageProtected: string;
  };
  how: {
    title: string;
    subtitle: string;
    phase1Title: string;
    phase1Step1Title: string;
    phase1Step1Text: string;
    phase1Step2Title: string;
    phase1Step2Text: string;
    phase2Title: string;
    phase2Step1Title: string;
    phase2Step1Text: string;
    phase2Step2Title: string;
    phase2Step2Text: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successMessage: string;
    errorNameRequired: string;
    errorEmailInvalid: string;
    errorMessageRequired: string;
    errorSubmit: string;
  };
  about: {
    title: string;
    section1Title: string;
    section1Text: string;
    section2Title: string;
    section2Text: string;
    section3Title: string;
    section3Text: string;
  };
  materials: {
    title: string;
    subtitle: string;
  };
  method: {
    title: string;
    subtitle: string;
    phase1Title: string;
    phase1Description: string;
    phase1Point1: string;
    phase1Point2: string;
    phase1Point3: string;
    phase2Title: string;
    phase2Description: string;
    phase2Point1: string;
    phase2Point2: string;
    phase2Point3: string;
    phase3Title: string;
    phase3Description: string;
    phase3Point1: string;
    phase3Point2: string;
    phase3Point3: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    // SEO Metadata
    seo: {
      title: 'NanoProtects - Nettoyage & Protection Nanotechnologique',
      description: 'Nettoyage régénérant et protection nanotechnologique durable pour les surfaces d\'exception. Revêtements invisibles 3-5 ans pour hôtels, restaurants et espaces de luxe à Marrakech.',
      keywords: 'nettoyage nanotechnologique, protection surfaces, marbre, pierre, bejmat, marrakech, hôtels, restaurants',
      ogImage: '/images/hero-riad.webp',
      ogType: 'website',
      twitterHandle: '@nanoprotects',
    },
    nav: {
      philosophy: 'À\nPropos',
      hospitality: 'Pourquoi\nNous Choisir ?',
      materials: 'Notre\nMéthode',
      projects: 'Matériaux\n& Expertises',
      realizations: 'Nos\nRéalisations',
      contact: 'Contact',
    },
    hero: {
      title: 'L\'Innovation au Service de l\'Excellence',
      subtitle: '<span style="font-weight: 600; color: #fef3c7;">Nettoyage</span> <span style="font-weight: 600; color: #fef3c7;">régénérant</span> et <span style="font-weight: 600; color: #fef3c7;">protection</span> <span style="font-weight: 600; color: #fef3c7;">nanotechnologique durable</span> pour les surfaces d\'exception. Nous révélons la beauté originelle de vos matériaux et la protégeons pour 3 à 5 ans grâce à des revêtements invisibles de dernière génération.',
      cta: 'Contactez Nous',
    },
    home: {
      benefit1Title: 'Temps Libéré',
      benefit1Text: 'Vos équipes se concentrent sur l\'hospitalité, nous prenons soin de vos surfaces',
      benefit2Title: 'Protection Durable',
      benefit2Text: 'Revêtement nanotechnologique invisible qui résiste à l\'eau, l\'huile et les taches',
      benefit3Title: 'ROI Rapide',
      benefit3Text: 'Retour sur investissement prouvé grâce aux économies de maintenance',
    },
    showroom: {
      title: 'Showroom : l\'Excellence en Images',
      subtitle: 'Découvrez la transformation spectaculaire de nos interventions à travers notre galerie avant/après',
      filterAll: 'Tous',
      filterBejmat: 'Bejmat',
      filterPierreTaza: 'Pierre de Taza',
      filterMarble: 'Marbre',
      filterCarreauxBeldi: 'Carreaux Beldi',
      filterZellige: 'Zellige',
      filterMetal: 'Métal',
      filterMineralization: 'Minéralisation',
    },
    why: {
      title: 'Pourquoi Nous Choisir ?',
      subtitle: 'Chaque surface raconte une histoire. Chaque matériau porte l\'âme de l\'artisan qui l\'a créé. Préserver cette beauté, c\'est honorer un héritage et garantir que vos espaces continuent d\'inspirer l\'émerveillement pour les générations à venir.',
      reason1Title: 'Expertise Scientifique & Sur-Mesure',
      reason1Description: 'Notre diagnostic précis et nos protocoles scientifiques écologiques, appliqués par des équipes hautement qualifiées, garantissent une solution parfaitement adaptée à chaque matériau et à vos enjeux spécifiques.',
      reason2Title: 'Technologie Durable & Régénérante',
      reason2Description: 'Nous allions un nettoyage régénérant, qui redonne leur éclat d\'origine aux surfaces, à une protection nanotechnologique invisible et durable (3 à 5 ans), pour une beauté préservée à long terme.',
      reason3Title: 'Agilité Opérationnelle & Discrétion Totale',
      reason3Description: 'Notre processus est conçu pour être ultra-efficace, agile et parfaitement discret. Il s\'intègre sans perturber votre exploitation, dans le respect strict de vos plannings et de votre image de marque.',
      reason4Title: 'Partenariat Rentable & de Confiance',
      reason4Description: 'Grâce à une relation de dialogue continu et une fiabilité d\'exécution, nous réduisons drastiquement vos coûts de maintenance à long terme, transformant l\'entretien en un investissement stratégique et serein.',
    },
    what: {
      title: 'Révéler la Beauté, Puis la Rendre Éternelle',
      subtitle: 'Une transformation complète en deux phases',
      benefit1Title: '60% Temps Libéré',
      benefit1Text: 'Vos équipes passent 60% moins de temps sur l\'entretien intensif et se concentrent sur l\'expérience client.',
      benefit2Title: '40% Équipes Valorisées',
      benefit2Text: 'Plus de temps pour le service personnalisé, l\'attention aux détails et la création de moments mémorables.',
      benefit3Title: '12-18 mois ROI Rapide',
      benefit3Text: 'Retour sur investissement mesurable grâce aux économies durables et à la préservation de votre patrimoine.',
      stageBefore: 'AVANT',
      stageClean: 'APRÈS NETTOYAGE',
      stageProtected: 'APRÈS PROTECTION',
    },
    how: {
      title: 'Notre Méthode en Deux Phases',
      subtitle: 'Une approche complète pour révéler et protéger',
      phase1Title: 'PHASE 1: NETTOYAGE',
      phase1Step1Title: 'Analyse des Salissures',
      phase1Step1Text: 'Diagnostic précis des taches et dégradations, identification des types de minéraux et des agents contaminants pour un traitement ciblé.',
      phase1Step2Title: 'Décapage & Restauration',
      phase1Step2Text: 'Nettoyage en profondeur pour révéler la beauté originale, élimination des couches anciennes et des impuretés incrustées sans endommager la surface.',
      phase2Title: 'PHASE 2: PROTECTION',
      phase2Step1Title: 'Application Nano-SiO2',
      phase2Step1Text: 'Revêtement nanotechnologique invisible hydrofuge et oléofuge, formant une barrière imperméable au niveau moléculaire contre l\'eau, l\'huile et les taches.',
      phase2Step2Title: 'Durabilité 3-5 Ans',
      phase2Step2Text: 'Protection longue durée avec effet autonettoyant, facilitant l\'entretien et préservant l\'éclat et l\'intégrité des surfaces traitées.',
    },
    contact: {
      title: 'Commençons Ensemble',
      subtitle: 'Contactez-nous pour un diagnostic gratuit',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      messagePlaceholder: 'Parlez-nous de votre projet',
      submit: 'Envoyer',
      submitting: 'Envoi en cours...',
      successMessage: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
      errorNameRequired: 'Le nom est requis (minimum 2 caractères)',
      errorEmailInvalid: 'Veuillez entrer une adresse email valide',
      errorMessageRequired: 'Le message est requis (minimum 10 caractères)',
      errorSubmit: 'Échec de l\'envoi du message. Veuillez réessayer.',
    },
    footer: {
      tagline: 'Nettoyage & Protection Invisible ou Décorative Toutes Surfaces',
      rights: 'Tous droits réservés',
    },
    about: {
      title: 'Nanotechnologies au service de l\'excellence',
      section1Title: 'Notre Approche Méthodique : Révéler et Préserver la Beauté Originelle',
      section1Text: 'Chaque surface raconte une histoire. Chaque matériau porte l\'âme de l\'artisan qui l\'a créé. Préserver cette beauté, c\'est honorer un héritage et garantir que vos espaces continuent d\'inspirer l\'émerveillement pour les générations à venir. Depuis 2019, chez NanoProtects, nous sommes bien plus qu\'un prestataire de nettoyage. Nous sommes les gardiens de votre patrimoine. Animés par une quête de perfection si aboutie qu\'elle en devient invisible, nous œuvrons pour que la beauté des lieux et la qualité de l\'accueil défient le temps.',
      section2Title: 'Notre Méthode',
      section2Text: 'Nous développons et déployons des processus d\'intervention à la fois ultra-efficients et parfaitement discrets, conçus pour s\'insérer sans perturbation dans l\'exploitation de nos clients. Notre engagement repose sur un dialogue systématique, une exécution agile et fiable, et une discrétion protectrice, pour préserver et sublimer durablement les matériaux.',
      section3Title: 'Notre Expertise',
      section3Text: 'Nous combinons la culture du soin méticuleux et l\'intention authentique à une recherche permanente de solutions nanotechnologiques de pointe. Notre expertise repose sur deux piliers complémentaires qui forment un écosystème de protection durable pour vos surfaces d\'exception.',
    },
    materials: {
      title: 'Matériaux et Expertises',
      subtitle: 'Avec des solutions adaptées à chaque surface, nous intervenons sur une large gamme de matériaux :',
    },
    method: {
      title: 'Notre Approche Méthodique : Révéler et Préserver la Beauté Originelle',
      subtitle: 'Une approche complète pour révéler et protéger la beauté de vos surfaces',
      phase1Title: 'Diagnostic',
      phase1Description: 'Analyse experte de l\'état de vos surfaces afin de déterminer la nature exacte des salissures, des altérations et du potentiel de restauration.',
      phase1Point1: 'Cartographie complète des dégradations (taches, usure, micro-rayures)',
      phase1Point2: 'Identification des types de surface et de leur sensibilité',
      phase1Point3: 'Établissement d\'un protocole d\'intervention personnalisé et justifié',
      phase2Title: 'Révéler',
      phase2Description: 'Nettoyage et régénération en profondeur basés sur le diagnostic, pour restaurer l\'éclat et l\'intégrité originels de la surface.',
      phase2Point1: 'Décapage et nettoyage professionnel ciblé grâce aux conclusions du diagnostic',
      phase2Point2: 'Élimination scientifique des taches, résidus et micro-organismes identifiés',
      phase2Point3: 'Restauration esthétique et préparatoire assurant une surface parfaitement saine et réceptive à la protection',
      phase3Title: 'Protéger',
      phase3Description: 'Scellement durable du résultat par l\'application de revêtements nanotechnologiques de dernière génération.',
      phase3Point1: 'Application d\'une barrière invisible (Nano-SiO₂) au niveau moléculaire, parfaitement adhérente grâce à la surface préparée',
      phase3Point2: 'Protection active hydrophobe, oléophobe et anti-graffiti',
      phase3Point3: 'Durabilité durable (3 à 5 ans) et résistance aux UV, aux agents chimiques et à l\'usure',
    },
  },
  ar: {
    seo: {
      title: 'NanoProtects - التنظيف والحماية النانوية',
      description: 'التنظيف المجدد والحماية النانوية المستدامة للأسطح الاستثنائية. طلاءات غير مرئية لمدة 3-5 سنوات للفنادق والمطاعم والمساحات الفاخرة في مراكش.',
      keywords: 'تنظيف نانوي، حماية الأسطح، رخام، حجر، بجمات، مراكش، فنادق، مطاعم',
      ogImage: '/images/hero-riad.webp',
      ogType: 'website',
      twitterHandle: '@nanoprotects',
    },
    nav: {
      philosophy: 'حول',
      hospitality: 'لماذا\nتختارنا؟',
      materials: 'طريقتنا',
      projects: 'المواد\nوالخبرات',
      realizations: 'إنجازاتنا',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'الابتكار في خدمة التميز',
      subtitle: 'التنظيف المجدد والحماية النانوية المستدامة للأسطح الاستثنائية. نكشف الجمال الأصلي لمواد بناءك ونحميها لمدة 3 إلى 5 سنوات بفضل الطلاءات غير المرئية من الجيل الأخير.',
      cta: 'اتصل بنا',
    },
    home: {
      benefit1Title: 'وقت محرر',
      benefit1Text: 'تركز فرقك على الضيافة، نحن نعتني بأسطحك',
      benefit2Title: 'حماية دائمة',
      benefit2Text: 'طلاء نانوتكنولوجي غير مرئي يقاوم الماء والزيت والبقع',
      benefit3Title: 'عائد سريع',
      benefit3Text: 'عائد استثمار مثبت بفضل توفير الصيانة',
    },
    showroom: {
      title: 'عرض الأعمال: التميز في الصور',
      subtitle: 'اكتشف التحول الرائع لتدخلاتنا من خلال معرض قبل وبعد',
      filterAll: 'الكل',
      filterBejmat: 'بيجمات',
      filterPierreTaza: 'حجر تازة',
      filterMarble: 'رخام',
      filterCarreauxBeldi: 'بلاط بلدي',
      filterZellige: 'زليج',
      filterMetal: 'معدن',
      filterMineralization: 'تمعدن',
    },
    why: {
      title: 'لماذا تختارنا؟',
      subtitle: 'كل سطح يحكي قصة. كل مادة تحمل روح الحرفي الذي صنعها. الحفاظ على هذا الجمال يعني تكريم إرث وضمان استمرار مساحاتك في إلهام الإعجاب للأجيال القادمة.',
      reason1Title: 'الخبرة العلمية والحلول المخصصة',
      reason1Description: 'يضمن تشخيصنا الدقيق وبروتوكولاتنا العلمية البيئية، التي تطبقها فرق مؤهلة عالياً، حلاً مثالياً لكل مادة واحتياجاتك المحددة.',
      reason2Title: 'التكنولوجيا المستدامة والمجددة',
      reason2Description: 'نجمع بين التنظيف المجدد الذي يعيد اللمعان الأصلي للأسطح مع الحماية النانوية غير المرئية والدائمة (3-5 سنوات)، لجمال محفوظ على المدى الطويل.',
      reason3Title: 'الرشاقة التشغيلية والسرية الكاملة',
      reason3Description: 'عمليتنا مصممة لتكون فعالة للغاية وخفيفة وسرية تماماً. تندمج بدون تعطيل عملياتك، مع احترام صارم لجداولك وسمعتك.',
      reason4Title: 'الشراكة المربحة والموثوقة',
      reason4Description: 'من خلال الحوار المستمر والموثوقية في التنفيذ، نقلل بشكل كبير تكاليف الصيانة طويلة الأجل، مما يحول الصيانة إلى استثمار استراتيجي وآمن.',
    },
    what: {
      title: 'كشف الجمال، ثم جعله أبديًا',
      subtitle: 'تحول كامل في مرحلتين',
      benefit1Title: '60% وقت محرر',
      benefit1Text: 'تقضي فرقك 60% أقل من الوقت في الصيانة المكثفة وتركز على تجربة العملاء.',
      benefit2Title: '40% فرق محفزة',
      benefit2Text: 'مزيد من الوقت للخدمة الشخصية والاهتمام بالتفاصيل وخلق لحظات لا تُنسى.',
      benefit3Title: '12-18 شهر عائد سريع',
      benefit3Text: 'عائد استثمار قابل للقياس بفضل التوفير المستدام والحفاظ على تراثك.',
      stageBefore: 'قبل',
      stageClean: 'بعد التنظيف',
      stageProtected: 'بعد الحماية',
    },
    how: {
      title: 'طريقتنا في مرحلتين',
      subtitle: 'نهج شامل للكشف والحماية',
      phase1Title: 'المرحلة 1: التنظيف',
      phase1Step1Title: 'تحليل الأوساخ',
      phase1Step1Text: 'تشخيص دقيق للبقع والتدهور، تحديد أنواع المعادن والملوثات لمعالجة موجهة.',
      phase1Step2Title: 'الكشط والاستعادة',
      phase1Step2Text: 'التنظيف العميق للكشف عن الجمال الأصلي، إزالة الطبقات القديمة والشوائب المتراكمة دون إتلاف السطح.',
      phase2Title: 'المرحلة 2: الحماية',
      phase2Step1Title: 'تطبيق نانو-SiO2',
      phase2Step1Text: 'طلاء نانوتكنولوجي غير مرئي مقاوم للماء والزيت، يشكل حاجزاً مقاوماً للماء على المستوى الجزيئي ضد الماء والزيت والبقع.',
      phase2Step2Title: 'المتانة 3-5 سنوات',
      phase2Step2Text: 'حماية طويلة الأجل مع تأثير التنظيف الذاتي، مما يسهل الصيانة ويحافظ على بريق وسلامة الأسطح المعالجة.',
    },
    contact: {
      title: 'لنبدأ معاً',
      subtitle: 'اتصل بنا للحصول على تشخيص مجاني',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      messagePlaceholder: 'حدثنا عن مشروعك',
      submit: 'إرسال',
      submitting: 'جاري الإرسال...',
      successMessage: 'تم إرسال الرسالة بنجاح! سنرد عليك قريباً.',
      errorNameRequired: 'الاسم مطلوب (الحد الأدنى 2 حرف)',
      errorEmailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      errorMessageRequired: 'الرسالة مطلوبة (الحد الأدنى 10 أحرف)',
      errorSubmit: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    footer: {
      tagline: 'التنظيف والحماية غير المرئية أو الزخرفية جميع الأسطح',
      rights: 'جميع الحقوق محفوظة',
    },
    about: {
      title: 'النانوتكنولوجيا في خدمة التميز',
      section1Title: 'نهجنا المنهجي: الكشف والحفاظ على الجمال الأصلي',
      section1Text: 'كل سطح يحكي قصة. كل مادة تحمل روح الحرفي الذي أنشأها. الحفاظ على هذا الجمال يعني تكريم إرث وضمان أن تستمر مساحاتك في إلهام الدهشة للأجيال القادمة. منذ عام 2019، نحن في NanoProtects أكثر من مجرد مزود خدمة تنظيف. نحن حراس تراثك. مدفوعون بسعي للكمال أصبح غير مرئي لدرجة أنه يصبح غير مرئي، نعمل لكي يتحدى جمال الأماكن وجودة الاستقبال الزمن.',
      section2Title: 'طريقتنا',
      section2Text: 'نطور ونطبق عمليات تدخل فعالة للغاية وسرية تماماً، مصممة للاندماج دون إزعاج في عمليات عملائنا. يعتمد التزامنا على الحوار المنهجي والتنفيذ الرشيق والموثوق والسرية الحامية، للحفاظ على المواد وتحسينها بشكل دائم.',
      section3Title: 'خبرتنا',
      section3Text: 'نجمع بين ثقافة الرعاية الدقيقة والنية الحقيقية مع البحث المستمر عن حلول النانوتكنولوجيا المتقدمة. تعتمد خبرتنا على عمودين متكاملين يشكلان نظاماً بيئياً للحماية المستدامة لأسطحك الاستثنائية.',
    },
    materials: {
      title: 'المواد والخبرات',
      subtitle: 'مع حلول مخصصة لكل سطح، نتدخل على نطاق واسع من المواد:',
    },
    method: {
      title: 'نهجنا المنهجي: الكشف والحفاظ على الجمال الأصلي',
      subtitle: 'نهج شامل للكشف والحفاظ على جمال أسطحك',
      phase1Title: 'التشخيص',
      phase1Description: 'تحليل خبير لحالة أسطحك لتحديد الطبيعة الدقيقة للتلوث والتدهور والإمكانات الترميمية.',
      phase1Point1: 'رسم خريطة شاملة للتدهور (البقع والبلى والخدوش الدقيقة)',
      phase1Point2: 'تحديد أنواع السطح وحساسيتها',
      phase1Point3: 'وضع بروتوكول تدخل مخصص ومبرر',
      phase2Title: 'الكشف',
      phase2Description: 'التنظيف والتجديد العميق بناءً على التشخيص، لاستعادة البريق والسلامة الأصليين للسطح.',
      phase2Point1: 'الكشط والتنظيف الاحترافي الموجه بناءً على استنتاجات التشخيص',
      phase2Point2: 'الإزالة العلمية للبقع والبقايا والكائنات الحية الدقيقة المحددة',
      phase2Point3: 'الاستعادة الجمالية والتحضيرية لضمان سطح صحي تماماً وقابل للحماية',
      phase3Title: 'الحماية',
      phase3Description: 'إغلاق دائم للنتيجة من خلال تطبيق طلاءات النانوتكنولوجيا من الجيل الأخير.',
      phase3Point1: 'تطبيق حاجز غير مرئي (Nano-SiO₂) على المستوى الجزيئي، مع التصاق مثالي بفضل السطح المحضر',
      phase3Point2: 'حماية نشطة مقاومة للماء والزيت ومقاومة للكتابة بالجرافيتي',
      phase3Point3: 'متانة دائمة (3 إلى 5 سنوات) ومقاومة للأشعة فوق البنفسجية والعوامل الكيميائية والبلى',
    },
  },
  es: {
    seo: {
      title: 'NanoProtects - Limpieza y Protección Nanotecnológica',
      description: 'Limpieza regeneradora y protección nanotecnológica duradera para superficies excepcionales. Recubrimientos invisibles 3-5 años para hoteles, restaurantes y espacios de lujo en Marrakech.',
      keywords: 'limpieza nanotecnológica, protección de superficies, mármol, piedra, bejmat, marrakech, hoteles, restaurantes',
      ogImage: '/images/hero-riad.webp',
      ogType: 'website',
      twitterHandle: '@nanoprotects',
    },
    nav: {
      philosophy: 'Acerca de',
      hospitality: '¿Por Qué\nNosotros?',
      materials: 'Nuestro\nMétodo',
      projects: 'Materiales\ny Experiencias',
      realizations: 'Nuestros\nProyectos',
      contact: 'Contacto',
    },
    hero: {
      title: 'La Innovación al Servicio de la Excelencia',
      subtitle: 'Limpieza regeneradora y protección nanotecnológica duradera para superficies excepcionales. Revelamos la belleza original de tus materiales y los protegemos durante 3 a 5 años con recubrimientos invisibles de última generación.',
      cta: 'Contáctanos',
    },
    home: {
      benefit1Title: 'Tiempo Liberado',
      benefit1Text: 'Tus equipos se concentran en la hospitalidad, nosotros cuidamos tus superficies',
      benefit2Title: 'Protección Duradera',
      benefit2Text: 'Recubrimiento nanotecnológico invisible que resiste agua, aceite y manchas',
      benefit3Title: 'ROI Rápido',
      benefit3Text: 'Retorno de inversión comprobado gracias al ahorro de mantenimiento',
    },
    showroom: {
      title: 'Galería: La Excelencia en Imágenes',
      subtitle: 'Descubre la transformación espectacular de nuestras intervenciones a través de nuestra galería antes/después',
      filterAll: 'Todos',
      filterBejmat: 'Bejmat',
      filterPierreTaza: 'Piedra de Taza',
      filterMarble: 'Mármol',
      filterCarreauxBeldi: 'Azulejos Beldi',
      filterZellige: 'Zellige',
      filterMetal: 'Metal',
      filterMineralization: 'Mineralización',
    },
    why: {
      title: '¿Por Qué Elegirnos?',
      subtitle: 'Cada superficie cuenta una historia. Cada material lleva el alma del artesano que lo creó. Preservar esta belleza es honrar un legado y garantizar que tus espacios continúen inspirando asombro para las generaciones venideras.',
      reason1Title: 'Experiencia Científica y Personalizada',
      reason1Description: 'Nuestro diagnóstico preciso y protocolos científicos ecológicos, aplicados por equipos altamente calificados, garantizan una solución perfectamente adaptada a cada material y tus necesidades específicas.',
      reason2Title: 'Tecnología Duradera y Regeneradora',
      reason2Description: 'Combinamos una limpieza regeneradora que devuelve el brillo original a las superficies con una protección nanotecnológica invisible y duradera (3 a 5 años), para una belleza preservada a largo plazo.',
      reason3Title: 'Agilidad Operacional y Discreción Total',
      reason3Description: 'Nuestro proceso está diseñado para ser ultra eficiente, ágil y completamente discreto. Se integra sin perturbar tu operación, respetando estrictamente tus cronogramas y tu marca.',
      reason4Title: 'Asociación Rentable y de Confianza',
      reason4Description: 'A través del diálogo continuo y la confiabilidad en la ejecución, reducimos drásticamente tus costos de mantenimiento a largo plazo, transformando el mantenimiento en una inversión estratégica y segura.',
    },
    what: {
      title: 'Revelar la Belleza, Luego Hacerla Eterna',
      subtitle: 'Una transformación completa en dos fases',
      benefit1Title: '60% Tiempo Liberado',
      benefit1Text: 'Tus equipos dedican 60% menos tiempo al mantenimiento intensivo y se concentran en la experiencia del cliente.',
      benefit2Title: '40% Equipos Valorados',
      benefit2Text: 'Más tiempo para servicio personalizado, atención al detalle y creación de momentos memorables.',
      benefit3Title: '12-18 meses ROI Rápido',
      benefit3Text: 'Retorno de inversión medible gracias a ahorros sostenibles y preservación de tu patrimonio.',
      stageBefore: 'ANTES',
      stageClean: 'DESPUÉS DE LIMPIEZA',
      stageProtected: 'DESPUÉS DE PROTECCIÓN',
    },
    how: {
      title: 'Nuestro Método en Dos Fases',
      subtitle: 'Un enfoque completo para revelar y proteger',
      phase1Title: 'FASE 1: LIMPIEZA',
      phase1Step1Title: 'Análisis de Suciedad',
      phase1Step1Text: 'Diagnóstico preciso de manchas y degradación, identificación de tipos de minerales y agentes contaminantes para tratamiento dirigido.',
      phase1Step2Title: 'Decapado y Restauración',
      phase1Step2Text: 'Limpieza profunda para revelar la belleza original, eliminación de capas antiguas e impurezas incrustadas sin dañar la superficie.',
      phase2Title: 'FASE 2: PROTECCIÓN',
      phase2Step1Title: 'Aplicación Nano-SiO2',
      phase2Step1Text: 'Recubrimiento nanotecnológico invisible hidrófobo y oleófobo, formando una barrera impermeable a nivel molecular contra agua, aceite y manchas.',
      phase2Step2Title: 'Durabilidad 3-5 Años',
      phase2Step2Text: 'Protección de larga duración con efecto autolimpiante, facilitando el mantenimiento y preservando el brillo e integridad de las superficies tratadas.',
    },
    contact: {
      title: 'Comencemos Juntos',
      subtitle: 'Contáctanos para un diagnóstico gratuito',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto',
      submit: 'Enviar',
      submitting: 'Enviando...',
      successMessage: '¡Mensaje enviado con éxito! Te responderemos pronto.',
      errorNameRequired: 'El nombre es requerido (mínimo 2 caracteres)',
      errorEmailInvalid: 'Por favor ingresa un correo electrónico válido',
      errorMessageRequired: 'El mensaje es requerido (mínimo 10 caracteres)',
      errorSubmit: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
    },
    footer: {
      tagline: 'Limpieza y Protección Invisible o Decorativa Todas las Superficies',
      rights: 'Todos los derechos reservados',
    },
    about: {
      title: 'Nanotecnologías al Servicio de la Excelencia',
      section1Title: 'Nuestro Enfoque Metodológico: Revelar y Preservar la Belleza Original',
      section1Text: 'Cada superficie cuenta una historia. Cada material lleva el alma del artesano que lo creó. Preservar esta belleza es honrar un legado y garantizar que tus espacios continúen inspirando asombro para las generaciones venideras. Desde 2019, en NanoProtects somos más que un proveedor de servicios de limpieza. Somos los guardianes de tu patrimonio. Impulsados por una búsqueda de perfección tan lograda que se vuelve invisible, trabajamos para que la belleza de los lugares y la calidad de la acogida desafíen el tiempo.',
      section2Title: 'Nuestro Método',
      section2Text: 'Desarrollamos e implementamos procesos de intervención ultra eficientes y perfectamente discretos, diseñados para integrarse sin perturbación en la operación de nuestros clientes. Nuestro compromiso se basa en un diálogo sistemático, una ejecución ágil y confiable, y una discreción protectora, para preservar y mejorar duradéramente los materiales.',
      section3Title: 'Nuestra Experiencia',
      section3Text: 'Combinamos la cultura del cuidado meticuloso y la intención auténtica con la búsqueda permanente de soluciones nanotecnológicas de vanguardia. Nuestra experiencia se basa en dos pilares complementarios que forman un ecosistema de protección sostenible para tus superficies excepcionales.',
    },
    materials: {
      title: 'Materiales y Experiencias',
      subtitle: 'Con soluciones adaptadas a cada superficie, intervenimos en una amplia gama de materiales:',
    },
    method: {
      title: 'Nuestro Enfoque Metodológico: Revelar y Preservar la Belleza Original',
      subtitle: 'Un enfoque completo para revelar y proteger la belleza de tus superficies',
      phase1Title: 'Diagnóstico',
      phase1Description: 'Análisis experto del estado de tus superficies para determinar la naturaleza exacta de la suciedad, alteraciones y potencial de restauración.',
      phase1Point1: 'Mapeo completo de degradaciones (manchas, desgaste, microrrayos)',
      phase1Point2: 'Identificación de tipos de superficie y su sensibilidad',
      phase1Point3: 'Establecimiento de protocolo de intervención personalizado y justificado',
      phase2Title: 'Revelar',
      phase2Description: 'Limpieza y regeneración profunda basadas en el diagnóstico, para restaurar el brillo e integridad originales de la superficie.',
      phase2Point1: 'Decapado y limpieza profesional dirigida según conclusiones del diagnóstico',
      phase2Point2: 'Eliminación científica de manchas, residuos y microorganismos identificados',
      phase2Point3: 'Restauración estética y preparatoria asegurando una superficie perfectamente sana y receptiva a la protección',
      phase3Title: 'Proteger',
      phase3Description: 'Sellado duradero del resultado mediante la aplicación de recubrimientos nanotecnológicos de última generación.',
      phase3Point1: 'Aplicación de barrera invisible (Nano-SiO₂) a nivel molecular, perfectamente adherida gracias a la superficie preparada',
      phase3Point2: 'Protección activa hidrófoba, oleófoba y anti-graffiti',
      phase3Point3: 'Durabilidad duradera (3 a 5 años) y resistencia a UV, agentes químicos y desgaste',
    },
  },
  en: {
    seo: {
      title: 'NanoProtects - Nanotechnology Cleaning & Protection',
      description: 'Regenerative cleaning and sustainable nanotechnology protection for exceptional surfaces. Invisible coatings 3-5 years for luxury hotels, restaurants and spaces in Marrakech.',
      keywords: 'nanotechnology cleaning, surface protection, marble, stone, bejmat, marrakech, hotels, restaurants',
      ogImage: '/images/hero-riad.webp',
      ogType: 'website',
      twitterHandle: '@nanoprotects',
    },
    nav: {
      philosophy: 'About',
      hospitality: 'Why\nChoose Us?',
      materials: 'Our\nMethod',
      projects: 'Materials\n& Expertise',
      realizations: 'Our\nProjects',
      contact: 'Contact',
    },
    hero: {
      title: 'Innovation in Service of Excellence',
      subtitle: 'Regenerative cleaning and sustainable nanotechnology protection for exceptional surfaces. We reveal the original beauty of your materials and protect them for 3 to 5 years with cutting-edge invisible coatings.',
      cta: 'Contact Us',
    },
    home: {
      benefit1Title: 'Time Freed',
      benefit1Text: 'Your teams focus on hospitality, we take care of your surfaces',
      benefit2Title: 'Lasting Protection',
      benefit2Text: 'Invisible nanotechnology coating that resists water, oil and stains',
      benefit3Title: 'Quick ROI',
      benefit3Text: 'Proven return on investment through maintenance savings',
    },
    showroom: {
      title: 'Gallery: Excellence in Images',
      subtitle: 'Discover the spectacular transformation of our interventions through our before/after gallery',
      filterAll: 'All',
      filterBejmat: 'Bejmat',
      filterPierreTaza: 'Taza Stone',
      filterMarble: 'Marble',
      filterCarreauxBeldi: 'Beldi Tiles',
      filterZellige: 'Zellige',
      filterMetal: 'Metal',
      filterMineralization: 'Mineralization',
    },
    why: {
      title: 'Why Choose Us?',
      subtitle: 'Every surface tells a story. Every material carries the soul of the craftsman who created it. Preserving this beauty means honoring a legacy and ensuring your spaces continue to inspire wonder for generations to come.',
      reason1Title: 'Scientific & Custom Expertise',
      reason1Description: 'Our precise diagnosis and ecological scientific protocols, applied by highly qualified teams, guarantee a solution perfectly adapted to each material and your specific needs.',
      reason2Title: 'Sustainable & Regenerative Technology',
      reason2Description: 'We combine regenerative cleaning that restores the original shine to surfaces with invisible and durable nanotechnology protection (3-5 years), for beauty preserved long-term.',
      reason3Title: 'Operational Agility & Total Discretion',
      reason3Description: 'Our process is designed to be ultra-efficient, agile and completely discreet. It integrates without disrupting your operations, strictly respecting your schedules and brand image.',
      reason4Title: 'Profitable & Trustworthy Partnership',
      reason4Description: 'Through continuous dialogue and reliable execution, we drastically reduce your long-term maintenance costs, transforming maintenance into a strategic and secure investment.',
    },
    what: {
      title: 'Reveal Beauty, Then Make It Eternal',
      subtitle: 'A complete transformation in two phases',
      benefit1Title: '60% Time Freed',
      benefit1Text: 'Your teams spend 60% less time on intensive maintenance and focus on customer experience.',
      benefit2Title: '40% Valued Teams',
      benefit2Text: 'More time for personalized service, attention to detail and creating memorable moments.',
      benefit3Title: '12-18 months Quick ROI',
      benefit3Text: 'Measurable return on investment through sustainable savings and heritage preservation.',
      stageBefore: 'BEFORE',
      stageClean: 'AFTER CLEANING',
      stageProtected: 'AFTER PROTECTION',
    },
    how: {
      title: 'Our Method in Two Phases',
      subtitle: 'A complete approach to reveal and protect',
      phase1Title: 'PHASE 1: CLEANING',
      phase1Step1Title: 'Dirt Analysis',
      phase1Step1Text: 'Precise diagnosis of stains and degradation, identification of mineral types and contaminants for targeted treatment.',
      phase1Step2Title: 'Stripping & Restoration',
      phase1Step2Text: 'Deep cleaning to reveal original beauty, removal of old layers and embedded impurities without damaging the surface.',
      phase2Title: 'PHASE 2: PROTECTION',
      phase2Step1Title: 'Nano-SiO2 Application',
      phase2Step1Text: 'Invisible nanotechnology coating that is water and oil repellent, forming a molecular-level impermeable barrier against water, oil and stains.',
      phase2Step2Title: 'Durability 3-5 Years',
      phase2Step2Text: 'Long-lasting protection with self-cleaning effect, facilitating maintenance and preserving the shine and integrity of treated surfaces.',
    },
    contact: {
      title: 'Let\'s Start Together',
      subtitle: 'Contact us for a free diagnosis',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell us about your project',
      submit: 'Send',
      submitting: 'Sending...',
      successMessage: 'Message sent successfully! We will respond soon.',
      errorNameRequired: 'Name is required (minimum 2 characters)',
      errorEmailInvalid: 'Please enter a valid email address',
      errorMessageRequired: 'Message is required (minimum 10 characters)',
      errorSubmit: 'Failed to send message. Please try again.',
    },
    footer: {
      tagline: 'Invisible or Decorative Cleaning and Protection All Surfaces',
      rights: 'All rights reserved',
    },
    about: {
      title: 'Nanotechnologies in Service of Excellence',
      section1Title: 'Our Methodical Approach: Reveal and Preserve Original Beauty',
      section1Text: 'Every surface tells a story. Every material carries the soul of the craftsman who created it. Preserving this beauty means honoring a legacy and ensuring your spaces continue to inspire wonder for generations to come. Since 2019, at NanoProtects we are more than a cleaning service provider. We are the guardians of your heritage. Driven by a pursuit of perfection so accomplished it becomes invisible, we work to ensure the beauty of places and quality of hospitality defy time.',
      section2Title: 'Our Method',
      section2Text: 'We develop and deploy intervention processes that are ultra-efficient and perfectly discreet, designed to integrate without disruption into our clients\' operations. Our commitment is based on systematic dialogue, agile and reliable execution, and protective discretion, to preserve and sustainably enhance materials.',
      section3Title: 'Our Expertise',
      section3Text: 'We combine the culture of meticulous care and authentic intention with the permanent pursuit of cutting-edge nanotechnology solutions. Our expertise is based on two complementary pillars that form an ecosystem of sustainable protection for your exceptional surfaces.',
    },
    materials: {
      title: 'Materials and Expertise',
      subtitle: 'With solutions adapted to each surface, we intervene on a wide range of materials:',
    },
    method: {
      title: 'Our Methodical Approach: Reveal and Preserve Original Beauty',
      subtitle: 'A complete approach to reveal and protect the beauty of your surfaces',
      phase1Title: 'Diagnosis',
      phase1Description: 'Expert analysis of your surfaces\' condition to determine the exact nature of soiling, alterations and restoration potential.',
      phase1Point1: 'Complete mapping of degradations (stains, wear, micro-scratches)',
      phase1Point2: 'Identification of surface types and their sensitivity',
      phase1Point3: 'Establishment of personalized and justified intervention protocol',
      phase2Title: 'Reveal',
      phase2Description: 'Deep cleaning and regeneration based on diagnosis, to restore the original shine and integrity of the surface.',
      phase2Point1: 'Stripping and professional cleaning targeted according to diagnosis conclusions',
      phase2Point2: 'Scientific elimination of stains, residues and identified microorganisms',
      phase2Point3: 'Aesthetic and preparatory restoration ensuring a perfectly healthy surface receptive to protection',
      phase3Title: 'Protect',
      phase3Description: 'Durable sealing of the result through the application of cutting-edge nanotechnology coatings.',
      phase3Point1: 'Application of invisible barrier (Nano-SiO₂) at molecular level, perfectly adhered thanks to prepared surface',
      phase3Point2: 'Active hydrophobic, oleophobic and anti-graffiti protection',
      phase3Point3: 'Durable durability (3 to 5 years) and resistance to UV, chemical agents and wear',
    },
  },
};
