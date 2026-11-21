import { useEffect } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

// Page dediee au nettoyage et a la protection du bejmat.
// Le texte francais est celui du pre-rendu (HTML lu par Google, Bing et les IA).
// Les donnees structurees (Service, FAQPage, BreadcrumbList) sont ecrites directement
// dans le HTML pour etre visibles sans JavaScript.

const PAGE_URL = 'https://nanoprotects.com/nettoyage-bejmat-marrakech/';
const SITE_URL = 'https://nanoprotects.com/';
const PHONE_DISPLAY = '+212 675 971 971';
const PHONE_TEL = '+212675971971';
const WHATSAPP_URL = 'https://wa.me/212675971971';

type Item = { title: string; text: string };
type Faq = { q: string; a: string };

type Content = {
  docTitle: string;
  breadcrumbHome: string;
  breadcrumbPage: string;
  eyebrow: string;
  h1: string;
  lead: string;
  ctaDiagnostic: string;
  ctaWhatsapp: string;
  facts: string[];
  doTitle: string;
  doIntro: string;
  doItems: Item[];
  methodTitle: string;
  methodSteps: Item[];
  explainTitle: string;
  explainItems: Item[];
  limitsTitle: string;
  limitsText: string;
  worksTitle: string;
  worksIntro: string;
  works: Item[];
  worksLink: string;
  faqTitle: string;
  faqs: Faq[];
  finalTitle: string;
  finalText: string;
  address: string;
  serviceName: string;
  serviceDescription: string;
};

const worksImages = [
  '/images/showroom/bejmat-corridor-riad.webp',
  '/images/showroom/bejmat-entrance-riad.webp',
  '/images/showroom/bejmat-staircase-riad.webp',
  '/images/showroom/bejmat-patio-riad.webp',
];

