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
  titleKey: string;
  descriptionKey: string;
  isSingleImage?: boolean;
  isVideo?: boolean;
  hideLabels?: boolean;
}

// Category keys for translation
const categoryKeys = [
  'filterAll',
  'filterBejmat',
  'filterPierreTaza',
  'filterMarble',
  'filterCarreauxBeldi',
  'filterZellige',
  'filterMetal',
  'filterMineralization'
];

// Internal category names (used for filtering)
const internalCategories = [
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
  // Bejmat
  {
    id: '1',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-floor-before.webp',
    afterImage: '/images/showroom/bejmat-floor-after.webp',
    title: 'Sol en Bejmat - Riad',
    titleKey: 'title1',
    descriptionKey: 'desc1',
    isSingleImage: false
  },
  {
    id: '2',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-corridor-riad.webp',
    afterImage: '/images/showroom/bejmat-corridor-riad.webp',
    title: 'Corridor en Bejmat - Riad',
    titleKey: 'title2',
    descriptionKey: 'desc2',
    isSingleImage: true
  },
  {
    id: '3',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-entrance-riad.webp',
    afterImage: '/images/showroom/bejmat-entrance-riad.webp',
    title: 'Entrée en Bejmat - Riad',
    titleKey: 'title3',
    descriptionKey: 'desc3',
    isSingleImage: true
  },
  {
    id: '4',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-staircase-riad.webp',
    afterImage: '/images/showroom/bejmat-staircase-riad.webp',
    title: 'Escalier en Bejmat - Riad',
    titleKey: 'title4',
    descriptionKey: 'desc4',
    isSingleImage: true
  },
  {
    id: '5',
    category: 'Bejmat',
    beforeImage: '/images/showroom/bejmat-patio-riad.webp',
    afterImage: '/images/showroom/bejmat-patio-riad.webp',
    title: 'Patio en Bejmat - Riad',
    titleKey: 'title5',
    descriptionKey: 'desc5',
    isSingleImage: true
  },

  // Marbre
  {
    id: '6',
    category: 'Marbre',
    beforeImage: '/images/showroom/marble-white-before.webp',
    afterImage: '/images/showroom/marble-white-after.webp',
    title: 'Marbre Blanc - Hotel',
    titleKey: 'title6',
    descriptionKey: 'desc6',
    isSingleImage: false
  },
  {
    id: '7',
    category: 'Marbre',
    beforeImage: '/images/showroom/marbre-table-ronde-av-ap.webp',
    afterImage: '/images/showroom/marbre-table-ronde-av-ap.webp',
    title: 'Table en Marbre - Hotel',
    titleKey: 'title7',
    descriptionKey: 'desc7',
    isSingleImage: true
  },

  // Zellige
  {
    id: '8',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-traditional-before.webp',
    afterImage: '/images/showroom/zellige-traditional-after.webp',
    title: 'Sol Zellige Traditionnel - Riad',
    titleKey: 'title8',
    descriptionKey: 'desc8',
    isSingleImage: false
  },
  {
    id: '9',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-sol-mur-riad.webp',
    afterImage: '/images/showroom/zellige-sol-mur-riad.webp',
    title: 'Sol & Mur Zellige - Riad',
    titleKey: 'title9',
    descriptionKey: 'desc9',
    isSingleImage: true
  },
  {
    id: '10',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-fontaine-hotel.webp',
    afterImage: '/images/showroom/zellige-fontaine-hotel.webp',
    title: 'Fontaine Zellige - Hotel',
    titleKey: 'title10',
    descriptionKey: 'desc10',
    isSingleImage: true
  },
  {
    id: '11',
    category: 'Zellige',
    beforeImage: '/images/showroom/zellige-sol-hotel.webp',
    afterImage: '/images/showroom/zellige-sol-hotel.webp',
    title: 'Sol Zellige - Hotel',
    titleKey: 'title11',
    descriptionKey: 'desc11',
    isSingleImage: true
  },

  // Pierre de Taza
  {
    id: '12',
    category: 'Pierre de Taza',
    beforeImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/WxCTgreYPojEgrOy.webp',
    afterImage: '/images/showroom/pierre-taza-after.webp',
    title: 'Sol Pierre de Taza - Hotel',
    titleKey: 'title12',
    descriptionKey: 'desc12',
    isSingleImage: false
  },
  {
    id: '13',
    category: 'Pierre de Taza',
    beforeImage: '/images/showroom/sol-pierre-taza-hotel.webp',
    afterImage: '/images/showroom/sol-pierre-taza-hotel.webp',
    title: 'Sol Pierre de Taza - Hotel',
    titleKey: 'title13',
    descriptionKey: 'desc13',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '14',
    category: 'Pierre de Taza',
    beforeImage: '/images/showroom/plage-piscine-pierre-taza.webp',
    afterImage: '/images/showroom/plage-piscine-pierre-taza.webp',
    title: 'Plage Piscine Pierre de Taza - Résidence',
    titleKey: 'title14',
    descriptionKey: 'desc14',
    isSingleImage: true
  },
  {
    id: '15',
    category: 'Pierre de Taza',
    beforeImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    afterImage: '/images/plage-piscine-pierre-taza-hotel.jpg',
    title: 'Plage Piscine Pierre de Taza - Hotel',
    titleKey: 'title15',
    descriptionKey: 'desc15',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '16',
    category: 'Pierre de Taza',
    beforeImage: '/images/sol-pierre-taza-particulier.jpg',
    afterImage: '/images/sol-pierre-taza-particulier.jpg',
    title: 'Sol Pierre de Taza - Particulier',
    titleKey: 'title16',
    descriptionKey: 'desc16',
    isSingleImage: true,
    hideLabels: true
  },

  // Carreaux Beldi
  {
    id: '17',
    category: 'Carreaux Beldi',
    beforeImage: '/images/showroom/plage-piscine-carreaux-beldi-marbre.webp',
    afterImage: '/images/showroom/plage-piscine-carreaux-beldi-marbre.webp',
    title: 'Plage Piscine Carreaux Beldi & Marbre - Hotel',
    titleKey: 'title17',
    descriptionKey: 'desc17',
    isSingleImage: true,
    hideLabels: true
  },
  {
    id: '18',
    category: 'Carreaux Beldi',
    beforeImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/dDELTBipCGPPRtHU.png',
    afterImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/dDELTBipCGPPRtHU.png',
    title: 'Sol Cuisine Carreaux Beldi - Riad',
    titleKey: 'title18',
    descriptionKey: 'desc18',
    isSingleImage: true
  },
  {
    id: '19',
    category: ['Carreaux Beldi', 'Zellige'],
    beforeImage: '/images/showroom/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    afterImage: '/images/showroom/sol-restaurant-carreaux-beldi-zellige-riad.webp',
    title: 'Sol Restaurant Carreaux Beldi & Zellige - Riad',
    titleKey: 'title19',
    descriptionKey: 'desc19',
    isSingleImage: true
  },

  // Métal
  {
    id: '20',
    category: 'Métal',
    beforeImage: '/images/showroom/metal-brass-before.webp',
    afterImage: '/images/showroom/metal-brass-after.webp',
    title: 'Rampe Métal Laiton - Hotel',
    titleKey: 'title20',
    descriptionKey: 'desc20',
    isSingleImage: false
  },

  // Minéralisation
  {
    id: '21',
    category: 'Minéralisation',
    beforeImage: '/images/showroom/securite-sols-before.webp',
    afterImage: '/images/showroom/securite-sols-after.webp',
    title: 'Sécurité Sols - Particulier',
    titleKey: 'title21',
    descriptionKey: 'desc21',
    isSingleImage: false
  },
  {
    id: '22',
    category: 'Minéralisation',
    videoMp4: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/PwAnpbCHRHTexxKs.mpeg',
    videoPoster: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/PwAnpbCHRHTexxKs.mpeg',
    title: 'Mur Briquettes - Hotel',
    titleKey: 'title22',
    descriptionKey: 'desc22',
    isVideo: true,
    hideLabels: true
  },
  {
    id: '23',
    category: 'Minéralisation',
    videoMp4: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/jPXDZdIxLKDvTMwd.mp4',
    videoPoster: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/jPXDZdIxLKDvTMwd.mp4',
    title: 'Mur Enduit - Particulier',
    titleKey: 'title23',
    descriptionKey: 'desc23',
    isVideo: true,
    hideLabels: true
  },
  {
    id: '24',
    category: 'Minéralisation',
    videoMp4: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/PaXedwwiKCwYIUps.mp4',
    videoPoster: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028302117/PaXedwwiKCwYIUps.mp4',
    title: 'Mur en Pisé - Hotel',
    titleKey: 'title24',
    descriptionKey: 'desc24',
    isVideo: true,
    hideLabels: true
  }
];

