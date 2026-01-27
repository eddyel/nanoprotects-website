import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface GalleryImage {
  id: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const categories = [
  'Tous',
  'Bejmat',
  'Pierre de Taza',
  'Marbre',
  'Zellige',
  'Métal',
  'Sécurité Sols'
];

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-traditional-before.jpg',
    afterImage: '/images/showroom/zellige-traditional-after.jpg',
    title: 'Zellige Traditionnel',
    description: 'Nettoyage en profondeur & protection nano-céramique'
  },
  {
    id: '2',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-floor-before.jpg',
    afterImage: '/images/showroom/bejmat-floor-after.jpg',
    title: 'Sol en Bejmat - Riad',
    description: 'Restauration couleur & traitement hydrofuge'
  },
  {
    id: '3',
    category: 'Marbre',
    beforeImage: '/images/showroom/marble-white-before.jpg',
    afterImage: '/images/showroom/marble-white-after.jpg',
    title: 'Marbre Blanc de Carrare',
    description: 'Élimination taches & protection anti-taches'
  },
  {
    id: '4',
    category: 'Pierre de Taza',
    beforeImage: '/images/showroom/pierre-taza-before.jpg',
    afterImage: '/images/showroom/pierre-taza-after.jpg',
    title: 'Pierre de Taza - Façade',
    description: 'Démoussage & imperméabilisation'
  },
  {
    id: '5',
    category: 'Métal',
    beforeImage: '/images/showroom/metal-brass-before.jpg',
    afterImage: '/images/showroom/metal-brass-after.jpg',
    title: 'Quincaillerie en Laiton',
    description: 'Polissage & protection anti-oxydation'
  },
  {
    id: '6',
    category: 'Sécurité Sols',
    beforeImage: '/images/showroom/securite-sols-before.jpg',
    afterImage: '/images/showroom/securite-sols-after.jpg',
    title: 'Marbre Lobby Hôtel',
    description: 'Traitement anti-dérapant invisible'
  },
];

export default function Showroom() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeFilter === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-right text-secondary mb-4">
            Showroom : l'Excellence en Images
          </h1>
          <p className="text-center text-gray-600 text-[1rem] max-w-2xl mx-auto">
            Découvrez la transformation spectaculaire de nos interventions à travers notre galerie avant/après
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container">
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="masonry-item"
                  onClick={() => setLightboxImage(image)}
                >
                  <div className="gallery-card group">
                    {/* Before/After Split Image */}
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <div className="grid grid-cols-2 h-full">
                        {/* Before */}
                        <div className="relative">
                          <img
                            src={image.beforeImage}
                            alt={`${image.title} - Avant`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                            AVANT
                          </div>
                        </div>
                        {/* After */}
                        <div className="relative">
                          <img
                            src={image.afterImage}
                            alt={`${image.title} - Après`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                            APRÈS
                          </div>
                        </div>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          Cliquer pour agrandir
                        </span>
                      </div>
                    </div>
                    {/* Caption */}
                    <div className="p-4">
                      <h3 className="font-semibold text-secondary text-[1rem] mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={lightboxImage.beforeImage}
                    alt={`${lightboxImage.title} - Avant`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-4 py-2 rounded">
                    AVANT
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={lightboxImage.afterImage}
                    alt={`${lightboxImage.title} - Après`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                    APRÈS
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {lightboxImage.title}
                </h3>
                <p className="text-gray-300">
                  {lightboxImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
