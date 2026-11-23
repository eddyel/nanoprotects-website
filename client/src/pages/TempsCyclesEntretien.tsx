import { Link } from 'wouter';
import Navigation from '@/components/Navigation';

// Page dediee aux reperes de temps, cycles et frequences d'entretien des sols en hotellerie.
// Page en francais uniquement. Titre et description geres par SEOUpdater (App.tsx)
// et par scripts/prerender.mjs, qui doivent rester identiques.

const PAGE_URL = 'https://nanoprotects.com/temps-cycles-entretien-sols-hotellerie/';
const SITE_URL = 'https://nanoprotects.com/';
const PHONE_DISPLAY = '+212 675 971 971';
const PHONE_TEL = '+212675971971';
const WHATSAPP_URL = 'https://wa.me/212675971971';

const SRC_ISSA = 'https://www.kimpaper.com/wp-content/resources/Kim-Paper-ISSA-Cleaning-Times.pdf';
const SRC_ISSA_ORG = 'https://www.issa.com/cleaning-times/';
const SRC_SITEMINDER = 'https://www.siteminder.com/r/hotel-room-cleaning/';
const SRC_DEEPCLEAN = 'https://hospitalitylawyer.com/wp-content/uploads/2019/01/Deep-cleaning.pdf';

const PUBLISHED = '2026-11-21';
const PUBLISHED_LABEL = '21 novembre 2026';

const H1_FR = 'Temps, cycles et fréquences d’entretien des sols en hôtellerie';
const DESCRIPTION = "Cadences de référence du secteur en mètres et minutes : temps de nettoyage au 100 m², temps par chambre, cycles et fréquences en hôtellerie.";

type Row = { label: string; cadence: string; temps: string };
type Item = { title: string; text: string };
type Faq = { q: string; a: string };

const facts: string[] = [
  '18 minutes pour 100 m², la cadence de référence',
  '20 à 45 minutes par chambre selon le type d’intervention',
  '2 à 4 remises en état par chambre et par an',
];

const solRows: Row[] = [
  {
    label: 'Lavage humide, tête de serpillière de 340 g, seau et presse simples',
    cadence: '332 m² par heure',
    temps: '18 min',
  },
  {
    label: 'Zones encombrées : petites pièces, mobilier, obstacles',
    cadence: '232 à 279 m² par heure',
    temps: '22 à 26 min',
  },
  {
    label: 'Grandes surfaces dégagées : couloirs, halls, balai plat',
    cadence: '372 à 511 m² par heure',
    temps: '12 à 16 min',
  },
];

const eauRows: Row[] = [
  { label: 'Lavage humide, serpillière essorée', cadence: '9,83 m² par litre', temps: 'env. 10 L' },
  { label: 'Lavage à grande eau', cadence: '4,91 m² par litre', temps: 'env. 20 L' },
];

const chambreRows: Row[] = [
  { label: 'Recouche, client en séjour', cadence: 'par chambre', temps: '20 à 30 min' },
  { label: 'Départ, remise à blanc', cadence: 'par chambre', temps: '30 à 45 min' },
  { label: 'Chambres traitées par agent', cadence: 'vacation de 8 heures', temps: '12 à 18' },
];

const cycles: Item[] = [
  {
    title: 'Cycle quotidien',
    text: "La recouche et le départ en chambre, le passage dans les espaces communs plusieurs fois par jour. C’est le cycle que les cadences de référence décrivent, et le seul que la plupart des établissements chiffrent réellement.",
  },
  {
    title: 'Cycle périodique',
    text: "Le nettoyage en profondeur. Les publications du secteur situent la fréquence à deux à quatre fois par an et par chambre selon le taux d’occupation, et à tous les trois à six mois pour les sols durs des espaces communs.",
  },
  {
    title: 'Cycle de remise en état',
    text: "Le décapage du support, le traitement des pathologies et la protection. Dans les cahiers des charges classiques, il revient une fois par an ou tous les deux ans. C’est le cycle le plus lourd, le plus coûteux, et le plus facile à repousser jusqu’à ce qu’il devienne un chantier.",
  },
];

const methode: Item[] = [
  { title: 'Mesurer la surface', text: 'Longueur par largeur, au mètre ruban, zone par zone. Un repère au m² ne vaut rien sans un m² exact.' },
  { title: 'Chronométrer le passage', text: 'Du début à la fin du lavage, hors pauses, avec le même agent et le même matériel.' },
  { title: 'Compter les litres', text: 'Noter le volume du seau une fois pour toutes, puis compter les remplissages. Un seau n’est pas une unité, un litre en est une.' },
  { title: 'Mesurer le séchage', text: 'De la fin du passage jusqu’au moment où la zone est sèche et de nouveau circulable. C’est la durée d’indisponibilité réelle.' },
  { title: 'Noter les conditions', text: 'Température et ventilation. Sans elles, deux mesures de séchage ne sont pas comparables.' },
];

