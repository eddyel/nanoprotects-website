'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import LazyImage from '@/components/LazyImage';
import { useLanguage } from '@/contexts/LanguageContext';

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
  descriptionKey: string;
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
  'Minéralisation'
];

const galleryImages: GalleryImage[] = [

  {
    id: '2',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-corridor-riad.webp',
    afterImage: '/images/bejmat-corridor-riad.webp',
    title: 'Sol en Bejmat - Riad',
    descriptionKey: 'desc1',
    isSingleImage: true
  },
  {
    id: '2b',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-patio-riad.webp',
    afterImage: '/images/bejmat-patio-riad.webp',
    title: 'Patio en Bejmat - Riad',
    descriptionKey: 'desc2',
    isSingleImage: true
  },
  {
    id: '2c',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-entrance-riad.webp',
    afterImage: '/images/bejmat-entrance-riad.webp',
    title: 'Entrée en Bejmat - Riad',
    descriptionKey: 'desc3',
    isSingleImage: true
  },
  {
    id: '2d',
    category: 'Bejmat',
    beforeImage: '/images/bejmat-staircase-riad.webp',
    afterImage: '/images/bejmat-staircase-riad.webp',
    title: 'Escalier en Bejmat - Riad',
    descriptionKey: 'desc4',
    isSingleImage: true
  },
  {
    id: '3',
    category: 'Marbre',
    beforeImage: '/images/marbre-table-ronde-av-ap.webp',
    afterImage: '/images/marbre-table-ronde-av-ap.webp',
    title: 'Table en Marbre - Hotel',
    descriptionKey: 'desc5',
    isSingleImage: true
  },



  {
    id: '7',
    category: ['Marbre', 'Zellige'],
    beforeImage: '/images/marbre-zellige-av-ap.webp',
    afterImage: '/images/marbre-zellige-av-ap.webp',
    title: 'Marbre Blanc de Carrare & Zellige Noir - Hotel',
    descriptionKey: 'desc6',
    isSingleImage: true
  },
  {
    id: '8',
    category: 'Zellige',
    beforeImage: '/images/zellige-sol-mur-riad.webp',
    afterImage: '/images/zellige-sol-mur-riad.webp',
    title: 'Sol & Mur Zellige - Riad',
    descriptionKey: 'desc6',
    isSingleImage: true
  },
  {
    id: '9',
    category: 'Zellige',
    beforeImage: '/images/zellige-fontaine-hotel.webp',
    afterImage: '/images/zellige-fontaine-hotel.webp',
    title: 'Fontaine Zellige - Hotel',
    descriptionKey: 'desc8',
    isSingleImage: true
  },
  {
    id: '10',
    category: 'Zellige',
    beforeImage: '/images/zellige-sol-hotel.webp',
    afterImage: '/images/zellige-sol-hotel.webp',
    title: 'Sol Zellige - Hotel',
    descriptionKey: 'desc9',
    isSingleImage: true
  },
  {
    id: '11',
    category: 'Pierre de Taza',
    videoMp4: '/images/cabine-spa-av-ap.mp4',
    videoWebm: '/images/cabine-spa-av-ap.webm',
    videoPoster: '/images/cabine-spa-av-ap-poster.webp',
    title: 'Sol Cabine Massage Pierre de Taza - Hotel',
    descriptionKey: 'desc6',
    isVideo: true
  },
  {
    id: '12',
    category: 'Pierre de Taza',
    beforeImage: '/images/sol-pierre-taza-hotel.webp',
    afterImage: '/images/sol-pierre-taza-hotel.webp',
    title: 'Sol Pierre de Taza - Hotel',
    descriptionKey: 'desc11',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '13',
    category: 'Pierre de Taza',
    beforeImage: '/images/plage-piscine-pierre-taza.webp',
    afterImage: '/images/plage-piscine-pierre-taza.webp',
    title: 'Plage Piscine Pierre de Taza - Résidence',
    descriptionKey: 'desc12',
    isSingleImage: true
  },
  {
    id: '14',
    category: 'Pierre de Taza',
    beforeImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    afterImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    title: 'Plage Piscine Pierre de Taza - Hotel',
    descriptionKey: 'desc13',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '15',
    category: 'Pierre de Taza',
    beforeImage: '/images/sol-pierre-taza-particulier.jpg',
    afterImage: '/images/sol-pierre-taza-particulier.jpg',
    title: 'Sol Pierre de Taza - Particulier',
    descriptionKey: 'desc12',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '16',
    category: 'Marbre',
    beforeImage: '/images/console-marbre-hotel.png',
    afterImage: '/images/console-marbre-hotel.png',
    title: 'Console Marbre - Hotel',
    descriptionKey: 'desc15',
    isSingleImage: true
  },
  {
    id: '17',
    category: 'Carreaux Beldi',
    beforeImage: '/images/plage-piscine-carreaux-beldi-marbre.webp',
    afterImage: '/images/plage-piscine-carreaux-beldi-marbre.webp',
    title: 'Plage Piscine Carreaux Beldi, Marbre - Hotel',
    descriptionKey: 'desc12',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '18',
    category: 'Carreaux Beldi',
    beforeImage: '/images/sol-cuisine-carreaux-beldi-riad.png',
    afterImage: '/images/sol-cuisine-carreaux-beldi-riad.png',
    title: 'Sol Cuisine Carreaux Beldi - Riad',
    descriptionKey: 'desc12',
    isSingleImage: true
  },
  {
    id: '19',
    category: ['Carreaux Beldi', 'Zellige'],
    beforeImage: '/images/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    afterImage: '/images/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    title: 'Sol Restaurant Carreaux Beldi, Zellige - Riad',
    descriptionKey: 'desc12',
    isSingleImage: true
  },
  {
    id: '20',
    category: 'Métal',
    beforeImage: '/images/transat-alu-protected.png',
    afterImage: '/images/transat-alu-protected.png',
    title: 'Transat Aluminium - Particulier',
    descriptionKey: 'desc12',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '21',
    category: 'Minéralisation',
    videoMp4: '/images/mur-briquettes.mpeg',
    videoPoster: '/images/mur-briquettes-poster.webp',
    title: 'Mur Briquettes - Hotel',
    descriptionKey: 'desc20',
    isVideo: true,
    hideLabels: true
  },
  {
    id: '22',
    category: 'Minéralisation',
    videoMp4: '/images/mur-enduit.mp4',
    videoPoster: '/images/mur-enduit-poster.webp',
    title: 'Mur Enduit - Particulier',
    descriptionKey: 'desc20',
    isVideo: true,
    hideLabels: true
  },
  {
    id: '23',
    category: 'Minéralisation',
    videoMp4: '/images/mur-pise.mp4',
    videoPoster: '/images/mur-pise-poster.webp',
    title: 'Mur en Pisé - Hotel',
    descriptionKey: 'desc20',
    isVideo: true,
    hideLabels: true
  },
];

