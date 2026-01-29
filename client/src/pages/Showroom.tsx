'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import LazyImage from '@/components/LazyImage';

// Custom hook for lazy loading images with Intersection Observer
const useLazyImage = (ref: React.RefObject<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const img = ref.current;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.onload = () => setIsLoaded(true);
            observer.unobserve(img);
          }
        }
      },
      { rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return isLoaded;
};

interface GalleryImage {
  id: string;
  category: string | string[];
  beforeImage?: string;
  afterImage?: string;
  videoMp4?: string;
  videoWebm?: string;
  videoPoster?: string;
  title: string;
  description: string;
  isSingleImage?: boolean;
  isVideo?: boolean;
  hideLabels?: boolean;
}

const categories = [
  'Tous',
  'Bejmat',
  'Pierre de Taza',
  'Marbre',
  'Carreaux Beldi',
  'Zellige',
  'Métal',
  'Sécurité Sols'
];

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-traditional-before.webp',
    afterImage: '/images/showroom/zellige-traditional-after.webp',
    title: 'Zellige Traditionnel',
    description: 'Nettoyage en profondeur & protection nano-céramique'
  },
  {
    id: '2',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-corridor-riad.webp',
    afterImage: '/images/bejmat-corridor-riad.webp',
    title: 'Sol en Bejmat - Riad',
    description: 'Restauration couleur & traitement hydrofuge',
    isSingleImage: true
  },
  {
    id: '2b',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-patio-riad.webp',
    afterImage: '/images/bejmat-patio-riad.webp',
    title: 'Patio en Bejmat - Riad',
    description: 'Nettoyage & traitement protecteur',
    isSingleImage: true
  },
  {
    id: '2c',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-entrance-riad.webp',
    afterImage: '/images/bejmat-entrance-riad.webp',
    title: 'Entrée en Bejmat - Riad',
    description: 'Nettoyage en profondeur & traitement hydrofuge',
    isSingleImage: true
  },
  {
    id: '2d',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-staircase-riad.webp',
    afterImage: '/images/bejmat-staircase-riad.webp',
    title: 'Escalier en Bejmat - Riad',
    description: 'Nettoyage & traitement Hydrofuge et Oléofuge invisible',
    isSingleImage: true
  },
  {
    id: '3',
    category: 'Marbre',
    beforeImage: '/images/marbre-table-ronde-av-ap.webp',
    afterImage: '/images/marbre-table-ronde-av-ap.webp',
    title: 'Table en Marbre - Hotel',
    description: 'Nettoyage profond, Crystallisation & traitement anti-taches',
    isSingleImage: true
  },

  {
    id: '5',
    category: 'Métal',
    beforeImage: '/images/showroom/metal-brass-before.webp',
    afterImage: '/images/showroom/metal-brass-after.webp',
    title: 'Quincaillerie en Laiton',
    description: 'Polissage & protection anti-oxydation'
  },
  {
    id: '6',
    category: 'Sécurité Sols',
    beforeImage: '/images/showroom/securite-sols-before.webp',
    afterImage: '/images/showroom/securite-sols-after.webp',
    title: 'Marbre Lobby Hôtel',
    description: 'Traitement anti-dérapant invisible'
  },
  {
    id: '7',
    category: ['Marbre', 'Zellige'],
    beforeImage: '/images/marbre-zellige-av-ap.webp',
    afterImage: '/images/marbre-zellige-av-ap.webp',
    title: 'Marbre Blanc de Carrare & Zellige Noir - Hotel',
    description: 'Nettoyage profond & Protection sublimée',
    isSingleImage: true
  },
  {
    id: '8',
    category: 'Zellige',
    beforeImage: '/images/zellige-sol-mur-riad.webp',
    afterImage: '/images/zellige-sol-mur-riad.webp',
    title: 'Sol & Mur Zellige - Riad',
    description: 'Nettoyage profond & Protection sublimée',
    isSingleImage: true
  },
  {
    id: '9',
    category: 'Zellige',
    beforeImage: '/images/zellige-fontaine-hotel.webp',
    afterImage: '/images/zellige-fontaine-hotel.webp',
    title: 'Fontaine Zellige - Hotel',
    description: 'Détartrage, Nettoyage profond & Protection sublimée',
    isSingleImage: true
  },
  {
    id: '10',
    category: 'Zellige',
    beforeImage: '/images/zellige-sol-hotel.webp',
    afterImage: '/images/zellige-sol-hotel.webp',
    title: 'Sol Zellige - Hotel',
    description: 'Détartrage, nettoyage profond & Protection sublimée',
    isSingleImage: true
  },
  {
    id: '11',
    category: 'Pierre de Taza',
    videoMp4: '/images/cabine-spa-av-ap.mp4',
    videoWebm: '/images/cabine-spa-av-ap.webm',
    videoPoster: '/images/cabine-spa-av-ap-poster.webp',
    title: 'Sol Cabine Massage Pierre de Taza - Hotel',
    description: 'Nettoyage profond & Protection sublimée',
    isVideo: true
  },
  {
    id: '12',
    category: 'Pierre de Taza',
    beforeImage: '/images/sol-pierre-taza-hotel.webp',
    afterImage: '/images/sol-pierre-taza-hotel.webp',
    title: 'Sol Pierre de Taza - Hotel',
    description: 'Nettoyage profond & Protection Invisible',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '13',
    category: 'Pierre de Taza',
    beforeImage: '/images/plage-piscine-pierre-taza.webp',
    afterImage: '/images/plage-piscine-pierre-taza.webp',
    title: 'Plage Piscine Pierre de Taza - Résidence',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true
  },
  {
    id: '14',
    category: 'Pierre de Taza',
    beforeImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    afterImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    title: 'Plage Piscine Pierre de Taza - Hotel',
    description: 'Protection Invisible',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '15',
    category: 'Pierre de Taza',
    beforeImage: '/images/sol-pierre-taza-particulier.jpg',
    afterImage: '/images/sol-pierre-taza-particulier.jpg',
    title: 'Sol Pierre de Taza - Particulier',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '16',
    category: 'Marbre',
    beforeImage: '/images/console-marbre-hotel.png',
    afterImage: '/images/console-marbre-hotel.png',
    title: 'Console Marbre - Hotel',
    description: 'Nettoyage profond, Crystallisation & Protection Sublimé',
    isSingleImage: true
  },
  {
    id: '17',
    category: 'Carreaux Beldi',
    beforeImage: '/images/plage-piscine-carreaux-beldi-marbre.webp',
    afterImage: '/images/plage-piscine-carreaux-beldi-marbre.webp',
    title: 'Plage Piscine Carreaux Beldi, Marbre - Hotel',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '18',
    category: 'Carreaux Beldi',
    beforeImage: '/images/sol-cuisine-carreaux-beldi-riad.png',
    afterImage: '/images/sol-cuisine-carreaux-beldi-riad.png',
    title: 'Sol Cuisine Carreaux Beldi - Riad',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true
  },
  {
    id: '19',
    category: ['Carreaux Beldi', 'Zellige'],
    beforeImage: '/images/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    afterImage: '/images/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    title: 'Sol Restaurant Carreaux Beldi, Zellige - Riad',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true
  },
  {
    id: '20',
    category: 'Métal',
    beforeImage: '/images/transat-alu-protected.png',
    afterImage: '/images/transat-alu-protected.png',
    title: 'Transat Aluminium - Particulier',
    description: 'Nettoyage profond & Protection Sublimé',
    isSingleImage: true,
    hideLabels: true
  },
];

