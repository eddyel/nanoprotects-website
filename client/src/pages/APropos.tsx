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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-5xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-center text-secondary mb-6 leading-tight">
            Nanotechnologies au service de l'hospitalité d'exception
          </h1>
        </div>
      </section>

      {/* Three Sections */}
      <section className="py-20">
        <div className="container max-w-4xl space-y-20">
          {/* Section 1: Notre Raison d'Être */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Raison d'Être
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Chaque surface raconte une histoire. Chaque matériau porte l'âme de l'artisan qui l'a créé. Préserver cette beauté, c'est honorer un héritage et garantir que vos espaces continuent d'inspirer l'émerveillement pour les générations à venir.
              </p>
              <p>
                Chez <strong>NanoProtects</strong>, nous sommes bien plus qu'un prestataire de nettoyage. Nous sommes les gardiens de votre patrimoine. Animés par une quête de perfection si aboutie qu'elle en devient invisible, nous œuvrons pour que la beauté des lieux et la qualité de l'accueil défient le temps.
              </p>
            </div>
          </div>

          {/* Section 2: Notre Méthode */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Méthode
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Nous développons et déployons des processus d'intervention à la fois ultra-efficients et parfaitement discrets, conçus pour s'insérer sans perturbation dans l'exploitation de nos clients.
              </p>
              <p>
                Notre engagement repose sur un <strong>dialogue systématique</strong>, une <strong>exécution agile et fiable</strong>, et une <strong>discrétion protectrice</strong>, pour préserver et sublimer durablement les matériaux.
              </p>
            </div>
          </div>

          {/* Section 3: Notre Expertise */}
          <div className="space-y-6">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-secondary mb-6">
              Notre Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Nous alliions la culture du soin méticuleux et l'intention authentique à une recherche permanente de solutions nanotechnologiques de pointe.
              </p>
              <p>
                Notre expertise repose sur deux piliers complémentaires qui forment un écosystème de protection totale pour vos surfaces d'exception :
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20 bg-gray-50">
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
          <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-center text-secondary mb-12">
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
