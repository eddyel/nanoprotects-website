import { useState } from 'react';
import Navigation from '@/components/Navigation';

const categories = [
  {
    id: 'pierres',
    title: 'Pierres et Patrimoine',
    enjeux: 'Salissures organiques, efflorescences, taches, degradation par UV et pollution.',
    action: 'Nettoyage doux sans pression excessive, traitement anti-mousse ecologique, application de protection hydrofuge et oleofuge nano-ceramique.',
    surfaces: 'Pierre de Taza, marbre, travertin, pierre calcaire, ardoise, granit'
  },
  {
    id: 'maconnerie',
    title: 'Maconnerie',
    enjeux: 'Porosite elevee, absorption eau, taches de ciment, salissures grasses.',
    action: 'Decapage chimique selectif, nettoyage haute pression controlee, impermeabilisation respirante.',
    surfaces: 'Bejmat (terre cuite), carreaux de ciment beldi, zellige traditionnel, briques apparentes'
  },
  {
    id: 'bois',
    title: 'Bois Composite',
    enjeux: 'Grisaillement, taches organiques, decoloration UV, accumulation de poussiere.',
    action: 'Nettoyage doux, restauration de la couleur origine, protection UV et anti-taches.',
    surfaces: 'Terrasses en bois composite, mobilier exterieur, bardages'
  },
  {
    id: 'securite',
    title: 'Securite des Sols',
    enjeux: 'Glissance excessive sur sols mouilles (piscines, douches, cuisines), risque de chute.',
    action: 'Application de traitement anti-derapant invisible qui augmente le coefficient de friction sans alterer esthetique.',
    surfaces: 'Marbre poli, carrelage vitrifie, pierre naturelle, zellige'
  },
  {
    id: 'textiles',
    title: 'Textiles',
    enjeux: 'Taches organiques, odeurs, usure prematuree, decoloration.',
    action: 'Nettoyage en profondeur, traitement anti-taches et anti-salissures, protection textile respirante.',
    surfaces: 'Tapis, moquettes, rideaux, tentures murales, coussins'
  },
  {
    id: 'metaux',
    title: 'Metaux et Verre',
    enjeux: 'Oxydation, corrosion, traces de calcaire, empreintes digitales.',
    action: 'Polissage professionnel, traitement anti-oxydation, revetement hydrophobe pour faciliter entretien.',
    surfaces: 'Laiton, cuivre, inox, aluminium, vitres, miroirs, parois de douche'
  }
];

export default function MateriauxExpertises() {
  const [activeTab, setActiveTab] = useState('pierres');
  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left text-secondary mb-16">
            Materiaux et Expertises
          </h1>
          
          {/* Sticky Tab Navigation */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 -mx-4 px-4 mb-12">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeTab === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {activeCategory && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
              <h2 className="font-display text-[2rem] font-bold text-secondary">
                {activeCategory.title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Enjeux</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {activeCategory.enjeux}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre action</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {activeCategory.action}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Surfaces concernees</h3>
                  <p className="text-gray-600 italic">
                    {activeCategory.surfaces}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
