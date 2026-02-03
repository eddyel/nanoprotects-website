import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  onClose: () => void;
}

export default function ImageGallery({ images, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center px-4">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />

        {/* Left arrow */}
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-white transition-all ${
            isFirst
              ? 'opacity-50 cursor-not-allowed'
              : 'opacity-50 hover:opacity-100 cursor-pointer'
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft size={48} />
        </button>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          disabled={isLast}
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-white transition-all ${
            isLast
              ? 'opacity-50 cursor-not-allowed'
              : 'opacity-50 hover:opacity-100 cursor-pointer'
          }`}
          aria-label="Next image"
        >
          <ChevronRight size={48} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
