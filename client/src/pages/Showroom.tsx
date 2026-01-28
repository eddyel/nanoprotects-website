'use client';

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
  isSingleImage?: boolean;
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
    beforeImage: '/images/bejmat-couloir-av-ap.webp',
    afterImage: '/images/bejmat-couloir-av-ap.webp',
    title: 'Sol en Bejmat - Riad',
    description: 'Restauration couleur & traitement hydrofuge',
    isSingleImage: true
  },
  {
    id: '2b',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-patio-av-ap.webp',
    afterImage: '/images/bejmat-patio-av-ap.webp',
    title: 'Patio en Bejmat - Riad',
    description: 'Nettoyage & traitement protecteur',
    isSingleImage: true
  },
  {
    id: '2c',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-entree-av-ap.webp',
    afterImage: '/images/bejmat-entree-av-ap.webp',
    title: 'Entrée en Bejmat - Riad',
    description: 'Nettoyage en profondeur & traitement hydrofuge',
    isSingleImage: true
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
      
      <div className="container pt-20 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Showroom : l'Excellence en Images
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez la transformation spectaculaire de nos interventions à travers notre galerie avant/après
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="masonry-grid">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="masonry-item"
                onClick={() => setLightboxImage(image)}
              >
                <div className="gallery-card group">
                  {/* Before/After Image Container */}
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    {image.isSingleImage ? (
                      /* Single Combined Image */
                      <div className="relative w-full h-full">
                        <img
                          src={image.beforeImage}
                          alt={`${image.title} - Avant et Après`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                          AVANT
                        </div>
                        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                          APRÈS
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                            Cliquer pour agrandir
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Split Before/After Layout */
                      <>
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
                      </>
                    )}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxImage.isSingleImage ? (
                /* Single Image Lightbox */
                <img
                  src={lightboxImage.beforeImage}
                  alt={`${lightboxImage.title} - Avant et Après`}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                /* Split Image Lightbox */
                <div className="grid grid-cols-2 gap-2 bg-black rounded-lg overflow-hidden">
                  <img
                    src={lightboxImage.beforeImage}
                    alt={`${lightboxImage.title} - Avant`}
                    className="w-full h-auto"
                  />
                  <img
                    src={lightboxImage.afterImage}
                    alt={`${lightboxImage.title} - Après`}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
