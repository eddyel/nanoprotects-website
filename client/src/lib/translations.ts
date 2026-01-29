export type Language = 'fr' | 'ar' | 'es' | 'en';

export interface Translations {
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
  footer: {
    tagline: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
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
      subtitle: 'Nettoyage régénérant et protection nanotechnologique durable pour les surfaces d\'exception. Nous révélons la beauté originelle de vos matériaux et la protégeons pour 3 à 5 ans grâce à des revêtements invisibles de dernière génération.',
      cta: 'Demander un Diagnostic Gratuit',
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
  },
  ar: {
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
      cta: 'اطلب تشخيصًا مجانيًا',
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
      submitting: 'جارٍ الإرسال...',
      successMessage: 'تم إرسال الرسالة بنجاح! سنرد عليك قريبًا.',
      errorNameRequired: 'الاسم مطلوب (حد أدنى حرفين)',
      errorEmailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      errorMessageRequired: 'الرسالة مطلوبة (حد أدنى 10 أحرف)',
      errorSubmit: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    footer: {
      tagline: 'تنظيف وحماية غير مرئية أو زخرفية لجميع الأسطح',
      rights: 'جميع الحقوق محفوظة',
    },
  },
  es: {
    nav: {
      philosophy: 'Acerca\nde',
      hospitality: '¿Por Qué\nElegirnos?',
      materials: 'Nuestro\nMétodo',
      projects: 'Materiales\ny Experiencias',
      realizations: 'Nuestras\nRealizaciones',
      contact: 'Contacto',
    },
    hero: {
      title: 'La Innovación al Servicio de la Excelencia',
      subtitle: 'Limpieza regeneradora y protección nanotecnológica duradera para superficies excepcionales. Revelamos la belleza original de tus materiales y la protegemos durante 3 a 5 años gracias a recubrimientos invisibles de última generación.',
      cta: 'Solicita un Diagnóstico Gratuito',
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
      filterCarreauxBeldi: 'Baldosas Beldi',
      filterZellige: 'Zellige',
      filterMetal: 'Metal',
      filterMineralization: 'Mineralización',
    },
    why: {
      title: '¿Por Qué Elegirnos?',
      subtitle: 'Cada superficie cuenta una historia. Cada material lleva el alma del artesano que lo creó. Preservar esta belleza es honrar un legado y garantir que tus espacios continúen inspirando asombro para las generaciones venideras.',
      reason1Title: 'Experiencia Científica y Soluciones Personalizadas',
      reason1Description: 'Nuestro diagnóstico preciso y protocolos científicos ecológicos, aplicados por equipos altamente calificados, garantizan una solución perfectamente adaptada a cada material y a tus necesidades específicas.',
      reason2Title: 'Tecnología Sostenible y Regeneradora',
      reason2Description: 'Combinamos una limpieza regeneradora que devuelve el brillo original a las superficies con una protección nanotecnológica invisible y duradera (3-5 años), para una belleza preservada a largo plazo.',
      reason3Title: 'Agilidad Operacional y Discreción Total',
      reason3Description: 'Nuestro proceso está diseñado para ser ultra eficiente, ágil y completamente discreto. Se integra sin perturbar tu operación, con respeto estricto a tus horarios y tu imagen de marca.',
      reason4Title: 'Asociación Rentable y de Confianza',
      reason4Description: 'Gracias a un diálogo continuo y confiabilidad en la ejecución, reducimos drásticamente tus costos de mantenimiento a largo plazo, transformando el mantenimiento en una inversión estratégica y segura.',
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
      submitting: 'Enviando...',
      successMessage: '¡Mensaje enviado con éxito! Te responderemos pronto.',
      errorNameRequired: 'El nombre es obligatorio (mínimo 2 caracteres)',
      errorEmailInvalid: 'Por favor, introduce un correo electrónico válido',
      errorMessageRequired: 'El mensaje es obligatorio (mínimo 10 caracteres)',
      errorSubmit: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    },
    footer: {
      tagline: 'Limpieza y Protección Invisible o Decorativa Todas las Superficies',
      rights: 'Todos los derechos reservados',
    },
  },
  en: {
    nav: {
      philosophy: 'About',
      hospitality: 'Why Choose\nUs?',
      materials: 'Our\nMethod',
      projects: 'Materials\n& Expertise',
      realizations: 'Our\nProjects',
      contact: 'Contact',
    },
    hero: {
      title: 'Innovation in Service of Excellence',
      subtitle: 'Regenerative cleaning and sustainable nanotechnology protection for exceptional surfaces. We reveal the original beauty of your materials and protect it for 3 to 5 years with next-generation invisible coatings.',
      cta: 'Request a Free Diagnosis',
    },
    home: {
      benefit1Title: 'Time Freed',
      benefit1Text: 'Your teams focus on hospitality, we care for your surfaces',
      benefit2Title: 'Lasting Protection',
      benefit2Text: 'Invisible nanotechnology coating that resists water, oil, and stains',
      benefit3Title: 'Fast ROI',
      benefit3Text: 'Proven return on investment through maintenance savings',
    },
    showroom: {
      title: 'Showroom: Excellence in Images',
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
      subtitle: 'Every surface tells a story. Every material carries the soul of the artisan who created it. Preserving this beauty means honoring a legacy and ensuring your spaces continue to inspire wonder for generations to come.',
      reason1Title: 'Scientific Expertise & Customized Solutions',
      reason1Description: 'Our precise diagnosis and ecological scientific protocols, applied by highly qualified teams, guarantee a solution perfectly adapted to each material and your specific needs.',
      reason2Title: 'Sustainable & Regenerative Technology',
      reason2Description: 'We combine regenerative cleaning that restores the original shine to surfaces with invisible and durable nanotechnology protection (3-5 years), for beauty preserved long-term.',
      reason3Title: 'Operational Agility & Total Discretion',
      reason3Description: 'Our process is designed to be ultra-efficient, agile, and completely discreet. It integrates without disrupting your operations, with strict respect for your schedules and brand image.',
      reason4Title: 'Profitable & Trustworthy Partnership',
      reason4Description: 'Through continuous dialogue and reliable execution, we drastically reduce your long-term maintenance costs, transforming maintenance into a strategic and secure investment.',
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
      submitting: 'Sending...',
      successMessage: 'Message sent successfully! We will respond soon.',
      errorNameRequired: 'Name is required (minimum 2 characters)',
      errorEmailInvalid: 'Please enter a valid email address',
      errorMessageRequired: 'Message is required (minimum 10 characters)',
      errorSubmit: 'Failed to send message. Please try again.',
    },
    footer: {
      tagline: 'Cleaning & Invisible or Decorative Protection All Surfaces',
      rights: 'All rights reserved',
    },
  },
};