const faqs: Faq[] = [
  {
    q: 'Combien de temps faut-il pour nettoyer 100 m² de sol ?',
    a: "La cadence de référence la plus citée du secteur est le lavage humide avec une tête de serpillière de 340 g, seau et presse simples : 92,9 m² en 16,8 minutes, soit 332 m² par heure, soit environ 18 minutes pour 100 m². Les chiffrages professionnels retiennent 22 à 26 minutes pour 100 m² en zone encombrée et 12 à 16 minutes pour 100 m² sur grande surface dégagée au balai plat.",
  },
  {
    q: 'D’où viennent ces cadences ?',
    a: "Elles sont publiées par ISSA, l’association mondiale de l’industrie du nettoyage, dans le recueil connu sous le nom de ISSA Cleaning Times. Elles sont issues d’études de temps et mouvements et servent de base aux chiffrages de contrats de propreté dans le monde entier. Elles sont exprimées en pieds carrés par heure : 1 000 pieds carrés valent 92,9 m².",
  },
  {
    q: 'Combien d’eau faut-il pour nettoyer 100 m² de sol ?',
    a: "Les conversions métriques publiées avec les cadences de référence donnent 9,83 m² par litre en lavage humide avec serpillière essorée, soit environ 10 litres pour 100 m², et 4,91 m² par litre en lavage à grande eau, soit environ 20 litres pour 100 m². Ces valeurs supposent un sol où l’eau reste en surface : elles ne décrivent pas un support poreux non traité, qui absorbe l’eau pendant le passage.",
  },
  {
    q: 'Combien de temps pour nettoyer une chambre d’hôtel ?',
    a: "Les repères publiés du secteur situent la recouche entre 20 et 30 minutes et le départ entre 30 et 45 minutes, pour 12 à 18 chambres par agent et par vacation de 8 heures.",
  },
  {
    q: 'À quelle fréquence faut-il un nettoyage en profondeur ?',
    a: "Les publications du secteur situent le nettoyage en profondeur à deux à quatre fois par an et par chambre selon le taux d’occupation. En pratique, la plupart des hôtels traitent chaque jour entre 0,5 % et 1,5 % de leur parc de chambres, ce qui représente deux à trois chambres par jour pour un établissement de 300 chambres.",
  },
  {
    q: 'Pourquoi le nettoyage en profondeur coûte-t-il plus cher que son temps de main d’oeuvre ?',
    a: "Parce qu’il consiste à sortir la chambre de l’inventaire vendable pour la traiter selon des standards plus exigeants. Au coût de la main d’oeuvre s’ajoute donc une nuitée non vendue, et c’est généralement le poste le plus lourd des deux.",
  },
  {
    q: 'Ces cadences s’appliquent-elles au bejmat, au zellige ou aux carreaux de ciment ?',
    a: "Elles ne les prévoient pas. Les cadences de référence décrivent des sols qui se comportent normalement : l’eau reste en surface le temps du passage, puis le sol sèche. Un support poreux non traité absorbe l’eau pendant le passage, ce qui oblige à remouiller et à changer l’eau plus souvent, et le temps réel s’écarte du repère. Aucun barème public ne chiffre cet écart.",
  },
  {
    q: 'La protection réduit-elle le temps de nettoyage quotidien ?',
    a: "Nous observons sur nos chantiers qu’un sol traité demande environ 60 % d’eau en moins, parce que l’eau reste en surface au lieu d’être absorbée, et qu’il revient plus vite en exploitation parce qu’il sèche plus vite. C’est une observation de terrain, pas encore une mesure documentée : nous déployons un protocole de relevé pour l’établir chiffre à l’appui. L’effet principal se situe de toute façon sur les cycles périodique et de remise en état, pas sur le geste quotidien.",
  },
  {
    q: 'Comment établir un repère fiable pour mon établissement ?',
    a: `En le mesurant sur vos propres sols. Mesurer la surface, chronométrer le passage, compter les litres d’eau, mesurer le temps de séchage, noter la température et la ventilation. Cinq données, relevées deux fois dans les mêmes conditions. Nous réalisons ce relevé pendant nos interventions et nous vous laissons la fiche. Pour en parler, écrivez-nous sur WhatsApp au ${PHONE_DISPLAY}.`,
  },
];

