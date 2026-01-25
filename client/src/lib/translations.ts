export type Language = 'fr' | 'ar' | 'es' | 'en';

export interface Translations {
  nav: {
    philosophy: string;
    hospitality: string;
    materials: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  why: {
    title: string;
    subtitle: string;
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
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      philosophy: 'Philosophie',
      hospitality: 'Hôtellerie',
      materials: 'Matériaux',
      projects: 'Réalisations',
      contact: 'Contact',
    },
    hero: {
      title: 'La Beauté Qui Défie Le Temps',
      subtitle: 'Protection nanotechnologique au service du patrimoine marocain',
      cta: 'Découvrez Notre Philosophie',
    },
    why: {
      title: 'Pourquoi Protéger Votre Patrimoine?',
      subtitle: 'Chaque surface raconte une histoire. Chaque matériau porte l\'âme de l\'artisan qui l\'a créé. Préserver cette beauté, c\'est honorer un héritage et garantir que vos espaces continuent d\'inspirer l\'émerveillement pour les générations à venir.',
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
    },
    footer: {
      tagline: 'Nettoyage & Protection Invisible ou Décorative Toutes Surfaces',
      rights: 'Tous droits réservés',
    },
  },
  ar: {
    nav: {
      philosophy: 'الفلسفة',
      hospitality: 'الضيافة',
      materials: 'المواد',
      projects: 'المشاريع',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'الجمال الذي يتحدى الزمن',
      subtitle: 'حماية تقنية النانو في خدمة التراث المغربي',
      cta: 'اكتشف فلسفتنا',
    },
    why: {
      title: 'لماذا حماية تراثك؟',
      subtitle: 'كل سطح يحكي قصة. كل مادة تحمل روح الحرفي الذي صنعها. الحفاظ على هذا الجمال يعني تكريم إرث وضمان استمرار مساحاتك في إلهام الإعجاب للأجيال القادمة.',
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
      phase1Step1Title: 'تحليل البقع',
      phase1Step1Text: 'تشخيص دقيق للبقع والتدهور، تحديد أنواع المعادن والعوامل الملوثة للعلاج المستهدف.',
      phase1Step2Title: 'التجريد والترميم',
      phase1Step2Text: 'تنظيف عميق لكشف الجمال الأصلي، إزالة الطبقات القديمة والشوائب المتراكمة دون إتلاف السطح.',
      phase2Title: 'المرحلة 2: الحماية',
      phase2Step1Title: 'تطبيق نانو-SiO2',
      phase2Step1Text: 'طلاء نانوتكنولوجي غير مرئي مضاد للماء والزيت، يشكل حاجزًا غير منفذ على المستوى الجزيئي ضد الماء والزيت والبقع.',
      phase2Step2Title: 'متانة 3-5 سنوات',
      phase2Step2Text: 'حماية طويلة الأمد مع تأثير التنظيف الذاتي، مما يسهل الصيانة ويحافظ على لمعان وسلامة الأسطح المعالجة.',
    },
    contact: {
      title: 'لنبدأ معًا',
      subtitle: 'اتصل بنا للحصول على تشخيص مجاني',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      messagePlaceholder: 'أخبرنا عن مشروعك',
      submit: 'إرسال',
    },
    footer: {
      tagline: 'تنظيف وحماية غير مرئية أو زخرفية لجميع الأسطح',
      rights: 'جميع الحقوق محفوظة',
    },
  },
  es: {
    nav: {
      philosophy: 'Filosofía',
      hospitality: 'Hostelería',
      materials: 'Materiales',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      title: 'La Belleza Que Desafía El Tiempo',
      subtitle: 'Protección nanotecnológica al servicio del patrimonio marroquí',
      cta: 'Descubre Nuestra Filosofía',
    },
    why: {
      title: '¿Por Qué Proteger Tu Patrimonio?',
      subtitle: 'Cada superficie cuenta una historia. Cada material lleva el alma del artesano que lo creó. Preservar esta belleza es honrar un legado y garantizar que tus espacios continúen inspirando asombro para las generaciones venideras.',
    },
    what: {
      title: 'Revelar la Belleza, Luego Hacerla Eterna',
      subtitle: 'Una transformación completa en dos fases',
      benefit1Title: '60% Tiempo Liberado',
      benefit1Text: 'Tus equipos pasan 60% menos tiempo en mantenimiento intensivo y se concentran en la experiencia del cliente.',
      benefit2Title: '40% Equipos Valorados',
      benefit2Text: 'Más tiempo para el servicio personalizado, atención a los detalles y creación de momentos memorables.',
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
      phase1Step1Title: 'Análisis de Manchas',
      phase1Step1Text: 'Diagnóstico preciso de manchas y degradaciones, identificación de tipos de minerales y agentes contaminantes para tratamiento dirigido.',
      phase1Step2Title: 'Decapado y Restauración',
      phase1Step2Text: 'Limpieza profunda para revelar la belleza original, eliminación de capas antiguas e impurezas incrustadas sin dañar la superficie.',
      phase2Title: 'FASE 2: PROTECCIÓN',
      phase2Step1Title: 'Aplicación Nano-SiO2',
      phase2Step1Text: 'Revestimiento nanotecnológico invisible hidrófugo y oleófugo, formando una barrera impermeable a nivel molecular contra agua, aceite y manchas.',
      phase2Step2Title: 'Durabilidad 3-5 Años',
      phase2Step2Text: 'Protección de larga duración con efecto autolimpiante, facilitando el mantenimiento y preservando el brillo e integridad de las superficies tratadas.',
    },
    contact: {
      title: 'Comencemos Juntos',
      subtitle: 'Contáctanos para un diagnóstico gratuito',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto',
      submit: 'Enviar',
    },
    footer: {
      tagline: 'Limpieza y Protección Invisible o Decorativa Todas las Superficies',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      philosophy: 'Philosophy',
      hospitality: 'Hospitality',
      materials: 'Materials',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Beauty That Defies Time',
      subtitle: 'Nanotechnology protection serving Moroccan heritage',
      cta: 'Discover Our Philosophy',
    },
    why: {
      title: 'Why Protect Your Heritage?',
      subtitle: 'Every surface tells a story. Every material carries the soul of the artisan who created it. Preserving this beauty means honoring a legacy and ensuring your spaces continue to inspire wonder for generations to come.',
    },
    what: {
      title: 'Reveal Beauty, Then Make It Eternal',
      subtitle: 'A complete transformation in two phases',
      benefit1Title: '60% Time Freed',
      benefit1Text: 'Your teams spend 60% less time on intensive maintenance and focus on customer experience.',
      benefit2Title: '40% Empowered Teams',
      benefit2Text: 'More time for personalized service, attention to detail, and creating memorable moments.',
      benefit3Title: '12-18 months Fast ROI',
      benefit3Text: 'Measurable return on investment through sustainable savings and preservation of your heritage.',
      stageBefore: 'BEFORE',
      stageClean: 'AFTER CLEANING',
      stageProtected: 'AFTER PROTECTION',
    },
    how: {
      title: 'Our Two-Phase Method',
      subtitle: 'A comprehensive approach to reveal and protect',
      phase1Title: 'PHASE 1: CLEANING',
      phase1Step1Title: 'Stain Analysis',
      phase1Step1Text: 'Precise diagnosis of stains and degradations, identification of mineral types and contaminating agents for targeted treatment.',
      phase1Step2Title: 'Stripping & Restoration',
      phase1Step2Text: 'Deep cleaning to reveal original beauty, removal of old layers and embedded impurities without damaging the surface.',
      phase2Title: 'PHASE 2: PROTECTION',
      phase2Step1Title: 'Nano-SiO2 Application',
      phase2Step1Text: 'Invisible nanotechnology coating that is hydrophobic and oleophobic, forming an impermeable barrier at the molecular level against water, oil, and stains.',
      phase2Step2Title: '3-5 Years Durability',
      phase2Step2Text: 'Long-lasting protection with self-cleaning effect, facilitating maintenance and preserving the shine and integrity of treated surfaces.',
    },
    contact: {
      title: 'Let\'s Start Together',
      subtitle: 'Contact us for a free diagnosis',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell us about your project',
      submit: 'Send',
    },
    footer: {
      tagline: 'Cleaning & Invisible or Decorative Protection All Surfaces',
      rights: 'All rights reserved',
    },
  },
};
