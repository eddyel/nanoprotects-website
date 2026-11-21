import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

// Page dediee a la reforme du classement hotelier marocain et a l'etat des sols.
// Page en francais uniquement : le contenu est reglementaire et vise les professionnels
// de l'hotellerie au Maroc. Le titre et la description sont geres par SEOUpdater (App.tsx)
// et par scripts/prerender.mjs, qui doivent rester identiques.

const PAGE_URL = 'https://nanoprotects.com/classement-hotelier-maroc-etat-des-sols/';
const SITE_URL = 'https://nanoprotects.com/';
const PHONE_DISPLAY = '+212 675 971 971';
const PHONE_TEL = '+212675971971';
const WHATSAPP_URL = 'https://wa.me/212675971971';

const ARRETE_URL = 'https://mtaess.gov.ma/wp-content/uploads/2025/06/Arrete-985-24-fixant-les-normes-de-classement-des-etablissements-dhebergement-touristique.pdf';
const MINISTERE_URL = 'https://mtaess.gov.ma/fr/hebergement-touristique-2-500-etablissements-sous-visites-mysteres-des-mai-2026/';

const PUBLISHED = '2026-11-21';
const PUBLISHED_LABEL = '21 novembre 2026';

const H1_FR = "Classement hôtelier au Maroc : ce que la réforme exige de vos sols";
const DESCRIPTION = "Ce que la réforme du classement hôtelier marocain (loi 80-14, arrêté 985-24) exige de l'état des sols des hôtels et riads, et comment s'y préparer.";

type Item = { title: string; text: string };
type Faq = { q: string; a: string };

const facts: string[] = [
  'Visites mystères engagées depuis mai 2026',
  "L'état des sols est une norme obligatoire",
  'Classement valable 7 ans, puis renouvelable tous les 5 ans',
];

const changes: Item[] = [
  {
    title: 'Un référentiel unique en étoiles',
    text: "Le classement en étoiles s'applique désormais à tous les types d'hébergement touristique : hôtels, hôtels-clubs, résidences de tourisme, maisons d'hôtes, riads et kasbahs.",
  },
  {
    title: "Un classement qui n'est plus acquis",
    text: 'Le classement est accordé pour une durée initiale de sept ans, puis renouvelable tous les cinq ans, avec des contrôles réguliers.',
  },
  {
    title: 'Un contrôle en deux temps',
    text: "La commission régionale de classement vérifie la conformité de l'établissement aux normes de construction et d'équipements. Un auditeur anonyme réalise ensuite une visite mystère portant sur le séjour réel.",
  },
  {
    title: 'Des grilles détaillées',
    text: "Les grilles d'évaluation publiées au Bulletin officiel comptent de 235 à 387 critères selon le type et la catégorie de l'établissement.",
  },
  {
    title: 'Des visites mystères à grande échelle',
    text: "Depuis mai 2026, 2 500 établissements classés à partir de trois étoiles font l'objet de visites mystères, au classement initial comme au renouvellement.",
  },
];

const timeline: Item[] = [
  { title: 'Arrêté conjoint n° 985-24', text: "Daté du 24 décembre 2024, publié au Bulletin officiel n° 7407 bis du 27 mai 2025. C'est le texte qui fixe les normes de classement." },
  { title: 'Période transitoire', text: 'Une période de 24 mois a été accordée aux professionnels pour se mettre en conformité avec les nouvelles normes.' },
  { title: 'Mai 2026', text: 'Lancement des visites mystères sur 2 500 établissements classés à partir de trois étoiles.' },
  { title: 'Mise à niveau', text: "Les établissements qui n'atteignent pas les standards requis disposent d'un délai pour corriger les écarts constatés avant toute décision de classement." },
];