export default function Showroom() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
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
    setLightboxImageIndex(filteredImages.indexOf(image));
    setVideoEnded(false);
  };

  const handlePreviousImage = () => {
    if (lightboxImageIndex > 0) {
      setLightboxImage(filteredImages[lightboxImageIndex - 1]);
      setLightboxImageIndex(lightboxImageIndex - 1);
      setVideoEnded(false);
    }
  };

  const handleNextImage = () => {
    if (lightboxImageIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[lightboxImageIndex + 1]);
      setLightboxImageIndex(lightboxImageIndex + 1);
      setVideoEnded(false);
    }
  };

  const handlePlayAgain = () => {
    if (videoRef) {
      videoRef.currentTime = 0;
      videoRef.play();
      setVideoEnded(false);
    }
  };

  const isFirstImage = lightboxImageIndex === 0;
  const isLastImage = lightboxImageIndex === filteredImages.length - 1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      <Navigation />
      
      <div className="container pt-20 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold mb-4" style={{ color: '#A33215' }}>
            {t.showroom.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            {t.showroom.subtitle}
          </p>
          
          {/* Certification Badges */}
          <div className="flex justify-center items-center gap-16 mb-4">
            <img src="/images/certified-safety.png" alt="Certified Safety" className="h-24 md:h-28 object-contain" />
            <img src="/images/sustainable-solution.png" alt="Sustainable Solution" className="h-24 md:h-28 object-contain" />
            <img src="/images/long-lasting-results.png" alt="Long-Lasting Results" className="h-24 md:h-28 object-contain" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const translatedCategory = category === 'Tous' ? t.showroom.filterAll
              : category === 'Bejmat' ? t.showroom.filterBejmat
              : category === 'Pierre de Taza' ? t.showroom.filterPierreTaza
              : category === 'Marbre' ? t.showroom.filterMarble
              : category === 'Carreaux Beldi' ? t.showroom.filterCarreauxBeldi
              : category === 'Zellige' ? t.showroom.filterZellige
              : category === 'Métal' ? t.showroom.filterMetal
              : category === 'Minéralisation' ? t.showroom.filterMineralization
              : category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {translatedCategory}
              </button>
            );
          })}
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
                        {!image.hideLabels && (
                          <>
                            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded">
                              {t.showroom.labelBefore}
                            </div>
                            <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                              {t.showroom.labelAfter}
                            </div>
                          </>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">{t.showroom.clickToEnlarge}</span>
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
                              {t.showroom.labelBefore}
                            </div>
                            <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                              {t.showroom.labelAfter}
                            </div>
                          </>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                            {t.showroom.clickToEnlarge}
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
                              {t.showroom.labelBefore}
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
                              {t.showroom.labelAfter}
                            </div>
                          </div>
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                            {t.showroom.clickToEnlarge}
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
                      {t.showroom[image.descriptionKey as keyof typeof t.showroom] || image.descriptionKey}
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button
                onClick={handlePreviousImage}
                disabled={isFirstImage}
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-white transition-all z-10 ${
                  isFirstImage
                    ? 'opacity-50 cursor-not-allowed'
                    : 'opacity-50 hover:opacity-100 cursor-pointer'
                }`}
                aria-label="Previous image"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                disabled={isLastImage}
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-white transition-all z-10 ${
                  isLastImage
                    ? 'opacity-50 cursor-not-allowed'
                    : 'opacity-50 hover:opacity-100 cursor-pointer'
                }`}
                aria-label="Next image"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-lg z-10">
                {lightboxImageIndex + 1} / {filteredImages.length}
              </div>
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
                      {t.showroom.labelBefore}
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                      {t.showroom.labelAfter}
                    </div>
                    {/* Play Again Button */}
                    {videoEnded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                        <button
                          onClick={handlePlayAgain}
                          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                          {t.showroom.playAgain}
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
                    {t.showroom.labelBefore}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                    {t.showroom.labelAfter}
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
                      {t.showroom.labelBefore}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={lightboxImage.afterImage}
                      alt={`${lightboxImage.title} - Après`}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-4 py-2 rounded">
                      {t.showroom.labelAfter}
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
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
