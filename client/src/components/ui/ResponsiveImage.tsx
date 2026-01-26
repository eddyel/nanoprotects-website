import { useState } from 'react';

interface ResponsiveImageProps {
  src: string; // Base name without extension (e.g., 'hero-riad')
  alt: string;
  className?: string;
  priority?: boolean; // For above-fold images
  sizes?: string; // Responsive sizes attribute
}

/**
 * ResponsiveImage Component
 *
 * Provides optimized responsive images with:
 * - WebP format for modern browsers with JPG fallback
 * - Multiple sizes for different screen widths (srcset)
 * - Lazy loading for below-fold images
 * - Smooth fade-in transition when loaded
 *
 * Required image files (place in /client/public/images/):
 * For each image (e.g., 'hero-riad'), you need:
 * - hero-riad-640w.webp   (640px wide, ~50-80KB, quality 80)
 * - hero-riad-1024w.webp  (1024px wide, ~150-200KB, quality 85)
 * - hero-riad-1920w.webp  (1920px wide, ~400-500KB, quality 85)
 * - hero-riad-2560w.webp  (2560px wide, ~700-900KB, quality 85)
 * - hero-riad-1920w.jpg   (1920px wide, optimized JPG fallback)
 *
 * Image generation commands (using ImageMagick or Sharp):
 *
 * For macOS/Linux with ImageMagick:
 * ```bash
 * cd client/public/images
 *
 * # For hero-riad.jpg
 * convert hero-riad.jpg -resize 640x -quality 80 hero-riad-640w.webp
 * convert hero-riad.jpg -resize 1024x -quality 85 hero-riad-1024w.webp
 * convert hero-riad.jpg -resize 1920x -quality 85 hero-riad-1920w.webp
 * convert hero-riad.jpg -resize 2560x -quality 85 hero-riad-2560w.webp
 * convert hero-riad.jpg -resize 1920x -quality 85 hero-riad-1920w.jpg
 *
 * # Repeat for hotel-lobby.jpg and marble-macro.jpg
 * ```
 *
 * Alternative using Sharp (Node.js):
 * ```javascript
 * const sharp = require('sharp');
 * const sizes = [640, 1024, 1920, 2560];
 *
 * sizes.forEach(width => {
 *   sharp('hero-riad.jpg')
 *     .resize(width)
 *     .webp({ quality: width === 640 ? 80 : 85 })
 *     .toFile(`hero-riad-${width}w.webp`);
 * });
 * ```
 *
 * @example
 * // Above-fold image (loads immediately)
 * <ResponsiveImage
 *   src="hero-riad"
 *   alt="Moroccan riad architecture"
 *   className="absolute inset-0 w-full h-full object-cover"
 *   priority={true}
 *   sizes="100vw"
 * />
 *
 * @example
 * // Below-fold image (lazy loads)
 * <ResponsiveImage
 *   src="hotel-lobby"
 *   alt="Luxury hotel lobby"
 *   className="w-full h-full object-cover"
 *   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 * />
 */
export function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw'
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate srcset for WebP with multiple sizes
  const webpSrcSet = `
    /images/${src}-640w.webp 640w,
    /images/${src}-1024w.webp 1024w,
    /images/${src}-1920w.webp 1920w,
    /images/${src}-2560w.webp 2560w
  `.trim();

  // Fallback to optimized JPG (or original if optimized version doesn't exist)
  const fallbackSrc = `/images/${src}-1920w.jpg`;
  const originalFallback = `/images/${src}.jpg`;

  return (
    <picture className={className}>
      {/* WebP source for modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />

      {/* Fallback JPG for older browsers */}
      <img
        src={hasError ? originalFallback : fallbackSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          // If optimized version fails, try original
          if (!hasError) {
            setHasError(true);
            (e.target as HTMLImageElement).src = originalFallback;
          }
        }}
        className={`w-full h-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectFit: 'cover' }}
      />
    </picture>
  );
}