const faqs: Faq[] = [
  {
    q: 'La réforme concerne-t-elle les riads et les maisons d’hôtes ?',
    a: "Oui. Le classement en étoiles s'applique désormais à tous les types d'hébergement touristique : hôtels, hôtels-clubs, résidences de tourisme, maisons d'hôtes, riads et kasbahs. Les visites mystères engagées en mai 2026 portent sur les établissements classés à partir de trois étoiles.",
  },
  {
    q: "L'état des sols est-il vraiment un critère de classement ?",
    a: "Oui. Dans l'arrêté 985-24, l'exigence « Les sols doivent être en bon état d'entretien et de propreté » est reprise 107 fois, espace par espace, et chaque fois avec la mention « A », qui désigne une norme obligatoire.",
  },
  {
    q: "Un sol en mauvais état peut-il être compensé par d'autres points ?",
    a: "Non, pas s'il s'agit d'une norme obligatoire. L'arrêté demande que l'établissement se conforme à 100 % des normes obligatoires et à 70 % au minimum du total des points des normes complémentaires. Les points se rattrapent sur les normes complémentaires, pas sur les normes obligatoires.",
  },
  {
    q: 'Puis-je remplacer mon bejmat ou mon zellige par un autre matériau ?',
    a: "Pour les riads, l'arrêté impose qu'à l'intérieur des bâtiments les sols soient traités en pierre, marbre, zellijs ou parquet en bois, et que les revêtements muraux traditionnels soient utilisés. Le remplacement par un matériau contemporain n'est donc pas une option pour ces établissements.",
  },
  {
    q: "Qu'est-ce qu'une visite mystère ?",
    a: "C'est une évaluation réalisée par un auditeur anonyme sur l'ensemble du parcours client : réservation, accueil, restauration, propreté, service en chambre, espace de remise en forme, piscines, équipements d'animation, rapidité du check-in et du check-out, et expérience globale du séjour. Elle complète la visite de la commission régionale de classement.",
  },
  {
    q: 'Combien de temps dure un classement ?',
    a: 'Sept ans pour la première attribution, puis renouvelable tous les cinq ans, avec des contrôles réguliers sur la période.',
  },
  {
    q: 'NanoProtects peut-il garantir le maintien de mes étoiles ?',
    a: "Non, et personne ne peut le garantir. Le classement repose sur plusieurs centaines de critères, dont la grande majorité ne nous concerne pas. Nous intervenons sur un point précis, l'état des sols et des surfaces traitables, et nous ne nous prononçons pas sur le reste.",
  },
  {
    q: 'Comment savoir où en sont mes sols ?',
    a: `Par un diagnostic, gratuit et sans engagement. Nous examinons l'état du support, les anciens traitements et les causes des dégradations, puis nous réalisons un essai sur une zone test avant toute intervention. Vous pouvez nous écrire sur WhatsApp au ${PHONE_DISPLAY} ou utiliser le formulaire de contact.`,
  },
];