const content: Record<Language, Content> = {
  fr: {
    docTitle: 'Nettoyage et Protection Bejmat Marrakech | NanoProtects',
    breadcrumbHome: 'Accueil',
    breadcrumbPage: 'Nettoyage bejmat Marrakech',
    eyebrow: 'Bejmat · Marrakech',
    h1: 'Nettoyage et protection du bejmat à Marrakech',
    lead: "NanoProtects nettoie, décape et protège le bejmat des riads, hôtels, villas et résidences : élimination des anciens vernis et des salissures, traitement du salpêtre, puis protection hydrofuge et oléofuge qui ne forme pas de film.",
    ctaDiagnostic: 'Demander un diagnostic gratuit',
    ctaWhatsapp: 'Écrire sur WhatsApp',
    facts: [
      'Diagnostic gratuit et sans engagement',
      'Essai préalable sur une zone test',
      'Protection non filmogène : le bejmat respire',
    ],
    doTitle: 'Ce que nous faisons sur le bejmat',
    doIntro: "Le bejmat est une terre cuite artisanale poreuse. Avec le temps, elle absorbe l'eau, les graisses et les salissures, et d'anciens traitements peuvent jaunir ou s'écailler. Selon l'état du sol, nous intervenons sur :",
    doItems: [
      { title: 'Nettoyage en profondeur', text: "Élimination des salissures incrustées, des taches et des traces d'usage." },
      { title: 'Décapage des anciens vernis, cires et traitements', text: 'Retrait des finitions inadaptées qui jaunissent ou s’écaillent.' },
      { title: "Ponçage selon l'état du support", text: "Reprise de la surface avant protection, lorsque l'état du sol l'exige." },
      { title: 'Traitement du salpêtre et des efflorescences', text: "Traitement des dépôts blanchâtres de sels. Si la cause est une remontée d'humidité, elle doit aussi être identifiée." },
      { title: 'Protection hydrofuge et oléofuge', text: "Limite la pénétration de l'eau et des huiles, sans vernis ni pellicule en surface." },
    ],
    methodTitle: 'Notre méthode en 4 étapes',
    methodSteps: [
      { title: 'Diagnostic gratuit', text: "Nous examinons l'état du bejmat, les anciens traitements et les causes des dégradations." },
      { title: 'Essai préalable sur zone test', text: "Nous testons le nettoyage et la protection sur une petite surface pour valider le rendu avant d'intervenir sur l'ensemble du sol." },
      { title: 'Nettoyage, décapage et traitement', text: 'Nettoyage en profondeur, décapage et ponçage si nécessaire, traitement du salpêtre.' },
      { title: 'Protection hydrofuge et oléofuge', text: "Application d'une protection nanotechnologique invisible, non filmogène." },
    ],
    explainTitle: 'Hydrofuge, oléofuge, non filmogène : ce que cela change',
    explainItems: [
      { title: 'Hydrofuge', text: "Réduit l'eau absorbée par le matériau : l'eau perle à la surface au lieu de pénétrer." },
      { title: 'Oléofuge', text: "Limite la pénétration des huiles et des graisses, souvent à l'origine de taches difficiles à retirer." },
      { title: 'Non filmogène', text: "Aucune pellicule en surface : pas de vernis qui puisse jaunir ou s'écailler, et le matériau reste respirant." },
    ],
    limitsTitle: 'Ce que la protection ne fait pas',
    limitsText: "Elle limite la pénétration des liquides et facilite l'entretien, mais elle ne rend pas le sol indestructible. Sa durée dépend du passage, de l'exposition et de l'entretien : nous l'estimons à 3 à 5 ans.",
    worksTitle: 'Réalisations bejmat',
    worksIntro: 'Quatre chantiers réalisés dans des riads de Marrakech.',
    works: [
      { title: 'Corridor en bejmat, riad', text: 'Nettoyage et traitement protecteur.' },
      { title: 'Entrée en bejmat, riad', text: 'Nettoyage en profondeur et traitement hydrofuge.' },
      { title: 'Escalier en bejmat, riad', text: 'Nettoyage et traitement hydrofuge et oléofuge invisible.' },
      { title: 'Patio en bejmat, riad', text: 'Décapage du vernis, nettoyage profond et protection sublimée.' },
    ],
    worksLink: 'Voir toutes les réalisations',
    faqTitle: 'Questions fréquentes sur le bejmat',
    faqs: [
      { q: 'Comment nettoyer un bejmat encrassé ou taché ?', a: "Le bejmat est poreux : les produits ménagers courants peuvent fixer les taches ou abîmer la terre cuite. Nous commençons par un diagnostic et un essai sur une zone test, puis nous réalisons un nettoyage en profondeur adapté à l'état du sol (type de salissures, anciens traitements)." },
      { q: 'Pouvez-vous retirer un ancien vernis ou une ancienne cire sur du bejmat ?', a: "Oui. Nous réalisons le décapage des anciens vernis, cires et traitements, qui peuvent jaunir ou s'écailler avec le temps, puis un ponçage si l'état du sol l'exige, avant de protéger le bejmat." },
      { q: 'Traitez-vous le salpêtre et les efflorescences ?', a: "Oui, nous traitons le salpêtre et les efflorescences, ces dépôts blanchâtres de sels qui apparaissent en surface. Lorsqu'ils viennent d'une remontée d'humidité, la cause doit aussi être identifiée : c'est l'un des points examinés lors du diagnostic." },
      { q: 'Que signifient hydrofuge, oléofuge et non filmogène ?', a: "Hydrofuge : le matériau absorbe moins d'eau. Oléofuge : il absorbe moins les huiles et les graisses. Non filmogène : aucune pellicule ne se forme en surface, donc pas de vernis susceptible de s'écailler, et le bejmat reste respirant." },
      { q: "La protection change-t-elle l'aspect du bejmat ?", a: "La protection hydrofuge et oléofuge est invisible et vise à préserver l'aspect naturel du bejmat. Le rendu est validé par un essai préalable sur une zone test avant de traiter l'ensemble du sol." },
      { q: 'Combien de temps dure la protection ?', a: "Nous l'estimons à 3 à 5 ans. La durée réelle dépend du passage, de l'exposition (intérieur ou extérieur, soleil, eau) et de l'entretien. Nous en parlons lors du diagnostic." },
      { q: 'Intervenez-vous dans les riads, hôtels et villas ?', a: "Oui, à Marrakech et dans tout le Maroc, pour les riads, hôtels, villas et résidences. Le déroulement des travaux est défini avec vous lors du diagnostic." },
      { q: 'Comment demander un diagnostic ?', a: `Le diagnostic est gratuit et sans engagement. Écrivez-nous sur WhatsApp au ${PHONE_DISPLAY} (avec quelques photos) ou utilisez le formulaire de contact.` },
    ],
    finalTitle: 'Un bejmat à nettoyer ou à protéger à Marrakech ?',
    finalText: 'Décrivez-nous votre surface : nous réalisons un diagnostic gratuit et sans engagement.',
    address: `NanoProtects, Q.I. Sidi Ghanem, Marrakech. Intervention à Marrakech et dans tout le Maroc. Tél. ${PHONE_DISPLAY}`,
    serviceName: 'Nettoyage et protection du bejmat à Marrakech',
    serviceDescription: "Nettoyage en profondeur, décapage, ponçage, traitement du salpêtre et protection hydrofuge et oléofuge non filmogène du bejmat pour riads, hôtels, villas et résidences à Marrakech et au Maroc.",
  },

  en: {
    docTitle: 'Bejmat Cleaning and Protection Marrakech | NanoProtects',
    breadcrumbHome: 'Home',
    breadcrumbPage: 'Bejmat cleaning Marrakech',
    eyebrow: 'Bejmat · Marrakech',
    h1: 'Bejmat Cleaning and Protection in Marrakech',
    lead: 'NanoProtects cleans, strips and protects bejmat in riads, hotels, villas and residences: removal of old varnishes and soiling, treatment of saltpetre, then a water- and oil-repellent protection that does not form a film.',
    ctaDiagnostic: 'Request a free diagnosis',
    ctaWhatsapp: 'Message us on WhatsApp',
    facts: [
      'Free diagnosis, no commitment',
      'Preliminary test on a test area',
      'Non-film-forming protection: bejmat can breathe',
    ],
    doTitle: 'What we do on bejmat',
    doIntro: 'Bejmat is a porous, handmade terracotta. Over time it absorbs water, grease and dirt, and old treatments can yellow or flake. Depending on the condition of the floor, we carry out:',
    doItems: [
      { title: 'Deep cleaning', text: 'Removal of ingrained dirt, stains and wear marks.' },
      { title: 'Stripping of old varnishes, waxes and treatments', text: 'Removal of unsuitable finishes that yellow or flake.' },
      { title: 'Sanding, depending on the condition of the surface', text: 'Preparing the surface before protection, when the floor requires it.' },
      { title: 'Treatment of saltpetre and efflorescence', text: 'Treatment of whitish salt deposits. If the cause is rising damp, it must also be identified.' },
      { title: 'Water- and oil-repellent protection', text: 'Limits the penetration of water and oils, without varnish or a surface film.' },
    ],
    methodTitle: 'Our method in 4 steps',
    methodSteps: [
      { title: 'Free diagnosis', text: 'We examine the condition of the bejmat, previous treatments and the causes of damage.' },
      { title: 'Preliminary test on a test area', text: 'We test the cleaning and the protection on a small area to validate the result before treating the whole floor.' },
      { title: 'Cleaning, stripping and treatment', text: 'Deep cleaning, stripping and sanding if necessary, saltpetre treatment.' },
      { title: 'Water- and oil-repellent protection', text: 'Application of an invisible, non-film-forming nanotechnology protection.' },
    ],
    explainTitle: 'Water-repellent, oil-repellent, non-film-forming: what it changes',
    explainItems: [
      { title: 'Water-repellent', text: 'Reduces the water absorbed by the material: water beads on the surface instead of soaking in.' },
      { title: 'Oil-repellent', text: 'Limits the penetration of oils and grease, which often cause stains that are hard to remove.' },
      { title: 'Non-film-forming', text: 'No film on the surface: no varnish that can yellow or flake, and the material stays breathable.' },
    ],
    limitsTitle: 'What the protection does not do',
    limitsText: 'It limits the penetration of liquids and makes maintenance easier, but it does not make a floor indestructible. Its lifespan depends on foot traffic, exposure and maintenance: we estimate 3 to 5 years.',
    worksTitle: 'Bejmat projects',
    worksIntro: 'Four projects carried out in riads in Marrakech.',
    works: [
      { title: 'Bejmat corridor, riad', text: 'Cleaning and protective treatment.' },
      { title: 'Bejmat entrance, riad', text: 'Deep cleaning and water-repellent treatment.' },
      { title: 'Bejmat staircase, riad', text: 'Cleaning and invisible water- and oil-repellent treatment.' },
      { title: 'Bejmat patio, riad', text: 'Varnish stripping, deep cleaning and protection with an enhanced finish.' },
    ],
    worksLink: 'See all projects',
    faqTitle: 'Frequently asked questions about bejmat',
    faqs: [
      { q: 'How do you clean dirty or stained bejmat?', a: 'Bejmat is porous: common household cleaners can set stains or damage the terracotta. We start with a diagnosis and a test on a test area, then carry out a deep cleaning adapted to the condition of the floor (type of soiling, previous treatments).' },
      { q: 'Can you remove an old varnish or wax from bejmat?', a: 'Yes. We strip old varnishes, waxes and treatments, which can yellow or flake over time, then sand if the condition of the floor requires it, before protecting the bejmat.' },
      { q: 'Do you treat saltpetre and efflorescence?', a: 'Yes, we treat saltpetre and efflorescence, the whitish salt deposits that appear on the surface. When they come from rising damp, the cause must also be identified: it is one of the points we examine during the diagnosis.' },
      { q: 'What do water-repellent, oil-repellent and non-film-forming mean?', a: 'Water-repellent: the material absorbs less water. Oil-repellent: it absorbs fewer oils and fats. Non-film-forming: no layer forms on the surface, so there is no varnish that can flake, and the bejmat stays breathable.' },
      { q: 'Does the protection change the look of the bejmat?', a: 'The water- and oil-repellent protection is invisible and aims to preserve the natural look of the bejmat. The result is validated with a preliminary test on a test area before the whole floor is treated.' },
      { q: 'How long does the protection last?', a: 'We estimate 3 to 5 years. The actual duration depends on foot traffic, exposure (indoor or outdoor, sun, water) and maintenance. We discuss it during the diagnosis.' },
      { q: 'Do you work in riads, hotels and villas?', a: 'Yes, in Marrakech and throughout Morocco, for riads, hotels, villas and residences. How the work will be carried out is defined with you during the diagnosis.' },
      { q: 'How do I request a diagnosis?', a: `The diagnosis is free and without commitment. Message us on WhatsApp at ${PHONE_DISPLAY} (with a few photos) or use the contact form.` },
    ],
    finalTitle: 'Bejmat to clean or protect in Marrakech?',
    finalText: 'Tell us about your surface: we offer a free diagnosis with no commitment.',
    address: `NanoProtects, Q.I. Sidi Ghanem, Marrakech. We work in Marrakech and throughout Morocco. Tel. ${PHONE_DISPLAY}`,
    serviceName: 'Bejmat cleaning and protection in Marrakech',
    serviceDescription: 'Deep cleaning, stripping, sanding, saltpetre treatment and non-film-forming water- and oil-repellent protection of bejmat for riads, hotels, villas and residences in Marrakech and Morocco.',
  },

  ar: {
    docTitle: 'تنظيف وحماية البيجمات في مراكش | NanoProtects',
    breadcrumbHome: 'الرئيسية',
    breadcrumbPage: 'تنظيف البيجمات مراكش',
    eyebrow: 'البيجمات · مراكش',
    h1: 'تنظيف وحماية البيجمات في مراكش',
    lead: 'تقوم NanoProtects بتنظيف البيجمات وإزالة طبقاتها القديمة وحمايتها في الرياضات والفنادق والفيلات والإقامات: إزالة الورنيش القديم والأوساخ، ومعالجة الأملاح، ثم حماية طاردة للماء والزيوت لا تشكّل طبقة على السطح.',
    ctaDiagnostic: 'اطلبوا تشخيصاً مجانياً',
    ctaWhatsapp: 'راسلونا على واتساب',
    facts: [
      'تشخيص مجاني وبدون التزام',
      'تجربة أولية على منطقة اختبار',
      'حماية لا تشكّل طبقة سطحية: يبقى البيجمات قادراً على التنفس',
    ],
    doTitle: 'ما نقوم به على البيجمات',
    doIntro: 'البيجمات طين مطبوخ تقليدي مسامي. مع مرور الوقت يمتص الماء والدهون والأوساخ، وقد تصفرّ المعالجات القديمة أو تتقشر. حسب حالة الأرضية، نقوم بما يلي:',
    doItems: [
      { title: 'تنظيف عميق', text: 'إزالة الأوساخ المتراكمة والبقع وآثار الاستعمال.' },
      { title: 'إزالة الورنيش والشمع والمعالجات القديمة', text: 'إزالة الطبقات غير المناسبة التي تصفرّ أو تتقشر.' },
      { title: 'الصنفرة حسب حالة السطح', text: 'تهيئة السطح قبل الحماية عندما تتطلب حالة الأرضية ذلك.' },
      { title: 'معالجة الأملاح والتزهرات الملحية', text: 'معالجة الرواسب الملحية البيضاء. وإذا كان السبب رطوبة صاعدة فيجب تحديده أيضاً.' },
      { title: 'حماية طاردة للماء والزيوت', text: 'تحدّ من تسرب الماء والزيوت، دون ورنيش ودون طبقة على السطح.' },
    ],
    methodTitle: 'منهجيتنا في 4 مراحل',
    methodSteps: [
      { title: 'تشخيص مجاني', text: 'نفحص حالة البيجمات والمعالجات السابقة وأسباب التلف.' },
      { title: 'تجربة أولية على منطقة اختبار', text: 'نجرّب التنظيف والحماية على مساحة صغيرة للتأكد من النتيجة قبل معالجة الأرضية كاملة.' },
      { title: 'التنظيف والإزالة والمعالجة', text: 'تنظيف عميق وإزالة الطبقات القديمة وصنفرة عند الحاجة ومعالجة الأملاح.' },
      { title: 'حماية طاردة للماء والزيوت', text: 'تطبيق حماية نانوية غير مرئية ولا تشكّل طبقة على السطح.' },
    ],
    explainTitle: 'طارد للماء، طارد للزيوت، دون طبقة سطحية: ماذا يتغيّر؟',
    explainItems: [
      { title: 'طارد للماء', text: 'يقلّل كمية الماء التي تمتصها المادة: يتجمع الماء على شكل قطرات فوق السطح بدل أن يتسرب إليه.' },
      { title: 'طارد للزيوت', text: 'يحدّ من تسرب الزيوت والدهون، وهي سبب كثير من البقع الصعبة الإزالة.' },
      { title: 'دون طبقة سطحية', text: 'لا تتكوّن طبقة فوق السطح: لا ورنيش قد يصفرّ أو يتقشر، وتبقى المادة قادرة على التنفس.' },
    ],
    limitsTitle: 'ما لا تفعله الحماية',
    limitsText: 'تحدّ الحماية من تسرب السوائل وتسهّل الصيانة، لكنها لا تجعل الأرضية غير قابلة للتلف. تتوقف مدتها على حركة المرور والتعرّض والصيانة، ونقدّرها بين 3 و5 سنوات.',
    worksTitle: 'إنجازاتنا على البيجمات',
    worksIntro: 'أربعة أوراش أُنجزت في رياضات بمراكش.',
    works: [
      { title: 'ممر من البيجمات، رياض', text: 'تنظيف ومعالجة واقية.' },
      { title: 'مدخل من البيجمات، رياض', text: 'تنظيف عميق ومعالجة طاردة للماء.' },
      { title: 'درج من البيجمات، رياض', text: 'تنظيف ومعالجة طاردة للماء والزيوت غير مرئية.' },
      { title: 'باحة من البيجمات، رياض', text: 'إزالة الورنيش وتنظيف عميق وحماية بلمسة نهائية مُحسَّنة.' },
    ],
    worksLink: 'عرض جميع الإنجازات',
    faqTitle: 'أسئلة شائعة حول البيجمات',
    faqs: [
      { q: 'كيف أنظّف أرضية بيجمات متسخة أو عليها بقع؟', a: 'البيجمات مسامي، وقد تثبّت منتجات التنظيف المنزلية العادية البقع أو تضرّ بالطين المطبوخ. نبدأ بتشخيص وتجربة على منطقة اختبار، ثم ننفّذ تنظيفاً عميقاً يناسب حالة الأرضية (نوع الأوساخ والمعالجات السابقة).' },
      { q: 'هل يمكنكم إزالة ورنيش أو شمع قديم عن البيجمات؟', a: 'نعم. نزيل الورنيش والشمع والمعالجات القديمة التي قد تصفرّ أو تتقشر مع الوقت، ثم نقوم بالصنفرة إذا تطلبت حالة الأرضية ذلك، قبل حماية البيجمات.' },
      { q: 'هل تعالجون الأملاح والتزهرات الملحية؟', a: 'نعم، نعالج الأملاح والتزهرات الملحية، أي الرواسب البيضاء التي تظهر على السطح. وعندما يكون سببها رطوبة صاعدة يجب تحديد هذا السبب أيضاً، وهو من النقاط التي نفحصها أثناء التشخيص.' },
      { q: 'ماذا تعني عبارات طارد للماء وطارد للزيوت ودون طبقة سطحية؟', a: 'طارد للماء: تمتص المادة كمية أقل من الماء. طارد للزيوت: تمتص كمية أقل من الزيوت والدهون. دون طبقة سطحية: لا تتكوّن أي طبقة فوق السطح، فلا يوجد ورنيش قد يتقشر، ويبقى البيجمات قادراً على التنفس.' },
      { q: 'هل تغيّر الحماية مظهر البيجمات؟', a: 'الحماية الطاردة للماء والزيوت غير مرئية وتهدف إلى الحفاظ على المظهر الطبيعي للبيجمات. نتحقق من النتيجة بتجربة أولية على منطقة اختبار قبل معالجة الأرضية كاملة.' },
      { q: 'كم تدوم الحماية؟', a: 'نقدّرها بين 3 و5 سنوات. وتتوقف المدة الفعلية على حركة المرور والتعرّض (داخلي أو خارجي، شمس، ماء) والصيانة. نتحدث عن ذلك أثناء التشخيص.' },
      { q: 'هل تعملون في الرياضات والفنادق والفيلات؟', a: 'نعم، في مراكش وفي جميع أنحاء المغرب، للرياضات والفنادق والفيلات والإقامات. نحدد معكم سير الأشغال أثناء التشخيص.' },
      { q: 'كيف أطلب تشخيصاً؟', a: `التشخيص مجاني وبدون التزام. راسلونا عبر واتساب على الرقم ${PHONE_DISPLAY} (مع بعض الصور) أو عبر نموذج الاتصال.` },
    ],
    finalTitle: 'أرضية بيجمات تحتاج إلى تنظيف أو حماية في مراكش؟',
    finalText: 'صِفوا لنا سطحكم: نقدّم تشخيصاً مجانياً وبدون التزام.',
    address: `NanoProtects، الحي الصناعي سيدي غانم، مراكش. نتدخل في مراكش وفي جميع أنحاء المغرب. الهاتف: ${PHONE_DISPLAY}`,
    serviceName: 'تنظيف وحماية البيجمات في مراكش',
    serviceDescription: 'تنظيف عميق وإزالة الطبقات القديمة وصنفرة ومعالجة الأملاح وحماية طاردة للماء والزيوت لا تشكّل طبقة سطحية للبيجمات في الرياضات والفنادق والفيلات والإقامات بمراكش والمغرب.',
  },

  es: {
    docTitle: 'Limpieza y Protección Bejmat Marrakech | NanoProtects',
    breadcrumbHome: 'Inicio',
    breadcrumbPage: 'Limpieza bejmat Marrakech',
    eyebrow: 'Bejmat · Marrakech',
    h1: 'Limpieza y protección del bejmat en Marrakech',
    lead: 'NanoProtects limpia, decapa y protege el bejmat de riads, hoteles, villas y residencias: eliminación de barnices antiguos y suciedad, tratamiento del salitre y protección hidrófuga y oleófuga que no forma película.',
    ctaDiagnostic: 'Solicitar un diagnóstico gratuito',
    ctaWhatsapp: 'Escribir por WhatsApp',
    facts: [
      'Diagnóstico gratuito y sin compromiso',
      'Prueba previa en una zona de ensayo',
      'Protección sin película: el bejmat respira',
    ],
    doTitle: 'Lo que hacemos en el bejmat',
    doIntro: 'El bejmat es una terracota artesanal porosa. Con el tiempo absorbe agua, grasa y suciedad, y los tratamientos antiguos pueden amarillear o desconcharse. Según el estado del suelo, realizamos:',
    doItems: [
      { title: 'Limpieza en profundidad', text: 'Eliminación de suciedad incrustada, manchas y huellas de uso.' },
      { title: 'Decapado de barnices, ceras y tratamientos antiguos', text: 'Retirada de acabados inadecuados que amarillean o se desconchan.' },
      { title: 'Lijado según el estado del soporte', text: 'Preparación de la superficie antes de la protección, cuando el estado del suelo lo requiere.' },
      { title: 'Tratamiento del salitre y de las eflorescencias', text: 'Tratamiento de los depósitos blanquecinos de sales. Si la causa es la humedad ascendente, también hay que identificarla.' },
      { title: 'Protección hidrófuga y oleófuga', text: 'Limita la penetración del agua y de los aceites, sin barniz ni película superficial.' },
    ],
    methodTitle: 'Nuestro método en 4 pasos',
    methodSteps: [
      { title: 'Diagnóstico gratuito', text: 'Examinamos el estado del bejmat, los tratamientos anteriores y las causas del deterioro.' },
      { title: 'Prueba previa en una zona de ensayo', text: 'Probamos la limpieza y la protección en una superficie pequeña para validar el resultado antes de tratar todo el suelo.' },
      { title: 'Limpieza, decapado y tratamiento', text: 'Limpieza en profundidad, decapado y lijado si es necesario, tratamiento del salitre.' },
      { title: 'Protección hidrófuga y oleófuga', text: 'Aplicación de una protección nanotecnológica invisible, sin película.' },
    ],
    explainTitle: 'Hidrófugo, oleófugo, sin película: qué cambia',
    explainItems: [
      { title: 'Hidrófugo', text: 'Reduce el agua que absorbe el material: el agua forma gotas en la superficie en lugar de penetrar.' },
      { title: 'Oleófugo', text: 'Limita la penetración de aceites y grasas, causa frecuente de manchas difíciles de quitar.' },
      { title: 'Sin película', text: 'No se forma película en la superficie: no hay barniz que pueda amarillear o desconcharse, y el material sigue transpirando.' },
    ],
    limitsTitle: 'Lo que la protección no hace',
    limitsText: 'Limita la penetración de líquidos y facilita el mantenimiento, pero no hace el suelo indestructible. Su duración depende del tránsito, de la exposición y del mantenimiento: la estimamos en 3 a 5 años.',
    worksTitle: 'Realizaciones en bejmat',
    worksIntro: 'Cuatro obras realizadas en riads de Marrakech.',
    works: [
      { title: 'Pasillo en bejmat, riad', text: 'Limpieza y tratamiento protector.' },
      { title: 'Entrada en bejmat, riad', text: 'Limpieza en profundidad y tratamiento hidrófugo.' },
      { title: 'Escalera en bejmat, riad', text: 'Limpieza y tratamiento hidrófugo y oleófugo invisible.' },
      { title: 'Patio en bejmat, riad', text: 'Decapado del barniz, limpieza profunda y protección con acabado realzado.' },
    ],
    worksLink: 'Ver todas las realizaciones',
    faqTitle: 'Preguntas frecuentes sobre el bejmat',
    faqs: [
      { q: '¿Cómo limpiar un bejmat sucio o manchado?', a: 'El bejmat es poroso: los productos de limpieza domésticos habituales pueden fijar las manchas o dañar la terracota. Empezamos con un diagnóstico y una prueba en una zona de ensayo, y después realizamos una limpieza en profundidad adaptada al estado del suelo (tipo de suciedad, tratamientos anteriores).' },
      { q: '¿Pueden retirar un barniz o una cera antiguos del bejmat?', a: 'Sí. Realizamos el decapado de barnices, ceras y tratamientos antiguos, que pueden amarillear o desconcharse con el tiempo, y un lijado si el estado del suelo lo exige, antes de proteger el bejmat.' },
      { q: '¿Tratan el salitre y las eflorescencias?', a: 'Sí, tratamos el salitre y las eflorescencias, esos depósitos blanquecinos de sales que aparecen en la superficie. Cuando proceden de humedad ascendente, también hay que identificar la causa: es uno de los puntos que examinamos en el diagnóstico.' },
      { q: '¿Qué significan hidrófugo, oleófugo y sin película?', a: 'Hidrófugo: el material absorbe menos agua. Oleófugo: absorbe menos aceites y grasas. Sin película: no se forma ninguna capa en la superficie, por lo que no hay barniz que pueda desconcharse, y el bejmat sigue transpirando.' },
      { q: '¿La protección cambia el aspecto del bejmat?', a: 'La protección hidrófuga y oleófuga es invisible y busca preservar el aspecto natural del bejmat. El resultado se valida con una prueba previa en una zona de ensayo antes de tratar todo el suelo.' },
      { q: '¿Cuánto dura la protección?', a: 'La estimamos en 3 a 5 años. La duración real depende del tránsito, de la exposición (interior o exterior, sol, agua) y del mantenimiento. Lo hablamos durante el diagnóstico.' },
      { q: '¿Intervienen en riads, hoteles y villas?', a: 'Sí, en Marrakech y en todo Marruecos, para riads, hoteles, villas y residencias. El desarrollo de la obra se define con usted durante el diagnóstico.' },
      { q: '¿Cómo solicitar un diagnóstico?', a: `El diagnóstico es gratuito y sin compromiso. Escríbanos por WhatsApp al ${PHONE_DISPLAY} (con algunas fotos) o use el formulario de contacto.` },
    ],
    finalTitle: '¿Un bejmat que limpiar o proteger en Marrakech?',
    finalText: 'Cuéntenos sobre su superficie: realizamos un diagnóstico gratuito y sin compromiso.',
    address: `NanoProtects, Q.I. Sidi Ghanem, Marrakech. Intervenimos en Marrakech y en todo Marruecos. Tel. ${PHONE_DISPLAY}`,
    serviceName: 'Limpieza y protección del bejmat en Marrakech',
    serviceDescription: 'Limpieza en profundidad, decapado, lijado, tratamiento del salitre y protección hidrófuga y oleófuga sin película del bejmat para riads, hoteles, villas y residencias en Marrakech y Marruecos.',
  },
};