export default function Showroom() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredImages = selectedCategory === 'Tous'
    ? galleryImages
    : galleryImages.filter(img => {
        if (Array.isArray(img.category)) {
          return img.category.includes(selectedCategory);
        }
        return img.category === selectedCategory;
      });

  const handlePlayAgain = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Get translated category name
  const getCategoryLabel = (internalName: string): string => {
    const index = internalCategories.indexOf(internalName);
    if (index >= 0 && index < categoryKeys.length) {
      const key = categoryKeys[index] as keyof typeof t.showroom;
      return t.showroom[key] || internalName;
    }
    return internalName;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Title */}
      <div className="bg-gray-100 py-20">
        <div className="container max-w-5xl">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-bold text-left" style={{ color: '#A33215' }}>
            {t.showroom.title}
          </h1>
          <p className="text-gray-600 mt-4 text-lg">{t.showroom.subtitle}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container max-w-5xl py-12">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {internalCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-orange-700 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container max-w-5xl pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
              onClick={() => setSelectedImage(image)}
            >
              {image.isVideo ? (
                <div className="relative w-full h-64 bg-black">
                  <video
                    src={image.videoPoster}
                    poster={image.videoPoster}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                    <div className="text-white text-4xl">▶</div>
                  </div>
                </div>
              ) : image.isSingleImage ? (
                <LazyImage
                  src={image.beforeImage || ''}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="relative w-full h-64 overflow-hidden">
                  <LazyImage
                    src={image.beforeImage || ''}
                    alt={`${image.title} - ${t.showroom.labelBefore}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                    <div className="text-white text-center">
                      <div className="text-sm font-semibold">{t.showroom.clickToEnlarge}</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800">{image.title}</h3>
                <p className="text-sm text-gray-600">{t.showroom[image.descriptionKey as keyof typeof t.showroom] || image.descriptionKey}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              {selectedImage.isVideo ? (
                <div className="relative w-full bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    src={selectedImage.videoMp4}
                    poster={selectedImage.videoPoster}
                    className="w-full h-auto"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <button
                      onClick={handlePlayAgain}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition text-white text-6xl"
                    >
                      ▶
                    </button>
                  )}
                </div>
              ) : selectedImage.isSingleImage ? (
                <div className="relative w-full">
                  <LazyImage
                    src={selectedImage.beforeImage || ''}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg"
                  />
                  {!selectedImage.hideLabels && (
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold text-gray-800">
                      {t.showroom.labelBefore}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full">
                  <div className="flex gap-2 h-auto">
                    <div className="flex-1 relative">
                      <LazyImage
                        src={selectedImage.beforeImage || ''}
                        alt={`${selectedImage.title} - ${t.showroom.labelBefore}`}
                        className="w-full h-auto rounded-l-lg"
                      />
                      {!selectedImage.hideLabels && (
                        <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded text-sm font-semibold">
                          {t.showroom.labelBefore}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 relative">
                      <LazyImage
                        src={selectedImage.afterImage || ''}
                        alt={`${selectedImage.title} - ${t.showroom.labelAfter}`}
                        className="w-full h-auto rounded-r-lg"
                      />
                      {!selectedImage.hideLabels && (
                        <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded text-sm font-semibold">
                          {t.showroom.labelAfter}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 bg-white/10 rounded-lg p-4 text-white">
                <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-200">{t.showroom[selectedImage.descriptionKey as keyof typeof t.showroom] || selectedImage.descriptionKey}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