export default function Showroom() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const filteredImages = activeFilter === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => {
        const categories = Array.isArray(img.category) ? img.category : [img.category];
        return categories.includes(activeFilter);
      });

  const handleLightboxOpen = (image: GalleryImage) => {
    setLightboxImage(image);
    setVideoEnded(false);
  };

  const handlePlayAgain = () => {
    if (videoRef) {
      videoRef.currentTime = 0;
      videoRef.play();
      setVideoEnded(false);
    }
  };

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
                onClick={() => handleLightboxOpen(image)}
              >
                <div className="gallery-card group">
                  {/* Before/After Image Container */}
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    {image.isVideo ? (
                      <div className="relative w-full h-full bg-black">
                        <LazyImage
                          src={image.videoPoster || ''}
                          alt={`${image.title} - Poster`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                          AVANT
                        </div>
                        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                          APRES
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">Cliquer pour agrandir</span>
                        </div>
                      </div>
                    ) : image.isSingleImage ? (
                      /* Single Combined Image */
                      <div className="relative w-full h-full">
                        <LazyImage
                          src={image.beforeImage || ''}
                          alt={`${image.title} - Avant et Après`}
                          className="w-full h-full object-cover"
                        />
                        {!image.hideLabels && (
                          <>
                            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                              AVANT
                            </div>
                            <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                              APRES
                            </div>
                          </>
                        )}
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
                            <LazyImage
                              src={image.beforeImage || ''}
                              alt={`${image.title} - Avant`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                              AVANT
                            </div>
                          </div>
                          {/* After */}
                          <div className="relative">
                            <LazyImage
                              src={image.afterImage || ''}
                              alt={`${image.title} - Après`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                              APRES
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
              {lightboxImage.isVideo ? (
                /* Video Lightbox */
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <div className="relative">
                    <video
                      ref={setVideoRef}
                      src={lightboxImage.videoMp4}
                      className="w-full h-auto"
                      controls
                      preload="metadata"
                      poster={lightboxImage.videoPoster}
                      autoPlay
                      onEnded={() => setVideoEnded(true)}
                    />
                    {/* AVANT/APRES Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-4 py-2 rounded">
                      AVANT
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                      APRES
                    </div>
                    {/* Play Again Button */}
                    {videoEnded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                        <button
                          onClick={handlePlayAgain}
                          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                          Play again
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : lightboxImage.isSingleImage ? (
                /* Single Image Lightbox */
                <div className="relative">
                  <img
                    src={lightboxImage.beforeImage}
                    alt={`${lightboxImage.title} - Avant et Après`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-4 py-2 rounded">
                    AVANT
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                    APRES
                  </div>
                </div>
              ) : (
                /* Split Image Lightbox */
                <div className="grid grid-cols-2 gap-2 bg-black rounded-lg overflow-hidden relative">
                  <div className="relative">
                    <img
                      src={lightboxImage.beforeImage}
                      alt={`${lightboxImage.title} - Avant`}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-4 py-2 rounded">
                      AVANT
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={lightboxImage.afterImage}
                      alt={`${lightboxImage.title} - Après`}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                      APRES
                    </div>
                  </div>
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
