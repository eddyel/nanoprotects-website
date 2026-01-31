import { useState } from 'react';
import Navigation from '@/components/Navigation';

const categories = [
  {
    id: 'pierres',
    title: 'Pierres',
    enjeux: 'Salissures organiques, efflorescences, taches, dégradations causées par la pollution et les UV.',
    action: 'Nettoyage régénérant respectueux des matériaux & application à saturation de solutions nanotechnologiques de protection imprégnantes hydrofuge et oléofuge.',
    surfaces: 'Pierre de Taza, Marbre, Travertin, Pierres calcaire, Ardoise, Granit'
  },
  {
    id: 'maconnerie',
    title: 'Matériaux Traditionnels',
    enjeux: 'Porosité élevée, absorption eau, tâches de ciment, jaunissement et/ou écaillage d\'anciens vernis, encrassement, salissures grasses, perte de couleurs dû aux UV',
    action: 'Décapage humide sans poussière, restauration des couleurs, imperméabilisation anti-tâches respirante non filmogène, protection anti-UV',
    surfaces: 'Bejmat, Carreaux de ciment Beldi, Zellige, Dess'
  },
  {
    id: 'bois',
    title: 'Bois Composite',
    enjeux: 'Grisaillement, tâches organiques, décoloration UV, encrassement, écaillage film plastique ou vernis',
    action: 'Nettoyage doux, restauration de la couleur origine, protection nanotechnologique imprégnante anti-UV et anti-tâches',
    surfaces: 'Terrasses, Plage de piscine, Mobilier , Bardages'
  },
  {
    id: 'textiles',
    title: 'Textiles',
    enjeux: 'Tâches organiques, odeurs, décoloration',
    action: 'Nettoyage en profondeur par Injection / Extraction sous pression, traitement anti-tâches et anti-salissures, protection textile respirante',
    surfaces: 'Tapis, Moquettes, Rideaux, Tentures murales, Coussins'
  },
  {
    id: 'securite',
    title: 'Traitement Anti-Dérapant',
    icon: 'slipping',
    enjeux: 'Glissance excessive sur sols mouillés (piscines, douches, cuisines), risque de chute.',
    action: 'Application d\'un traitement non corrosif durable dérivé du Silicium en phase aqueuse anti-dérapant NON ACIDE, qui augmente le coefficient de friction sans altérer l\'esthétique',
    surfaces: 'Marbre crystallisé, Carrelage vittrifié, Céramiques'
  },
  {
    id: 'metaux',
    title: 'Traitement Minéralisant',
    subtitle: 'Matériaux poreux friables',
    enjeux: 'Érosion, effritement, poussière',
    action: 'Traitement pénétrant de minéralisation (durcissement et consolidation interne) avec protection hydrofuge non-filmogène, effet anti-poussière durable',
    surfaces: 'Briquettes en terre cuite, Stucs en plâtre, Pisé, Enduits, Mortiers, Bétons, Façades et Sols anciens'
  }
];

export default function MateriauxExpertises() {
  const [activeTab, setActiveTab] = useState('pierres');
  const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left mb-16" style={{ color: '#A33215' }}>
            Matiériaux et Expertises
          </h1>
          
          {/* Sticky Tab Navigation */}
          <div className="sticky top-20 z-30 backdrop-blur-sm -mx-4 px-4 mb-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottomColor: '#A75C16', borderBottomWidth: '1px' }}>
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeTab === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={activeTab === category.id ? { backgroundColor: '#A33215' } : {}}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          {activeCategory && (
            <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
                <div className="mb-12">
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-display text-[2rem] font-bold" style={{ color: '#A33215' }}>
                      {activeCategory.title}
                    </h2>
                    {activeCategory.subtitle && (
                      <span className="text-sm text-gray-700">({activeCategory.subtitle})</span>
                    )}
                  </div>
                  {activeCategory.icon === 'slipping' && (
                    <img src="/images/icon-slipping.png" alt="Slipping hazard" className="w-24 h-24" style={{ marginTop: '-8px' }} />
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Enjeux</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {activeCategory.enjeux}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nos actions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {activeCategory.action}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Surfaces concernées</h3>
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