function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function NettoyageBejmat() {
  const { language } = useLanguage();
  const c = content[language] ?? content.fr;

  // En francais, le titre est gere par SEOUpdater (App.tsx) pour rester identique au pre-rendu.
  useEffect(() => {
    if (language === 'fr') return;
    document.title = c.docTitle;
  }, [language, c.docTitle]);

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.serviceName,
    serviceType: c.serviceName,
    description: c.serviceDescription,
    url: PAGE_URL,
    provider: {
      '@type': 'LocalBusiness',
      name: 'NanoProtects',
      url: SITE_URL,
      telephone: PHONE_TEL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Q.I. Sidi Ghanem, N°158, B44',
        addressLocality: 'Marrakech',
        addressRegion: 'Marrakech-Safi',
        postalCode: '40000',
        addressCountry: 'MA',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'Country', name: 'Maroc' },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumbHome, item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbPage, item: PAGE_URL },
    ],
  };

  const brand = '#A33215';
  const cardStyle = { backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f3ec' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbLd) }} />

      <Navigation />

      <main id="main-content">
        {/* Introduction */}
        <section className="pt-32 pb-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: '#A75C16' }}>
              {c.eyebrow}
            </p>
            <h1 className="font-display text-[2rem] md:text-[3.25rem] font-bold leading-tight mb-6" style={{ color: brand }}>
              {c.h1}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-8">{c.lead}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px]"
              >
                {c.ctaDiagnostic}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px] border-2"
                style={{ borderColor: '#A75C16', color: '#7a3f0f' }}
              >
                {c.ctaWhatsapp}
              </a>
            </div>

            <ul className="grid sm:grid-cols-3 gap-3 list-none p-0 m-0">
              {c.facts.map((fact) => (
                <li key={fact} className="rounded-lg px-4 py-3 text-gray-800 font-medium" style={cardStyle}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce que nous faisons */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>{c.doTitle}</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">{c.doIntro}</p>
            <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
              {c.doItems.map((item) => (
                <li key={item.title} className="rounded-lg p-5" style={cardStyle}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Methode */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>{c.methodTitle}</h2>
            <ol className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
              {c.methodSteps.map((step, i) => (
                <li key={step.title} className="rounded-lg p-5 flex gap-4" style={cardStyle}>
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: brand }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Explication hydrofuge / oleofuge / non filmogene */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>{c.explainTitle}</h2>
            <ul className="grid md:grid-cols-3 gap-4 list-none p-0 m-0 mb-6">
              {c.explainItems.map((item) => (
                <li key={item.title} className="rounded-lg p-5" style={cardStyle}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-lg p-5" style={{ backgroundColor: 'rgba(167,92,22,0.08)', border: '1px solid rgba(167,92,22,0.3)' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.limitsTitle}</h3>
              <p className="text-gray-700 leading-relaxed">{c.limitsText}</p>
            </div>
          </div>
        </section>

        {/* Realisations */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: brand }}>{c.worksTitle}</h2>
            <p className="text-gray-700 mb-6">{c.worksIntro}</p>
            <ul className="grid sm:grid-cols-2 gap-5 list-none p-0 m-0 mb-6">
              {c.works.map((work, i) => (
                <li key={work.title} className="rounded-lg overflow-hidden" style={cardStyle}>
                  <img
                    src={worksImages[i]}
                    alt={`${work.title} : ${work.text}`}
                    width={1200}
                    height={832}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{work.title}</h3>
                    <p className="text-gray-700">{work.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/showroom" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
              {c.worksLink}
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>{c.faqTitle}</h2>
            <div className="space-y-3">
              {c.faqs.map((f) => (
                <details key={f.q} className="rounded-lg p-5 group" style={cardStyle}>
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none">{f.q}</summary>
                  <p className="text-gray-700 leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Appel a l'action final */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto rounded-xl p-8 text-center" style={cardStyle}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: brand }}>{c.finalTitle}</h2>
            <p className="text-gray-700 mb-6">{c.finalText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link
                href="/contact"
                className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px]"
              >
                {c.ctaDiagnostic}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px] border-2"
                style={{ borderColor: '#A75C16', color: '#7a3f0f' }}
              >
                {c.ctaWhatsapp}
              </a>
            </div>
            <p className="text-sm text-gray-600">{c.address}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