function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function ClassementHotelier() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: H1_FR,
    description: DESCRIPTION,
    inLanguage: 'fr',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    url: PAGE_URL,
    author: { '@type': 'Organization', name: 'NanoProtects', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'NanoProtects',
      url: SITE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Q.I. Sidi Ghanem, N°158, B44',
        addressLocality: 'Marrakech',
        addressRegion: 'Marrakech-Safi',
        postalCode: '40000',
        addressCountry: 'MA',
      },
    },
    about: [
      { '@type': 'Thing', name: 'Classement hôtelier au Maroc' },
      { '@type': 'Thing', name: 'Loi 80-14 relative aux établissements touristiques' },
      { '@type': 'Thing', name: 'État des sols des établissements d’hébergement' },
    ],
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'Arrêté conjoint n° 985-24 fixant les normes de classement des établissements d’hébergement touristique',
        url: ARRETE_URL,
      },
      {
        '@type': 'CreativeWork',
        name: 'Ministère du Tourisme : 2 500 établissements sous visites mystères dès mai 2026',
        url: MINISTERE_URL,
      },
    ],
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Classement hôtelier et état des sols', item: PAGE_URL },
    ],
  };

  const brand = '#A33215';
  const cardStyle = { backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f3ec' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbLd) }} />

      <Navigation />

      <main id="main-content">
        {/* Introduction */}
        <section className="pt-32 pb-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: '#A75C16' }}>
              Réglementation · Maroc
            </p>
            <h1 className="font-display text-[2rem] md:text-[3.25rem] font-bold leading-tight mb-6" style={{ color: brand }}>
              {H1_FR}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-4">
              La réforme du classement des établissements d&apos;hébergement touristique a changé la façon dont l&apos;état
              des surfaces est évalué. Cette page résume ce que les textes officiels demandent aux sols des hôtels,
              riads, kasbahs et maisons d&apos;hôtes, et ce que cela implique concrètement pour un établissement.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mb-8">
              Toutes les informations réglementaires citées ici proviennent des textes publiés au Bulletin officiel et
              des communications du ministère du Tourisme. Les sources sont indiquées en bas de page.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact"
                className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px]"
              >
                Demander un diagnostic gratuit
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px] border-2"
                style={{ borderColor: '#A75C16', color: '#7a3f0f' }}
              >
                Écrire sur WhatsApp
              </a>
            </div>

            <ul className="grid sm:grid-cols-3 gap-3 list-none p-0 m-0">
              {facts.map((fact) => (
                <li key={fact} className="rounded-lg px-4 py-3 text-gray-800 font-medium" style={cardStyle}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce que la reforme a change */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Ce que la réforme a changé
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Le cadre est fixé par la loi 80-14 relative aux établissements touristiques et aux autres formes
              d&apos;hébergement touristique, complétée par ses arrêtés d&apos;application publiés au Bulletin officiel.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
              {changes.map((item) => (
                <li key={item.title} className="rounded-lg p-5" style={cardStyle}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce que les grilles demandent aux sols */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Ce que les grilles demandent aux sols
            </h2>
            <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dans l&apos;arrêté 985-24, l&apos;exigence «&nbsp;Les sols doivent être en bon état d&apos;entretien et
                de propreté&nbsp;» revient 107 fois. Elle est reprise espace par espace : entrée de l&apos;établissement,
                couloirs, coursives et escaliers, espaces communs, patio et jardin, espace détente, espace de remise en
                forme et ses dépendances, douches, toilettes et vestiaires, locaux du personnel, parkings.
              </p>
              <p>
                Chacune de ces lignes porte la mention «&nbsp;A&nbsp;». L&apos;arrêté précise que les normes obligatoires
                sont représentées par le signe «&nbsp;A&nbsp;» et les normes complémentaires par le signe «&nbsp;B&nbsp;»,
                ces dernières étant notées en points. Il fixe ensuite la règle de conformité : l&apos;établissement doit
                se conformer à 100&nbsp;% des normes obligatoires et à 70&nbsp;% au minimum du total des points des
                normes complémentaires.
              </p>
            </div>
            <div
              className="rounded-lg p-5 mt-6 max-w-3xl"
              style={{ backgroundColor: 'rgba(167,92,22,0.08)', border: '1px solid rgba(167,92,22,0.3)' }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">La conséquence pratique</h3>
              <p className="text-gray-700 leading-relaxed">
                L&apos;état des sols ne se compense pas. Un établissement peut rattraper des points sur des équipements
                ou des services relevant des normes complémentaires. Il ne peut pas rattraper une norme obligatoire qui
                n&apos;est pas satisfaite.
              </p>
            </div>
          </div>
        </section>

        {/* Riads et kasbahs */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Le cas des riads : les matériaux eux-mêmes sont imposés
            </h2>
            <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pour les riads, l&apos;arrêté ne se limite pas à l&apos;état des sols. Il impose les matériaux. À
                l&apos;intérieur des bâtiments, les sols doivent être traités en pierre, marbre, zellijs ou parquet en
                bois. Les revêtements muraux traditionnels sont également exigés : pisé, peinture à la chaux, enduit de
                cire, tadelakt, sculpture sur bois ou sur plâtre.
              </p>
              <p>
                Un riad se trouve donc tenu par deux exigences simultanées : conserver des matériaux traditionnels, et
                les maintenir en bon état d&apos;entretien et de propreté. Entre les deux, la marge de manoeuvre est
                étroite.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi le remplacement n'est pas la reponse */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Pourquoi le remplacement est rarement la bonne réponse
            </h2>
            <ul className="grid md:grid-cols-3 gap-4 list-none p-0 m-0">
              <li className="rounded-lg p-5" style={cardStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Les teintes ne se reproduisent pas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le bejmat, le zellige et les carreaux de ciment beldi sont des matériaux de cuisson artisanale. Les
                  teintes varient d&apos;une fournée à l&apos;autre, puis évoluent avec l&apos;exposition à la lumière.
                  Remplacer quelques pièces à l&apos;identique est difficile sur du zellige ancien, et parfois même sur
                  du zellige récent.
                </p>
              </li>
              <li className="rounded-lg p-5" style={cardStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Les joints sont le maillon faible</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sur le zellige, le calcaire dépose d&apos;abord un film disgracieux sur la partie émaillée. Les joints
                  se dégradent ensuite, ce qui expose les pièces à l&apos;écaillage de l&apos;émail et peut fragiliser le
                  calepinage. Les joints sont souvent négligés alors que leur rôle est central.
                </p>
              </li>
              <li className="rounded-lg p-5" style={cardStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Un chantier immobilise des surfaces</h3>
                <p className="text-gray-700 leading-relaxed">
                  Une dépose et une repose immobilisent la zone concernée. Pendant la durée du chantier, les chambres ou
                  les espaces communs touchés ne sont plus vendables. Le coût réel dépasse largement celui des travaux.
                </p>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
              Pour la plupart des établissements, la voie réaliste est donc la remise en état du support existant, puis
              sa protection, plutôt que sa dépose.{' '}
              <Link href="/notre-methode" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                Voir notre méthode
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Perimetre honnete */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Ce que nous faisons, et ce que nous ne faisons pas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg p-5" style={cardStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Notre périmètre</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous intervenons sur l&apos;état des sols et des surfaces : nettoyage en profondeur, décapage des
                  anciens traitements, traitement du salpêtre et des efflorescences, ravivage des couleurs, traitement
                  des joints, puis protection hydrofuge et oléofuge non filmogène, qui laisse le support respirer.
                </p>
              </div>
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: 'rgba(167,92,22,0.08)', border: '1px solid rgba(167,92,22,0.3)' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ce que nous ne promettons pas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nous ne sommes ni consultants en classement, ni organisme de contrôle, et nous ne promettons aucun
                  résultat de classement. Nous intervenons sur un point de la grille parmi plusieurs centaines. Tout le
                  reste relève de votre établissement et des organismes compétents.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
              Nos pages détaillées :{' '}
              <Link href="/nettoyage-bejmat-marrakech" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                nettoyage et protection du bejmat
              </Link>
              {' '}et{' '}
              <Link href="/materiaux-expertises" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                matériaux et expertises
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Reperes de calendrier */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Les repères de calendrier
            </h2>
            <ol className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
              {timeline.map((step, i) => (
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

        {/* FAQ */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Questions fréquentes sur le classement et les sols
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-lg p-5 group" style={cardStyle}>
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 list-none">{f.q}</summary>
                  <p className="text-gray-700 leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Sources
            </h2>
            <ul className="space-y-3 list-none p-0 m-0 max-w-3xl">
              <li className="rounded-lg p-5" style={cardStyle}>
                <a
                  href={ARRETE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: brand }}
                >
                  Arrêté conjoint n° 985-24 fixant les normes de classement des établissements d&apos;hébergement
                  touristique
                </a>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Daté du 24 décembre 2024, publié au Bulletin officiel n° 7407 bis du 27 mai 2025. Texte intégral sur le
                  site du ministère du Tourisme, de l&apos;Artisanat et de l&apos;Économie sociale et solidaire.
                </p>
              </li>
              <li className="rounded-lg p-5" style={cardStyle}>
                <a
                  href={MINISTERE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-4"
                  style={{ color: brand }}
                >
                  Hébergement touristique : 2 500 établissements sous visites mystères dès mai 2026
                </a>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Communication du ministère du Tourisme, de l&apos;Artisanat et de l&apos;Économie sociale et solidaire.
                </p>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-5">
              Page publiée le {PUBLISHED_LABEL}. Les informations réglementaires citées ont été vérifiées à cette date
              auprès des sources ci-dessus. La réglementation peut évoluer : pour toute démarche de classement,
              reportez-vous aux textes en vigueur et aux organismes compétents.
            </p>
          </div>
        </section>

        {/* Appel a l'action final */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto rounded-xl p-8 text-center" style={cardStyle}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: brand }}>
              Où en sont les sols de votre établissement ?
            </h2>
            <p className="text-gray-700 mb-6">
              Nous réalisons un diagnostic gratuit et sans engagement, avec un essai préalable sur une zone test.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link
                href="/contact"
                className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px]"
              >
                Demander un diagnostic gratuit
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px] border-2"
                style={{ borderColor: '#A75C16', color: '#7a3f0f' }}
              >
                Écrire sur WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-600">
              NanoProtects, Q.I. Sidi Ghanem, Marrakech. Intervention à Marrakech et dans tout le Maroc. Tél.{' '}
              <a href={`tel:${PHONE_TEL}`} style={{ color: brand }}>{PHONE_DISPLAY}</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
