import Navigation from '@/components/Navigation';
import { Droplet, Shield, Sparkles, Building2 } from 'lucide-react';

export default function APropos() {
  const references = [
    'Palais Ronsard',
    'Palais Selman',
    'M Avenue',
    'Rotana Palmeraie',
    'Riad Villa Nomade',
    'Riad Al Dall',
    'Ayaso'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container max-w-5xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-6 leading-tight" style={{ color: '#A33215' }}>
            Nanotechnologies au service de l'excellence
          </h1>
        </div>
      </section>

      {/* Three Sections */}
      <section className="py-10">
        <div className="container max-w-4xl space-y-20">
          {/* Section 1: Notre Raison d'Être */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Raison d'Être
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Chaque surface raconte une histoire. Chaque matériau porte l'âme de l'artisan qui l'a créé. Préserver cette beauté, c'est honorer un héritage et garantir que vos espaces continuent d'inspirer l'émerveillement.
              </p>
              <p>
                Depuis 2019 à Marrakech, Nanoprotects est né d'une conviction simple : dans le domaine de l'hospitalité et de la restauration de luxe, la beauté des lieux et la perfection des matériaux sont des piliers invisibles de l'expérience client. Nous sommes bien plus qu'un prestataire de nettoyage ; nous sommes les gardiens de votre patrimoine matériel. Animés par une quête de perfection si aboutie qu'elle en devient invisible, notre mission est de préserver et sublimer ce patrimoine, afin que vos équipes puissent se consacrer pleinement à l'art de l'accueil, libérées des contraintes de l'usure et du temps.
              </p>
            </div>
          </div>

          {/* Section 2: Notre Méthode */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Méthode : Une approche précise et discrète en 3 étapes
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Nous développons et déployons des processus d'intervention à la fois ultra-efficients et parfaitement discrets, conçus pour s'insérer sans perturbation dans l'exploitation de nos clients.
              </p>
              <p>
                <strong>Diagnostic personnalisé :</strong> Analyse complète de l'état des surfaces, de leur usage et des contraintes environnementales pour une solution sur mesure.
              </p>
              <p>
                <strong>Nettoyage régénérant :</strong> Élimination en profondeur des impuretés et des altérations sans agresser la matière, restaurant ainsi son éclat d'origine et préparant une surface parfaitement réceptive.
              </p>
              <p>
                <strong>Protection nanotechnologique :</strong> Application d'un traitement d'imprégnation invisible qui crée une barrière intégrée, hydrofuge et oléofuge, protégeant durablement (3 à 5 ans) contre l'eau, les taches, les UV et les abrasions.
              </p>
              <p>
                Notre engagement repose sur un <strong>dialogue systématique</strong>, une <strong>exécution agile et fiable</strong>, et une <strong>discrétion absolue</strong> pour préserver votre image de marque.
              </p>
            </div>
          </div>

          {/* Section 3: Notre Expertise */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Expertise : L'innovation au service de la durabilité
            </h2>
            <div className="font-body text-base md:text-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Nous combinons une culture du soin méticuleux à une recherche permanente de solutions nanotechnologiques de pointe. Notre expertise repose sur un écosystème de protection durable pour vos surfaces d'exception.
              </p>
              <p className="font-semibold text-secondary mt-6">Nos engagements concrets :</p>
              <ul className="space-y-3 ml-4">
                <li>✅ <strong>Protection longue durée :</strong> Une barrière efficace contre l'usure, l'humidité et les agressions quotidiennes.</li>
                <li>✅ <strong>Résultats visibles et durables :</strong> L'éclat restauré est préservé dans le temps, avec un entretien quotidien radicalement simplifié.</li>
                <li>✅ <strong>Solutions respectueuses :</strong> Protocoles scientifiques utilisant des agents écologiques, dans le respect absolu des matériaux nobles et de l'environnement.</li>
                <li>✅ <strong>Intervention sur mesure et expertise :</strong> Une approche personnalisée pour chaque projet, portée par des équipes hautement qualifiées.</li>
              </ul>
              <p className="mt-6">
                <strong>Résultat :</strong> Des surfaces non seulement protégées, mais activement sublimées. Nous transformons l'entretien en un investissement stratégique qui préserve la valeur, réduit les coûts de maintenance à long terme et vous libère pour l'essentiel : créer des expériences mémorables.
              </p>
              <p className="italic mt-4">
                Chez Nanoprotects, nous ne faisons pas qu'entretenir ; nous garantissons que l'élégance de vos lieux défie le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-[1.75rem] font-bold text-secondary">
                  Nettoyage Haute Technologie
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Diagnostic précis, nettoyage en profondeur de la surface, restauration de l'éclat d'origine et élimination des salissures tenaces grâce à des protocoles scientifiques et des agents écologiques.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-[1.75rem] font-bold text-secondary">
                  Traitement de Protection
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Application de revêtements nanotechnologiques invisibles (Nano-SiO₂) qui forment une barrière imperméable au niveau moléculaire, protégeant contre l'eau, l'huile et les taches pour 3 à 5 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prestigious References */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-left text-secondary mb-12">
            Ils nous font confiance
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
  );
}