function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function TempsCyclesEntretien() {
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
      { '@type': 'Thing', name: 'Temps de nettoyage des sols' },
      { '@type': 'Thing', name: 'Fréquences d’entretien en hôtellerie' },
      { '@type': 'Thing', name: 'Cadences de nettoyage ISSA' },
    ],
    citation: [
      { '@type': 'CreativeWork', name: 'ISSA 540 Cleaning Times, cadences de nettoyage et conversions métriques', url: SRC_ISSA },
      { '@type': 'CreativeWork', name: 'SiteMinder, guide du housekeeping hôtelier', url: SRC_SITEMINDER },
      { '@type': 'CreativeWork', name: 'Ten steps to guest-room deep cleaning', url: SRC_DEEPCLEAN },
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
      { '@type': 'ListItem', position: 2, name: 'Temps, cycles et fréquences d’entretien des sols', item: PAGE_URL },
    ],
  };

  const brand = '#A33215';
  const cardStyle = { backgroundColor: 'rgba(255,255,255,0.92)', border: '1px solid rgba(167,92,22,0.25)' };
  const accentStyle = { backgroundColor: 'rgba(167,92,22,0.08)', border: '1px solid rgba(167,92,22,0.3)' };

  // Tableau sur ordinateur, cartes empilees sur mobile : en dessous de 768 px
  // la colonne de droite, qui porte la valeur utile, sortait de l'ecran.
  const renderTable = (rows: Row[], head: [string, string, string]) => (
    <>
      <div className="hidden md:block rounded-lg overflow-hidden" style={cardStyle}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'rgba(167,92,22,0.12)' }}>
              <th className="p-4 font-semibold text-gray-900">{head[0]}</th>
              <th className="p-4 font-semibold text-gray-900 whitespace-nowrap">{head[1]}</th>
              <th className="p-4 font-semibold text-gray-900 whitespace-nowrap">{head[2]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} style={{ borderTop: '1px solid rgba(167,92,22,0.2)' }}>
                <td className="p-4 text-gray-700">{r.label}</td>
                <td className="p-4 text-gray-700 whitespace-nowrap">{r.cadence}</td>
                <td className="p-4 font-bold whitespace-nowrap" style={{ color: brand }}>{r.temps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="md:hidden space-y-3 list-none p-0 m-0" aria-hidden="true">
        {rows.map((r) => (
          <li key={r.label} className="rounded-lg p-4" style={cardStyle}>
            <p className="font-semibold text-gray-900 mb-2">{r.label}</p>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-gray-600 text-sm">{r.cadence}</span>
              <span className="font-bold text-lg whitespace-nowrap" style={{ color: brand }}>{r.temps}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

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
              Repères professionnels · Hôtellerie
            </p>
            <h1 className="font-display text-[2rem] md:text-[3.25rem] font-bold leading-tight mb-6" style={{ color: brand }}>
              {H1_FR}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-4">
              Toute activité a besoin de points de repère pour bâtir un budget et une projection. L&apos;entretien des
              sols n&apos;y échappe pas. Cette page rassemble les cadences de référence du secteur, les convertit en
              mètres et en minutes, et indique précisément ce qu&apos;elles ne couvrent pas.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mb-8">
              Ces repères ne sont pas les nôtres. Ce sont des références publiques, publiées et utilisées dans le monde
              entier, citées ici avec leurs sources. Nous les donnons comme point de départ, pas comme vérité.
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
              {facts.map((f) => (
                <li key={f} className="rounded-lg px-4 py-3 text-gray-800 font-medium" style={cardStyle}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Temps au 100 m2 */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Combien de temps pour nettoyer 100 m² de sol
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Les cadences de référence du secteur sont publiées par ISSA, l&apos;association mondiale de
              l&apos;industrie du nettoyage, dans le recueil connu sous le nom de ISSA Cleaning Times. Elles sont issues
              d&apos;études de temps et mouvements et servent de base aux chiffrages de contrats de propreté partout
              dans le monde. Elles sont exprimées en pieds carrés par heure : nous les convertissons ci-dessous.
            </p>
            {renderTable(solRows, ['Situation', 'Cadence', 'Pour 100 m²'])}
            <p className="text-sm text-gray-600 mt-4 max-w-3xl">
              Conversions : 1 000 pieds carrés valent 92,9 m², une tête de serpillière de 12 onces pèse 340 g. La
              cadence de référence d&apos;origine est de 92,9 m² en 16,8 minutes, soit 3 571 pieds carrés par heure.
              Ces valeurs supposent un agent formé, un matériel défini et des conditions normales.
            </p>
          </div>
        </section>

        {/* Eau au 100 m2 */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Combien d&apos;eau pour 100 m² de sol
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Le même recueil publie des conversions métriques directes pour la consommation de solution. Elles sont
              rarement citées, et ce sont pourtant les seules références chiffrées publiques sur la quantité d&apos;eau
              nécessaire au nettoyage d&apos;un sol.
            </p>
            {renderTable(eauRows, ['Méthode', 'Référence', 'Pour 100 m²'])}
            <p className="text-sm text-gray-600 mt-4 max-w-3xl">
              Valeurs d&apos;origine : 37,20 m² pour 3,785 litres en lavage humide, 18,60 m² pour 3,785 litres en
              lavage à grande eau. Il s&apos;agit de la solution consommée, dans des conditions normales, avec une
              serpillière essorée et un sol où l&apos;eau reste en surface.
            </p>
          </div>
        </section>

        {/* Temps chambre */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Combien de temps pour une chambre
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Les repères d&apos;exploitation publiés par SiteMinder, plateforme de référence du secteur hôtelier, sont
              les suivants.
            </p>
            {renderTable(chambreRows, ['Type d’intervention', 'Base', 'Repère'])}
            <p className="text-sm text-gray-600 mt-4 max-w-3xl">
              La même source publie un coût de nettoyage par chambre de 3 à 10 dollars américains, main d&apos;oeuvre et
              consommables compris.
            </p>
          </div>
        </section>

        {/* Les trois cycles */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Les trois cycles d&apos;entretien
            </h2>
            <ul className="grid md:grid-cols-3 gap-4 list-none p-0 m-0">
              {cycles.map((c) => (
                <li key={c.title} className="rounded-lg p-5" style={cardStyle}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{c.text}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-lg p-5 mt-6 max-w-3xl" style={accentStyle}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Le coût caché du cycle périodique</h3>
              <p className="text-gray-700 leading-relaxed">
                Le nettoyage en profondeur consiste à sortir la chambre de l&apos;inventaire vendable pour la traiter
                selon des standards plus exigeants. Au coût de la main d&apos;oeuvre s&apos;ajoute donc une nuitée non
                vendue. En pratique, la plupart des hôtels traitent chaque jour entre 0,5 % et 1,5 % de leur parc, ce
                qui représente deux à trois chambres par jour pour un établissement de 300 chambres. Ce poste ne figure
                dans aucune cadence de nettoyage, et c&apos;est pourtant le plus lourd des deux.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que les reperes ne disent pas */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Ce que ces repères ne disent pas
            </h2>
            <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
              <p>
                Toutes ces cadences décrivent un sol qui se comporte normalement : l&apos;eau reste en surface le temps
                du passage, puis le sol sèche. C&apos;est l&apos;hypothèse de départ, et elle n&apos;est jamais écrite,
                parce qu&apos;elle va de soi dans les bâtiments pour lesquels ces barèmes ont été établis.
              </p>
              <p>
                Elle ne va pas de soi au Maroc. Un bejmat, une pierre de Taza ou un carreau de ciment beldi non traité
                absorbe l&apos;eau pendant le passage. L&apos;agent remouille, change l&apos;eau plus souvent, repasse.
                Le temps réel s&apos;écarte du repère, et aucun barème public ne chiffre cet écart.
              </p>
              <p>
                Le repère d&apos;eau souffre exactement du même angle mort. Dix litres pour 100 m², c&apos;est la
                consommation d&apos;une serpillière essorée passée sur un sol qui ne boit pas. Sur un support poreux
                non traité, l&apos;agent vide son seau et le remplit à nouveau, et la consommation réelle n&apos;a plus
                de rapport avec ce chiffre.
              </p>
              <p>
                Le temps de séchage n&apos;apparaît dans aucune de ces références non plus. C&apos;est pourtant lui qui
                détermine le moment où la zone redevient circulable, donc la durée pendant laquelle un couloir, un patio
                ou une chambre n&apos;est pas exploitable.
              </p>
              <p className="font-semibold text-gray-900">
                Résultat : sur sols poreux, un budget bâti sur ces repères est faux, et personne ne sait de combien,
                parce que personne ne le mesure.
              </p>
            </div>
          </div>
        </section>

        {/* Ou agit la protection */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Où agit la protection, et où elle n&apos;agit pas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg p-5" style={cardStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ce que nous observons</h3>
                <p className="text-gray-700 leading-relaxed">
                  L&apos;imprégnation hydrofuge et oléofuge pénètre dans les pores et limite l&apos;absorption, sans
                  former de film : le support reste perméable à la vapeur d&apos;eau. Sur nos chantiers, nous observons
                  qu&apos;un sol traité demande environ 60 % d&apos;eau en moins au nettoyage, et qu&apos;il revient
                  plus vite en exploitation parce qu&apos;il sèche plus vite.
                </p>
              </div>
              <div className="rounded-lg p-5" style={accentStyle}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ce que nous ne prétendons pas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ce chiffre de 60 % est une observation de terrain, pas encore une mesure documentée. Nous déployons un
                  protocole de relevé pour l&apos;établir chiffre à l&apos;appui, établissement par établissement. Et
                  l&apos;effet principal ne se situe pas sur le geste quotidien : il se situe sur les cycles périodique
                  et de remise en état.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-5 mt-4 max-w-3xl" style={cardStyle}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Les fréquences que nous appliquons</h3>
              <p className="text-gray-700 leading-relaxed">
                Sur bejmat, le premier entretien intervient à 24 mois, puis tous les 36 mois : le support conserve des
                résidus de traitement, et l&apos;effet s&apos;en trouve renforcé. Sur marbre, la cristallisation revient
                une fois par an. Nous ne parlons jamais de sol autonettoyant : ce terme désigne une autre famille de
                produits.
              </p>
            </div>
          </div>
        </section>

        {/* Construire son propre repere */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: brand }}>
              Comment construire votre propre repère
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Un repère public sert à cadrer un budget. Il ne remplace pas la mesure sur vos propres sols. Cinq données
              suffisent, relevées deux fois dans les mêmes conditions, avec le même agent et le même matériel.
            </p>
            <ol className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
              {methode.map((m, i) => (
                <li key={m.title} className="rounded-lg p-5 flex gap-4" style={cardStyle}>
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: brand }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
              Nous réalisons ce relevé pendant nos interventions et nous vous laissons la fiche, contresignée.
              Voir aussi{' '}
              <Link href="/notre-methode" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                notre méthode
              </Link>
              {' '}et{' '}
              <Link href="/classement-hotelier-maroc-etat-des-sols" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                ce que le classement hôtelier exige de vos sols
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: brand }}>
              Questions fréquentes sur les temps et les fréquences
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
                <a href={SRC_ISSA} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                  ISSA 540 Cleaning Times, cadences de nettoyage et conversions métriques
                </a>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Ligne 329 du recueil : lavage humide, tête de 12 onces, seau et presse simples, 1 000 pieds carrés
                  en 16,80 minutes, soit 3 571 pieds carrés par heure. Le même document publie les conversions
                  métriques directes reprises plus haut. Chart reproduit et mis en ligne par un distributeur
                  professionnel. Le recueil lui-même est édité par{' '}
                  <a href={SRC_ISSA_ORG} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: brand }}>
                    ISSA
                  </a>
                  .
                </p>
              </li>
              <li className="rounded-lg p-5" style={cardStyle}>
                <a href={SRC_SITEMINDER} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                  SiteMinder, guide du housekeeping hôtelier
                </a>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Repères de temps par chambre, nombre de chambres par agent et par vacation, coût de nettoyage par
                  chambre.
                </p>
              </li>
              <li className="rounded-lg p-5" style={cardStyle}>
                <a href={SRC_DEEPCLEAN} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4" style={{ color: brand }}>
                  Ten steps to guest-room deep cleaning
                </a>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Définition du nettoyage en profondeur comme sortie de l&apos;inventaire vendable, fréquence de deux à
                  quatre fois par an et part quotidienne du parc traitée.
                </p>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-5">
              Page publiée le {PUBLISHED_LABEL}. Les repères cités ont été vérifiés à cette date auprès des sources
              ci-dessus. Ce sont des moyennes sectorielles destinées au chiffrage : elles ne remplacent pas une mesure
              réalisée sur place.
            </p>
          </div>
        </section>

        {/* Appel a l'action final */}
        <section className="py-14 px-4 md:px-8">
          <div className="max-w-5xl mx-auto rounded-xl p-8 text-center" style={cardStyle}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: brand }}>
              Quel est le vrai temps d&apos;entretien de vos sols ?
            </h2>
            <p className="text-gray-700 mb-6">
              Nous réalisons un diagnostic gratuit et sans engagement, avec un essai préalable sur une zone test.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link href="/contact" className="btn-brand inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px]">
                Demander un diagnostic gratuit
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold min-h-[44px] border-2" style={{ borderColor: '#A75C16', color: '#7a3f0f' }}>
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
