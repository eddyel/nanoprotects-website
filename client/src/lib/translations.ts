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
    realizationsButton: string;
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
    labelBefore: string;
    labelAfter: string;
    clickToEnlarge: string;
    playAgain: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    desc5: string;
    desc6: string;
    desc7: string;
    desc8: string;
    desc9: string;
    desc10: string;
    desc11: string;
    desc12: string;
    desc13: string;
    desc14: string;
    desc15: string;
    desc16: string;
    desc17: string;
    desc18: string;
    desc19: string;
    desc20: string;
    desc21: string;
    desc22: string;
  };
  why: {
    title: string;
    subtitle: string;
    comparisonProblemTitle: string;
    comparisonProblemLabel: string;
    comparisonProblemText: string;
    comparisonImpactLabel: string;
    comparisonImpactText: string;
    comparisonSolutionTitle: string;
    comparisonSolutionLabel: string;
    comparisonSolutionText: string;
    comparisonBenefitLabel: string;
    comparisonBenefitText: string;
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
    material1: string;
    material2: string;
    material3: string;
    material4: string;
    material5: string;
    material6: string;
    material7: string;
    material8: string;
    material9: string;
    material10: string;
    material11: string;
    material12: string;
    material13: string;
    zone1: string;
    zone2: string;
    zone3: string;
    zone4: string;
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
    describeProject: string;
    selectCity: string;
    sendRequest: string;
    materialNature: string;
    applicationZone: string;
    city: string;
    message: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    selectCityPlaceholder: string;
    specifyCity: string;
    cityPlaceholder: string;
    phone: string;
    protectionType: string;
    protectionWater: string;
    protectionOil: string;
    protectionMineralization: string;
    protectionAntiSlip: string;
    diagnosticButton: string;
    multipleSelection: string;
  };
  confirmation: {
    titlePrefix: string;
    messagePrefix: string;
    messageSuffix: string;
    responseTime: string;
    waitingTitle: string;
    showroomButton: string;
    furtherTitle: string;
    methodTitle: string;
    methodDescription: string;
    expertiseTitle: string;
    expertiseDescription: string;
    learnMore: string;
    reassuranceMessage: string;
    urgentPrefix: string;
    backHome: string;
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
    issuesLabel: string;
    actionsLabel: string;
    surfacesLabel: string;
    category1Title: string;
    category1Issues: string;
    category1Actions: string;
    category1Surfaces: string;
    category2Title: string;
    category2Issues: string;
    category2Actions: string;
    category2Surfaces: string;
    category3Title: string;
    category3Issues: string;
    category3Actions: string;
    category3Surfaces: string;
    category4Title: string;
    category4Issues: string;
    category4Actions: string;
    category4Surfaces: string;
    category5Title: string;
    category5Issues: string;
    category5Actions: string;
    category5Surfaces: string;
    category6Title: string;
    category6Subtitle: string;
    category6Issues: string;
    category6Actions: string;
    category6Surfaces: string;
    processStep1: string;
    processStep2: string;
    processStep3: string;
  };
  method: {
    title: string;
    subtitle: string;
    highTechTitle: string;
    highTechDescription: string;
    protectionTitle: string;
    protectionDescription: string;
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
    trustTitle: string;
    metric1Label: string;
    metric1Description: string;
    metric2Label: string;
    metric2Description: string;
    metric3Label: string;
    metric3Subtitle: string;
    metric3Description: string;
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
      realizationsButton: 'Nos Réalisations',
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
      labelBefore: 'AVANT',
      labelAfter: 'APRES',
      clickToEnlarge: 'Cliquer pour agrandir',
      playAgain: 'Rejouer',
      desc1: 'Restauration couleur & traitement hydrofuge',
      desc2: 'Nettoyage & traitement protecteur',
      desc3: 'Nettoyage en profondeur & traitement hydrofuge',
      desc4: 'Nettoyage & traitement Hydrofuge et Oléofuge invisible',
      desc5: 'Nettoyage profond, Crystallisation & traitement anti-taches',
      desc6: 'Nettoyage profond & Protection sublimée',
      desc7: 'Nettoyage profond & Protection sublimée',
      desc8: 'Détartrage, Nettoyage profond & Protection sublimée',
      desc9: 'Détartrage, nettoyage profond & Protection sublimée',
      desc10: 'Nettoyage profond & Protection sublimée',
      desc11: 'Nettoyage profond & Protection Invisible',
      desc12: 'Nettoyage profond & Protection Sublimé',
      desc13: 'Protection Invisible',
      desc14: 'Nettoyage profond & Protection Sublimé',
      desc15: 'Nettoyage profond, Crystallisation & Protection Sublimé',
      desc16: 'Nettoyage profond & Protection Sublimé',
      desc17: 'Nettoyage profond & Protection Sublimé',
      desc18: 'Nettoyage profond & Protection Sublimé',
      desc19: 'Nettoyage profond & Protection Sublimé',
      desc20: 'Minéralisation Anti-Effritement & Protection Hydrofuge Invisible',
      desc21: 'Minéralisation Anti-Effritement & Protection Hydrofuge Invisible',
      desc22: 'Minéralisation Anti-Effritement & Protection Hydrofuge Invisible',
    },
    why: {
      title: 'Pourquoi Nous Choisir ?',
      subtitle: 'Chaque surface raconte une histoire. Chaque matériau porte l\'âme de l\'artisan qui l\'a créé. Préserver cette beauté, c\'est honorer un héritage et garantir que vos espaces continuent d\'inspirer l\'émerveillement pour les générations à venir.',
      comparisonProblemTitle: 'Protection Filmogène Courante',
      comparisonProblemLabel: 'Problème :',
      comparisonProblemText: 'Film de surface qui peut s\'écailler, jaunir.',
      comparisonImpactLabel: 'Impact :',
      comparisonImpactText: 'Altère l\'apparence, durée de vie limitée, entretien compliqué.',
      comparisonSolutionTitle: 'Imprégnation NanoProtects',
      comparisonSolutionLabel: 'Solution :',
      comparisonSolutionText: 'Barrière nanotechnologique intégrée dans la matière.',
      comparisonBenefitLabel: 'Bénéfice :',
      comparisonBenefitText: 'Beauté originelle préservée, durabilité longue, entretien facilité.',
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
      material1: 'Bejmat',
      material2: 'Pierre de Taza',
      material3: 'Pierres Naturelles',
      material4: 'Marbre',
      material5: 'Zellige',
      material6: 'Bois Composite',
      material7: 'Métal',
      material8: 'Sécurité Sols',
      material9: 'Textile',
      material10: 'Sanitaire',
      material11: 'Vitres',
      material12: 'Céramique',
      material13: 'Carreaux Ciment Beldi',
      zone1: 'Sols',
      zone2: 'Escaliers',
      zone3: 'Murs',
      zone4: 'Mobilier',
      title: 'Demande de Diagnostic Personnalisé',
      subtitle: 'Pour un patrimoine qui défie le temps, la première étape est un diagnostic sur mesure. Partagez-nous les détails de votre projet pour une analyse préliminaire gratuite et sans engagement.',
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
      describeProject: 'Décrivez votre projet...',
      selectCity: 'Sélectionnez une ville',
      sendRequest: 'Envoyer votre Demande',
      materialNature: 'Nature des Matériaux (sélection multiple)',
      applicationZone: 'Zone d\'Application (sélection multiple)',
      city: 'Ville',
      message: 'Message',
          nameLabel: 'Nom *',
      emailLabel: 'Email *',
      phoneLabel: 'Téléphone *',
      selectCityPlaceholder: 'Sélectionnez une ville',
      specifyCity: 'Précisez la ville',
      cityPlaceholder: 'Nom de la ville',
      phone: 'Téléphone',
    protectionType: 'Type de protection',
    protectionWater: 'Hydrofuge (eau)',
    protectionOil: 'Oléofuge (huile)',
    protectionMineralization: 'Minéralisation (anti-effritement)',
    protectionAntiSlip: 'Anti-Dérapant',
    diagnosticButton: 'Demander mon diagnostic',
    multipleSelection: 'sélection multiple',
    },
    confirmation: {
      titlePrefix: 'Merci pour votre confiance',
      messagePrefix: 'Nous avons bien reçu votre demande de diagnostic personnalisé concernant',
      messageSuffix: 'Un expert NanoProtects analysera votre projet et vous contactera par téléphone sous 24 heures ouvrées.',
      responseTime: 'Nous vous remercions de votre confiance.',
      waitingTitle: 'En attendant notre appel, plongez au cœur de notre savoir-faire :',
      showroomButton: '🎬 Découvrir notre Showroom',
      furtherTitle: 'Pour aller plus loin',
      methodTitle: 'Notre Méthode en 3 étapes',
      methodDescription: 'Découvrez notre approche innovante pour préserver la beauté de vos matériaux.',
      expertiseTitle: 'Expertise : Protéger le Zellige',
      expertiseDescription: 'Explorez nos solutions spécialisées pour chaque type de surface.',
      learnMore: 'En savoir plus',
      reassuranceMessage: 'Votre diagnostic préliminaire est gratuit et sans engagement. Notre mission : préserver durablement la beauté et la valeur de votre patrimoine.',
      urgentPrefix: 'Pour toute question urgente, vous pouvez nous joindre au',
      backHome: 'Retour à l\'accueil',
    },
    footer: {
      tagline: 'Nettoyage & Protection Invisible ou Décorative Toutes Surfaces',
      rights: 'Tous droits réservés',
    },
    about: {
      title: 'Nanotechnologies au service de l\'excellence',
      section1Title: 'Notre Approche Méthodique : Révéler et Préserver la Beauté Originelle',
      section1Text: 'Chaque surface raconte une histoire. Chaque matériau porte l\'âme de l\'artisan qui l\'a créé. Préserver cette beauté, c\'est honorer un héritage et garantir que vos espaces continuent d\'inspirer l\'émerveillement pour les générations à venir. Depuis 2019, chez NanoProtects, nous sommes bien plus qu\'un prestataire de nettoyage. Nous sommes les gardiens de votre patrimoine. Animés par une quête de perfection si aboutie qu\'elle en devient invisible, nous œuvrons pour que la beauté des lieux et la qualité de l accueil défient le temps.',
      section2Title: 'Notre Méthode',
      section2Text: 'Nous développons et déployons des processus d\'intervention à la fois ultra-efficients et parfaitement discrets, conçus pour s\'insérer sans perturbation dans l\'exploitation de nos clients. Notre engagement repose sur un dialogue systématique, une exécution agile et fiable, et une discrétion protectrice, pour préserver et sublimer durablement les matériaux.',
      section3Title: 'Notre Expertise',
      section3Text: 'Nous combinons la culture du soin méticuleux et l\'intention authentique à une recherche permanente de solutions nanotechnologiques de pointe. Notre expertise repose sur deux piliers complémentaires qui forment un écosystème de protection durable pour vos surfaces d\'exception.',
    },
    materials: {
      title: 'Matériaux et Expertises',
      subtitle: 'Avec des solutions adaptées à chaque surface, nous intervenons sur une large gamme de matériaux :',
      issuesLabel: 'Enjeux',
      actionsLabel: 'Nos actions',
      surfacesLabel: 'Surfaces concernées',
      category1Title: 'Pierres & Marbre',
      category1Issues: 'Salissures organiques, efflorescences, taches, dégradations causées par la pollution et les UV.',
      category1Actions: 'Nettoyage régénérant respectueux des matériaux & application à saturation de solutions nanotechnologiques de protection imprégnantes hydrofuge et oléofuge.',
      category1Surfaces: 'Pierre de Taza, Marbre, Travertin, Pierres calcaire, Ardoise, Granit',
      category2Title: 'Matériaux Traditionnels',
      category2Issues: 'Porosité élevée, absorption eau, tâches de ciment, jaunissement et/ou écaillage d\'anciens vernis, encrassement, salissures grasses, perte de couleurs dû aux UV',
      category2Actions: 'Décapage humide sans poussière, restauration des couleurs, imperméabilisation anti-tâches respirante non filmogène, protection anti-UV',
      category2Surfaces: 'Bejmat, Carreaux de ciment Beldi, Zellige, Dess',
      category3Title: 'Bois Composite',
      category3Issues: 'Grisaillement, tâches organiques, décoloration UV, encrassement, écaillage film plastique ou vernis',
      category3Actions: 'Nettoyage doux, restauration de la couleur origine, protection nanotechnologique imprégnante anti-UV et anti-tâches',
      category3Surfaces: 'Terrasses, Plage de piscine, Mobilier , Bardages',
      category4Title: 'Textiles',
      category4Issues: 'Tâches organiques, odeurs, décoloration',
      category4Actions: 'Nettoyage en profondeur par Injection / Extraction sous pression, traitement anti-tâches et anti-salissures, protection textile respirante',
      category4Surfaces: 'Tapis, Moquettes, Rideaux, Tentures murales, Coussins',
      category5Title: 'Traitement Anti-Dérapant',
      category5Issues: 'Glissance excessive sur sols mouillés (piscines, douches, cuisines), risque de chute.',
      category5Actions: 'Application d\'un traitement non corrosif durable dérivé du Silicium en phase aqueuse anti-dérapant NON ACIDE, qui augmente le coefficient de friction sans altérer l\'esthétique',
      category5Surfaces: 'Marbre crystallisé, Carrelage vittrifié, Céramiques',
      category6Title: 'Traitement Minéralisant',
      category6Subtitle: 'Matériaux poreux friables',
      category6Issues: 'Érosion, effritement, poussière',
      category6Actions: 'Traitement pénétrant de minéralisation (durcissement et consolidation interne) avec protection hydrofuge non-filmogène, effet anti-poussière durable',
      category6Surfaces: 'Briquettes en terre cuite, Stucs en plâtre, Pisé, Enduits, Mortiers, Bétons, Façades et Sols anciens',
      processStep1: 'Préparation Intégrale',
      processStep2: 'Application Nano-Technologique',
      processStep3: 'Protection Durable',
    },
    method: {
      title: 'Notre Approche Méthodique : Révéler et Préserver la Beauté Originelle',
      highTechTitle: 'Nettoyage Haute Technologie',
      highTechDescription: 'Diagnostic précis, nettoyage en profondeur de la surface, restauration de l\'éclat d\'origine et élimination des salissures tenaces grâce à des protocoles scientifiques et des agents écologiques.',
      protectionTitle: 'Traitement de Protection',
      protectionDescription: 'Application de revêtements nanotechnologiques invisibles (Nano-SiO₂) qui forment une barrière imperméable au niveau moléculaire, protégeant contre l\'eau, l\'huile et les taches pour 3 à 5 ans.',
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
      trustTitle: 'Ils nous font confiance',
      metric1Label: 'Temps Libéré',
      metric1Description: 'Optimisation des processus de nettoyage pour votre personnel',
      metric2Label: 'mois',
      metric2Description: 'Retour d\'investissement prouvé grâce aux économies de coûts',
      metric3Label: 'Partenariat',
      metric3Subtitle: 'Durable',
      metric3Description: 'Accompagnement continu et dialogue systématique',
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
      realizationsButton: 'إنجازاتنا',
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
      labelBefore: 'قبل',
      labelAfter: 'بعد',
      clickToEnlarge: 'انقر للتكبير',
      playAgain: 'إعادة التشغيل',
      desc1: 'استعادة اللون والمعالجة المقاومة للماء',
      desc2: 'التنظيف والمعالجة الواقية',
      desc3: 'التنظيف العميق والمعالجة المقاومة للماء',
      desc4: 'التنظيف والمعالجة المقاومة للماء والزيت غير المرئية',
      desc5: 'التنظيف العميق والتبلور والمعالجة المضادة للبقع',
      desc6: 'التنظيف العميق والحماية السامية',
      desc7: 'التنظيف العميق والحماية السامية',
      desc8: 'إزالة الترسبات والتنظيف العميق والحماية السامية',
      desc9: 'إزالة الترسبات والتنظيف العميق والحماية السامية',
      desc10: 'التنظيف العميق والحماية السامية',
      desc11: 'التنظيف العميق والحماية غير المرئية',
      desc12: 'التنظيف العميق والحماية السامية',
      desc13: 'الحماية غير المرئية',
      desc14: 'التنظيف العميق والحماية السامية',
      desc15: 'التنظيف العميق والتبلور والحماية السامية',
      desc16: 'التنظيف العميق والحماية السامية',
      desc17: 'التنظيف العميق والحماية السامية',
      desc18: 'التنظيف العميق والحماية السامية',
      desc19: 'التنظيف العميق والحماية السامية',
      desc20: 'معالجة التمعدن المضادة للتفتت والحماية المقاومة للماء غير المرئية',
      desc21: 'معالجة التمعدن المضادة للتفتت والحماية المقاومة للماء غير المرئية',
      desc22: 'معالجة التمعدن المضادة للتفتت والحماية المقاومة للماء غير المرئية',
    },
    why: {
      title: 'لماذا تختارنا؟',
      subtitle: 'كل سطح يحكي قصة. كل مادة تحمل روح الحرفي الذي صنعها. الحفاظ على هذا الجمال يعني تكريم إرث وضمان استمرار مساحاتك في إلهام الإعجاب للأجيال القادمة.',
      comparisonProblemTitle: 'الحماية الفيلمية العادية',
      comparisonProblemLabel: 'المشكلة:',
      comparisonProblemText: 'طبقة سطحية قد تتقشر وتتحول إلى اللون الأصفر.',
      comparisonImpactLabel: 'التأثير:',
      comparisonImpactText: 'تغيير المظهر، عمر افتراضي محدود، صيانة معقدة.',
      comparisonSolutionTitle: 'نانو حماية',
      comparisonSolutionLabel: 'الحل:',
      comparisonSolutionText: 'حاجز نانوتكنولوجي متكامل في المادة.',
      comparisonBenefitLabel: 'الفائدة:',
      comparisonBenefitText: 'الحفاظ على الجمال الأصلي، متانة طويلة، صيانة سهلة.',
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
      material1: 'بجمات',
      material2: 'حجر التازة',
      material3: 'الحجارة الطبيعية',
      material4: 'الرخام',
      material5: 'زليج',
      material6: 'الخشب المركب',
      material7: 'معدن',
      material8: 'أمان الأرضيات',
      material9: 'النسيج',
      material10: 'الصحي',
      material11: 'الزجاج',
      material12: 'السيراميك',
      material13: 'بلاط الإسمنت البلدي',
      zone1: 'الأرضيات',
      zone2: 'السلالم',
      zone3: 'الجدران',
      zone4: 'الأثاث',
      title: 'طلب تشخيص مخصص',
      subtitle: 'لحماية تراثك الذي يتحدى الزمن، الخطوة الأولى هي تشخيص مخصص. شارك معنا تفاصيل مشروعك للحصول على تحليل أولي مجاني وبدون التزام.',
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
      describeProject: 'صف مشروعك...',
      selectCity: 'اختر مدينة',
      sendRequest: 'أرسل طلبك',
      materialNature: 'طبيعة المواد (اختيار متعدد)',
      applicationZone: 'منطقة التطبيق (اختيار متعدد)',
      city: 'المدينة',
      message: 'الرسالة',
          nameLabel: 'الاسم *',
      emailLabel: 'البريد الإلكتروني *',
      phoneLabel: 'الهاتف *',
      selectCityPlaceholder: 'اختر مدينة',
      specifyCity: 'حدد المدينة',
      cityPlaceholder: 'اسم المدينة',
      phone: 'الهاتف',
      protectionType: 'نوع الحماية',
      protectionWater: 'مقاوم للماء',
      protectionOil: 'مقاوم للزيت',
      protectionMineralization: 'تمعدن (مقاوم للتفتت)',
      protectionAntiSlip: 'مقاوم للانزلاق',
      diagnosticButton: 'طلب التشخيص الخاص بي',
    multipleSelection: 'اختيار متعدد',
    },
    confirmation: {
      titlePrefix: 'شكراً لثقتك',
      messagePrefix: 'لقد تلقينا طلب التشخيص الشخصي الخاص بك بخصوص',
      messageSuffix: 'سيقوم خبير NanoProtects بتحليل مشروعك والاتصال بك عبر الهاتف في غضون 24 ساعة عمل.',
      responseTime: 'نشكرك على ثقتك بنا.',
      waitingTitle: 'أثناء انتظار اتصالنا، اكتشف خبرتنا:',
      showroomButton: '🎬 اكتشف معرضنا',
      furtherTitle: 'لمزيد من المعلومات',
      methodTitle: 'طريقتنا في 3 خطوات',
      methodDescription: 'اكتشف نهجنا المبتكر للحفاظ على جمال مواد البناء الخاصة بك.',
      expertiseTitle: 'الخبرة: حماية الزليج',
      expertiseDescription: 'استكشف حلولنا المتخصصة لكل نوع سطح.',
      learnMore: 'اعرف أكثر',
      reassuranceMessage: 'التشخيص الأولي الخاص بك مجاني وبدون التزام. مهمتنا: الحفاظ على جمال وقيمة تراثك بشكل دائم.',
      urgentPrefix: 'لأي سؤال عاجل، يمكنك الاتصال بنا على',
      backHome: 'العودة إلى الصفحة الرئيسية',
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
      issuesLabel: 'التحديات',
      actionsLabel: 'إجراءاتنا',
      surfacesLabel: 'الأسطح المعنية',
    category1Title: 'الحجر والرخام',
      category1Issues: 'الأوساخ العضوية، الترسبات، البقع، التدهور الناجم عن التلوث والأشعة فوق البنفسجية.',
      category1Actions: 'التنظيف المجدد الاحترام للمواد وتطبيق مشبع لحلول الحماية النانوتكنولوجية الماصة والمماصة.',
      category1Surfaces: 'حجر تازة، رخام، ترافرتين، أحجار كالكاري، الرخام الأردوازي، الجرانيت',
      category2Title: 'المواد التقليدية',
      category2Issues: 'مسامية عالية، امتصاص الماء، بقع الأسمنت، الاصفرار و/أو تقشر الورنيش القديم، الانسداد، الأوساخ الدهنية، فقدان الألوان بسبب الأشعة فوق البنفسجية',
      category2Actions: 'الكشط الرطب بدون غبار، استعادة الألوان، العزل مضاد للبقع المسام غير الرقيقة، الحماية مضادة للأشعة فوق البنفسجية',
      category2Surfaces: 'بيجمات، بلاط الأسمنت بلدي، زليج، ديس',
      category3Title: 'الأخشاب المركبة',
      category3Issues: 'الترابالذهبي، البقع العضوية، البهتان بالأشعة فوق البنفسجية، الانسداد، تقشر فيلم بلاستيكي أو ورنيش',
      category3Actions: 'التنظيف اللطيف، استعادة اللون الأصلي، الحماية النانوتكنولوجية الماصة مضادة للأشعة فوق البنفسجية ومضادة للبقع',
      category3Surfaces: 'الشرفات، شاطئ المسبح، الأثاث، الأرضيات',
      category4Title: 'النسيج',
      category4Issues: 'البقع العضوية، الروائح، البهتان',
      category4Actions: 'التنظيف العميق بالحقن / الاستخراج تحت الضغط، معالجة مضادة للبقع ومضادة للاتساخ، الحماية النسيجية المسامية',
      category4Surfaces: 'السجاد، السجاد الموبيلية، السترائر، المعلقات الجدرانية، الوسائد',
      category5Title: 'معالجة مضادة للانزلاق',
      category5Issues: 'انزلاق مفرط على الأرضيات الرطبة (مسابح، دوشات، مطابخ)، خطر السقوط.',
      category5Actions: 'تطبيق معالجة غير ماصة دائمة مشتقة من السيليكون في مرحلة مائية مضادة للانزلاق غير حمضية، التي تزيد معامل الاحتكاك دون تغيير المظهر',
      category5Surfaces: 'الرخام المبلور، البلاط الزجاجي، السيراميك',
      category6Title: 'معالجة تمعدن',
      category6Subtitle: 'مواد مسامية هشة',
      category6Issues: 'التآكل، التفتت، الغبار',
      category6Actions: 'معالجة التمعدن المخترقة (التصلب والتوحيد الداخلي) مع الحماية المائية غير الرقيقة، التأثير مضاد للغبار الدائم',
      category6Surfaces: 'الطوب الطيني، الروق الجبسية، الطوب الطيني، الطلاءات، الملاط، الخرسانة، الواجهات والأرضيات القديمة',
      processStep1: 'التحضير الشامل',
      processStep2: 'التطبيق النانوتكنولوجي',
      processStep3: 'الحماية الدائمة',
    },
    method: {
      title: 'نهجنا المنهجي: الكشف والحفاظ على الجمال الأصلي',
      subtitle: 'نهج شامل للكشف والحفاظ على جمال أسطحك',
      highTechTitle: 'التنظيف عالي التقنية',
      highTechDescription: 'تشخيص دقيق وتنظيف عميق للسطح واستعادة البريق الأصلي والقضاء على الأوساخ العنيدة بفضل البروتوكولات العلمية والعوامل البيئية.',
      protectionTitle: 'معالجة الحماية',
      protectionDescription: 'تطبيق طلاءات النانوتكنولوجيا غير المرئية (Nano-SiO₂) التي تشكل حاجزاً مقاوماً للماء على المستوى الجزيئي، محمية ضد الماء والزيت والبقع لمدة 3 إلى 5 سنوات.',
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
      trustTitle: 'يثقون بنا',
      metric1Label: 'وقت محرر',
      metric1Description: 'تحسين عمليات التنظيف للموظفين لديك',
      metric2Label: 'شهر',
      metric2Description: 'عودة استثمار مثبوتة بفضل توفير التكاليف',
      metric3Label: 'شراكة',
      metric3Subtitle: 'دائمة',
      metric3Description: 'المرافقة المستمرة والحوار المنهجي',
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
      realizationsButton: 'Nuestras Realizaciones',
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
      labelBefore: 'ANTES',
      labelAfter: 'DESPUÉS',
      clickToEnlarge: 'Haz clic para ampliar',
      playAgain: 'Reproducir de nuevo',
      desc1: 'Restauración de color y tratamiento impermeable',
      desc2: 'Limpieza y tratamiento protector',
      desc3: 'Limpieza profunda y tratamiento impermeable',
      desc4: 'Limpieza y tratamiento hidrófugo y oleófugo invisible',
      desc5: 'Limpieza profunda, cristalización y tratamiento anti-manchas',
      desc6: 'Limpieza profunda y protección sublime',
      desc7: 'Limpieza profunda y protección sublime',
      desc8: 'Desincrustación, limpieza profunda y protección sublime',
      desc9: 'Desincrustación, limpieza profunda y protección sublime',
      desc10: 'Limpieza profunda y protección sublime',
      desc11: 'Limpieza profunda y protección invisible',
      desc12: 'Limpieza profunda y protección sublime',
      desc13: 'Protección invisible',
      desc14: 'Limpieza profunda y protección sublime',
      desc15: 'Limpieza profunda, cristalización y protección sublime',
      desc16: 'Limpieza profunda y protección sublime',
      desc17: 'Limpieza profunda y protección sublime',
      desc18: 'Limpieza profunda y protección sublime',
      desc19: 'Limpieza profunda y protección sublime',
      desc20: 'Mineralización anti-desmenuzamiento y protección impermeable invisible',
      desc21: 'Mineralización anti-desmenuzamiento y protección impermeable invisible',
      desc22: 'Mineralización anti-desmenuzamiento y protección impermeable invisible',
    },
    why: {
      title: '¿Por Qué Elegirnos?',
      subtitle: 'Cada superficie cuenta una historia. Cada material lleva el alma del artesano que lo creó. Preservar esta belleza es honrar un legado y garantizar que tus espacios continúen inspirando asombro para las generaciones venideras.',
      comparisonProblemTitle: 'Protección Filmógena Común',
      comparisonProblemLabel: 'Problema:',
      comparisonProblemText: 'Película de superficie que puede descascararse y amarillear.',
      comparisonImpactLabel: 'Impacto:',
      comparisonImpactText: 'Altera la apariencia, vida útil limitada, mantenimiento complicado.',
      comparisonSolutionTitle: 'Impregnación NanoProtects',
      comparisonSolutionLabel: 'Solución:',
      comparisonSolutionText: 'Barrera de nanotecnología integrada en el material.',
      comparisonBenefitLabel: 'Beneficio:',
      comparisonBenefitText: 'Belleza original preservada, durabilidad prolongada, mantenimiento facilitado.',
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
      material1: 'Bejmat',
      material2: 'Piedra de Taza',
      material3: 'Piedras Naturales',
      material4: 'Mármol',
      material5: 'Zellige',
      material6: 'Madera Compuesta',
      material7: 'Metal',
      material8: 'Seguridad de Pisos',
      material9: 'Textil',
      material10: 'Sanitario',
      material11: 'Vidrio',
      material12: 'Cerámica',
      material13: 'Baldosas de Cemento Beldi',
      zone1: 'Pisos',
      zone2: 'Escaleras',
      zone3: 'Paredes',
      zone4: 'Muebles',
      title: 'Solicitud de Diagnóstico Personalizado',
      subtitle: 'Para un patrimonio que desafía el tiempo, el primer paso es un diagnóstico personalizado. Comparta los detalles de su proyecto para un análisis preliminar gratuito y sin compromiso.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto',
      submit: 'Enviar',
      submitting: 'Enviando...',
      successMessage: '!Mensaje enviado con éxito! Te responderemos pronto.',
      errorNameRequired: 'El nombre es requerido (mínimo 2 caracteres)',
      errorEmailInvalid: 'Por favor ingresa un correo electrónico válido',
      errorMessageRequired: 'El mensaje es requerido (mínimo 10 caracteres)',
      errorSubmit: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      describeProject: 'Describe tu proyecto...',
      selectCity: 'Selecciona una ciudad',
      sendRequest: 'Enviar tu Solicitud',
      materialNature: 'Naturaleza de los Materiales (selección múltiple)',
      applicationZone: 'Zona de Aplicación (selección múltiple)',
      city: 'Ciudad',
      message: 'Mensaje',
          nameLabel: 'Nombre *',
      emailLabel: 'Correo electrónico *',
      phoneLabel: 'Teléfono *',
      selectCityPlaceholder: 'Selecciona una ciudad',
      specifyCity: 'Especifica la ciudad',
      cityPlaceholder: 'Nombre de la ciudad',
      phone: 'Teléfono',
    protectionType: 'Tipo de protección',
    protectionWater: 'Hidrófugo (agua)',
    protectionOil: 'Oleófobo (aceite)',
    protectionMineralization: 'Mineralización (anti-desmoronamiento)',
    protectionAntiSlip: 'Antideslizante',
    diagnosticButton: 'Solicitar mi diagnóstico',
    multipleSelection: 'selección múltiple',
    },
    confirmation: {
      titlePrefix: 'Gracias por tu confianza',
      messagePrefix: 'Hemos recibido tu solicitud de diagnóstico personalizado sobre',
      messageSuffix: 'Un experto de NanoProtects analizará tu proyecto y te contactará por teléfono dentro de 24 horas hábiles.',
      responseTime: 'Te agradecemos tu confianza en nosotros.',
      waitingTitle: 'Mientras esperas nuestro contacto, descubre nuestro saber hacer:',
      showroomButton: '🎬 Descubre nuestro Showroom',
      furtherTitle: 'Para saber más',
      methodTitle: 'Nuestro Método en 3 pasos',
      methodDescription: 'Descubre nuestro enfoque innovador para preservar la belleza de tus materiales.',
      expertiseTitle: 'Experiencia: Proteger el Zellige',
      expertiseDescription: 'Explora nuestras soluciones especializadas para cada tipo de superficie.',
      learnMore: 'Saber más',
      reassuranceMessage: 'Tu diagnóstico preliminar es gratuito y sin compromiso. Nuestra misión: preservar duraderas la belleza y el valor de tu patrimonio.',
      urgentPrefix: 'Para cualquier pregunta urgente, puedes contactarnos en',
      backHome: 'Volver a inicio',
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
      issuesLabel: 'Desafíos',
      actionsLabel: 'Nuestras acciones',
      surfacesLabel: 'Superficies afectadas',
    category1Title: 'Piedras & Mármol',
      category1Issues: 'Suciedad orgánica, eflorescencias, manchas, degradaciones causadas por la contaminación y los rayos UV.',
      category1Actions: 'Limpieza regeneradora respetuosa con los materiales y aplicación saturada de soluciones de protección nanotecnológica impermeables y oleófobas.',
      category1Surfaces: 'Piedra de Taza, Mármol, Travertino, Piedras calcáreas, Pizarra, Granito',
      category2Title: 'Materiales Tradicionales',
      category2Issues: 'Porosidad elevada, absorción de agua, manchas de cemento, amarillamiento y/o descamación de barnices antiguos, ensuciamiento, suciedad grasa, pérdida de colores debido a los rayos UV',
      category2Actions: 'Decapado húmedo sin polvo, restauración de colores, impermeabilización anti-manchas transpirable no filmógena, protección anti-UV',
      category2Surfaces: 'Bejmat, Baldosas de cemento Beldi, Zellige, Dess',
      category3Title: 'Madera Compuesta',
      category3Issues: 'Grisáceo, manchas orgánicas, decoloración UV, ensuciamiento, descamación de película plástica o barniz',
      category3Actions: 'Limpieza suave, restauración del color original, protección nanotecnológica impregnante anti-UV y anti-manchas',
      category3Surfaces: 'Terrazas, Playa de piscina, Mobiliario, Revestimientos',
      category4Title: 'Textiles',
      category4Issues: 'Manchas orgánicas, olores, decoloración',
      category4Actions: 'Limpieza profunda por inyección/extracción a presión, tratamiento anti-manchas y anti-suciedad, protección textil transpirable',
      category4Surfaces: 'Alfombras, Moquetas, Cortinas, Colgaduras murales, Cojines',
      category5Title: 'Tratamiento Antideslizante',
      category5Issues: 'Deslizamiento excesivo en suelos mojados (piscinas, duchas, cocinas), riesgo de caída.',
      category5Actions: 'Aplicación de un tratamiento no corrosivo duradero derivado del silicio en fase acuosa antideslizante NO ÁCIDO, que aumenta el coeficiente de fricción sin alterar la estética',
      category5Surfaces: 'Mármol cristalizado, Baldosa vitrífica, Cerámica',
      category6Title: 'Tratamiento Mineralizante',
      category6Subtitle: 'Materiales porosos frágiles',
      category6Issues: 'Erosión, desmenuzamiento, polvo',
      category6Actions: 'Tratamiento mineralizante penetrante (endurecimiento y consolidación interna) con protección hidrófuga no filmógena, efecto anti-polvo duradero',
      category6Surfaces: 'Ladrillos de barro cocido, Estucos de yeso, Pisé, Revestimientos, Morteros, Hormigones, Fachadas y Suelos antiguos',
      processStep1: 'Preparación Integral',
      processStep2: 'Aplicación Nanotecnológica',
      processStep3: 'Protección Durable',
    },
    method: {
      title: 'Nuestro Enfoque Metodológico: Revelar y Preservar la Belleza Original',
      subtitle: 'Un enfoque completo para revelar y proteger la belleza de tus superficies',
      highTechTitle: 'Limpieza de Alta Tecnología',
      highTechDescription: 'Diagnóstico preciso, limpieza profunda de la superficie, restauración del brillo original y eliminación de manchas tenaces gracias a protocolos científicos y agentes ecológicos.',
      protectionTitle: 'Tratamiento de Protección',
      protectionDescription: 'Aplicación de recubrimientos nanotecnológicos invisibles (Nano-SiO₂) que forman una barrera impermeable a nivel molecular, protegiendo contra agua, aceite y manchas durante 3 a 5 años.',
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
      trustTitle: 'Confían en nosotros',
      metric1Label: 'Tiempo Liberado',
      metric1Description: 'Optimización de los procesos de limpieza para tu personal',
      metric2Label: 'meses',
      metric2Description: 'Retorno de inversión comprobado gracias al ahorro de costos',
      metric3Label: 'Asociación',
      metric3Subtitle: 'Sostenible',
      metric3Description: 'Acompañamiento continuo y diálogo sistemático',
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
      realizationsButton: 'Our Realizations',
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
      labelBefore: 'BEFORE',
      labelAfter: 'AFTER',
      clickToEnlarge: 'Click to enlarge',
      playAgain: 'Play again',
      desc1: 'Color restoration & waterproof treatment',
      desc2: 'Cleaning & protective treatment',
      desc3: 'Deep cleaning & waterproof treatment',
      desc4: 'Cleaning & invisible hydrophobic and oleophobic treatment',
      desc5: 'Deep cleaning, crystallization & anti-stain treatment',
      desc6: 'Deep cleaning & sublime protection',
      desc7: 'Deep cleaning & sublime protection',
      desc8: 'Descaling, deep cleaning & sublime protection',
      desc9: 'Descaling, deep cleaning & sublime protection',
      desc10: 'Deep cleaning & sublime protection',
      desc11: 'Deep cleaning & invisible protection',
      desc12: 'Deep cleaning & sublime protection',
      desc13: 'Invisible protection',
      desc14: 'Deep cleaning & sublime protection',
      desc15: 'Deep cleaning, crystallization & sublime protection',
      desc16: 'Deep cleaning & sublime protection',
      desc17: 'Deep cleaning & sublime protection',
      desc18: 'Deep cleaning & sublime protection',
      desc19: 'Deep cleaning & sublime protection',
      desc20: 'Anti-crumbling mineralization & invisible waterproof protection',
      desc21: 'Anti-crumbling mineralization & invisible waterproof protection',
      desc22: 'Anti-crumbling mineralization & invisible waterproof protection',
    },
    method: {
      title: 'Our Methodical Approach: Reveal and Preserve Original Beauty',
      subtitle: 'A complete approach to reveal and protect the beauty of your surfaces',
      highTechTitle: 'High-Tech Cleaning',
      highTechDescription: 'Precise diagnosis, deep surface cleaning, restoration of original shine and elimination of stubborn stains thanks to scientific protocols and ecological agents.',
      protectionTitle: 'Protection Treatment',
      protectionDescription: 'Application of invisible nanotechnology coatings (Nano-SiO₂) that form a molecular-level impermeable barrier, protecting against water, oil and stains for 3 to 5 years.',
      phase1Title: 'Diagnosis',
      phase1Description: 'Expert analysis of your surfaces\' condition to determine the exact nature of soiling, alterations and restoration potential.',
      phase1Point1: 'Complete mapping of degradations (stains, wear, micro-scratches)',
      phase1Point2: 'Identification of surface types and their sensitivity',
      phase1Point3: 'Establishment of personalized and justified intervention protocol',
      phase2Title: 'Reveal',
      phase2Description: 'Cleaning and regeneration based on diagnosis, to restore the original shine and integrity of the surface.',
      phase2Point1: 'Stripping and professional cleaning targeted according to diagnosis conclusions',
      phase2Point2: 'Scientific removal of stains, residues and microorganisms identified',
      phase2Point3: 'Aesthetic and preparatory restoration ensuring a perfectly healthy and receptive surface for protection',
      phase3Title: 'Protection',
      phase3Description: 'Application of nanotechnology coatings for lasting protection',
      phase3Point1: 'Nano-SiO2 Application',
      phase3Point2: 'Invisible nanotechnology coating',
      phase3Point3: 'Long-lasting protection 3-5 years',
      trustTitle: 'They Trust Us',
      metric1Label: 'Time Freed',
      metric1Description: 'Your teams spend 60% less time on intensive maintenance',
      metric2Label: 'Return on Investment',
      metric2Description: 'Measurable return through sustainable savings',
      metric3Label: 'Sustainable',
      metric3Subtitle: 'months',
      metric3Description: 'Continuous support and systematic dialogue'
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
      material1: 'Bejmat',
      material2: 'Taza Stone',
      material3: 'Natural Stones',
      material4: 'Marble',
      material5: 'Zellige',
      material6: 'Composite Wood',
      material7: 'Metal',
      material8: 'Floor Safety',
      material9: 'Textile',
      material10: 'Sanitary',
      material11: 'Glass',
      material12: 'Ceramic',
      material13: 'Beldi Cement Tiles',
      zone1: 'Floors',
      zone2: 'Stairs',
      zone3: 'Walls',
      zone4: 'Furniture',
       title: 'Personalized Diagnostic Request',
      subtitle: 'For a heritage that defies time, the first step is a tailored diagnostic. Share the details of your project with us for a free preliminary analysis with no commitment.',
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
      describeProject: 'Describe your project...',
      selectCity: 'Select a city',
      sendRequest: 'Send Your Request',
      materialNature: 'Material Nature (multiple selection)',
      applicationZone: 'Application Zone (multiple selection)',
      city: 'City',
      message: 'Message',
          nameLabel: 'Name *',
      emailLabel: 'Email *',
      phoneLabel: 'Phone *',
      selectCityPlaceholder: 'Select a city',
      specifyCity: 'Specify the city',
      cityPlaceholder: 'City name',
      phone: 'Phone',
    protectionType: 'Protection Type',
    protectionWater: 'Water Repellent',
    protectionOil: 'Oil Repellent',
    protectionMineralization: 'Mineralization (anti-crumbling)',
    protectionAntiSlip: 'Anti-Slip',
    diagnosticButton: 'Request My Diagnostic',
    multipleSelection: 'multiple selection',
    },
    confirmation: {
      titlePrefix: 'Thank you for your trust',
      messagePrefix: 'We have received your personalized diagnostic request regarding',
      messageSuffix: 'A NanoProtects expert will analyze your project and contact you by phone within 24 business hours.',
      responseTime: 'We appreciate your trust in us.',
      waitingTitle: 'While waiting for our call, discover our expertise:',
      showroomButton: '🎬 Discover our Showroom',
      furtherTitle: 'Learn more',
      methodTitle: 'Our Method in 3 Steps',
      methodDescription: 'Discover our innovative approach to preserve the beauty of your materials.',
      expertiseTitle: 'Expertise: Protecting Zellige',
      expertiseDescription: 'Explore our specialized solutions for every type of surface.',
      learnMore: 'Learn more',
      reassuranceMessage: 'Your preliminary diagnosis is free and without commitment. Our mission: to sustainably preserve the beauty and value of your heritage.',
      urgentPrefix: 'For any urgent questions, you can reach us at',
      backHome: 'Back to home',
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
      issuesLabel: 'Challenges',
      actionsLabel: 'Our Actions',
      surfacesLabel: 'Affected Surfaces',
    category1Title: 'Stones & Marble',
      category1Issues: 'Organic soiling, efflorescence, stains, degradation caused by pollution and UV rays.',
      category1Actions: 'Regenerating cleaning respectful of materials & application saturated with nanotechnology protection solutions impregnable hydrophobic and oleophobic.',
      category1Surfaces: 'Taza Stone, Marble, Travertine, Limestone Stones, Slate, Granite',
      category2Title: 'Traditional Materials',
      category2Issues: 'High porosity, water absorption, cement stains, yellowing and/or flaking of old varnishes, fouling, greasy soiling, loss of colors due to UV',
      category2Actions: 'Wet stripping without dust, color restoration, breathable anti-stain waterproofing non-filmogenic, anti-UV protection',
      category2Surfaces: 'Bejmat, Beldi cement tiles, Zellige, Dess',
      category3Title: 'Composite Wood',
      category3Issues: 'Graying, organic stains, UV discoloration, fouling, flaking plastic film or varnish',
      category3Actions: 'Gentle cleaning, original color restoration, impregnating nanotechnology protection anti-UV and anti-stain',
      category3Surfaces: 'Terraces, Swimming pool deck, Furniture, Cladding',
      category4Title: 'Textiles',
      category4Issues: 'Organic stains, odors, discoloration',
      category4Actions: 'Deep cleaning by injection/extraction under pressure, anti-stain and anti-soiling treatment, breathable textile protection',
      category4Surfaces: 'Carpets, Rugs, Curtains, Wall hangings, Cushions',
      category5Title: 'Anti-Slip Treatment',
      category5Issues: 'Excessive slipperiness on wet floors (pools, showers, kitchens), risk of falls.',
      category5Actions: 'Application of a non-corrosive durable treatment derived from Silicon in aqueous phase anti-slip NON-ACID, which increases the coefficient of friction without altering aesthetics',
      category5Surfaces: 'Crystallized Marble, Vitrified Tile, Ceramics',
      category6Title: 'Mineralizing Treatment',
      category6Subtitle: 'Friable porous materials',
      category6Issues: 'Erosion, crumbling, dust',
      category6Actions: 'Penetrating mineralization treatment (hardening and internal consolidation) with non-filmogenic water-repellent protection, lasting anti-dust effect',
      category6Surfaces: 'Terracotta bricks, Plaster stuccos, Rammed earth, Coatings, Mortars, Concretes, Facades and Old floors',
      processStep1: 'Integral Preparation',
      processStep2: 'Nanotechnology Application',
      processStep3: 'Durable Protection',
    },
    why: {
      title: 'Why Choose Us?',
      subtitle: 'Every surface tells a story. Every material carries the soul of the craftsman who created it. Preserving this beauty means honoring a legacy and ensuring your spaces continue to inspire wonder for generations to come.',
      comparisonProblemTitle: 'Common Film Protection',
      comparisonProblemLabel: 'Problem:',
      comparisonProblemText: 'Surface film that can chip and yellow.',
      comparisonImpactLabel: 'Impact:',
      comparisonImpactText: 'Alters appearance, limited lifespan, complicated maintenance.',
      comparisonSolutionTitle: 'NanoProtects Impregnation',
      comparisonSolutionLabel: 'Solution:',
      comparisonSolutionText: 'Nanotechnology barrier integrated into the material.',
      comparisonBenefitLabel: 'Benefit:',
      comparisonBenefitText: 'Original beauty preserved, long durability, easy maintenance.',
      reason1Title: 'Scientific & Custom Expertise',
      reason1Description: 'Our precise diagnosis and ecological scientific protocols, applied by highly qualified teams, guarantee a solution perfectly adapted to each material and your specific needs.',
      reason2Title: 'Sustainable & Regenerative Technology',
      reason2Description: 'We combine regenerative cleaning that restores the original shine to surfaces with invisible and durable nanotechnology protection (3-5 years), for beauty preserved long-term.',
      reason3Title: 'Operational Agility & Total Discretion',
      reason3Description: 'Our process is designed to be ultra-efficient, agile and completely discreet. It integrates without disrupting your operations, strictly respecting your schedules and brand image.',
      reason4Title: 'Profitable & Trustworthy Partnership',
      reason4Description: 'Through continuous dialogue and reliable execution, we drastically reduce your long-term maintenance costs, transforming maintenance into a strategic and secure investment.',
    },
  },
};
