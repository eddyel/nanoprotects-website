import { useRef, useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  width?: number | string;
  height?: number | string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function LazyImage({
  src,
  alt,
  className = '',
  onLoad,
  width,
  height,
  fetchPriority = 'auto',
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Reset image source when src prop changes
  useEffect(() => {
    setImageSrc(null);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current && !imageSrc) {
          setImageSrc(src);
          observer.unobserve(imgRef.current);
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [src, imageSrc]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <img
      ref={imgRef}
      src={
        imageSrc ||
        'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E'
      }
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      onLoad={handleImageLoad}
      // Dimensions explicites — corrige le warning PageSpeed "Image elements do not have explicit width and height"
      width={width ?? 800}
      height={height ?? 600}
      // Chargement différé natif en complément de l'IntersectionObserver
      loading="lazy"
      // Décodage asynchrone — améliore le LCP mobile
      decoding="async"
      // Priorité fetch pour l'image héro si nécessaire
      fetchPriority={fetchPriority}
    />
  );
}
