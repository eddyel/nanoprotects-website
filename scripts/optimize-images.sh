#!/bin/bash

# Image Optimization Script for NanoProtects Website
# Generates WebP variants at multiple sizes for responsive images
#
# Prerequisites:
# - ImageMagick installed: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)
# - Or use Sharp (Node.js): npm install -g sharp-cli
#
# Usage: ./scripts/optimize-images.sh

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Linux: sudo apt-get install imagemagick"
    exit 1
fi

# Navigate to images directory
cd "$(dirname "$0")/../client/public/images" || exit 1

echo -e "${BLUE}🖼️  Starting image optimization...${NC}\n"

# Images to optimize
IMAGES=("hero-riad" "hotel-lobby" "marble-macro")

# Sizes to generate
SIZES=(640 1024 1920 2560)

# Optimize each image
for img in "${IMAGES[@]}"; do
    echo -e "${GREEN}Processing: ${img}.jpg${NC}"

    # Check if source image exists
    if [ ! -f "${img}.jpg" ]; then
        echo "⚠️  ${img}.jpg not found, skipping..."
        continue
    fi

    # Generate WebP variants
    for size in "${SIZES[@]}"; do
        output="${img}-${size}w.webp"

        if [ -f "$output" ]; then
            echo "  ✓ ${output} already exists, skipping..."
        else
            quality=85
            if [ "$size" -eq 640 ]; then
                quality=80
            fi

            echo "  → Generating ${output} (quality: ${quality})..."
            convert "${img}.jpg" -resize "${size}x" -quality "$quality" "$output"
        fi
    done

    # Generate optimized JPG fallback at 1920w
    jpg_output="${img}-1920w.jpg"
    if [ -f "$jpg_output" ]; then
        echo "  ✓ ${jpg_output} already exists, skipping..."
    else
        echo "  → Generating ${jpg_output} (fallback)..."
        convert "${img}.jpg" -resize 1920x -quality 85 "$jpg_output"
    fi

    echo ""
done

# Optimize logo
echo -e "${GREEN}Processing: Logo${NC}"
if [ -f "PHOTO-2026-01-25-15-41-21.jpg" ]; then
    if [ ! -f "logo-64.webp" ]; then
        echo "  → Generating logo-64.webp..."
        convert "PHOTO-2026-01-25-15-41-21.jpg" -resize 64x64 -quality 90 "logo-64.webp"
    else
        echo "  ✓ logo-64.webp already exists"
    fi
fi

echo ""
echo -e "${BLUE}📊 Optimization complete! Size comparison:${NC}"
echo ""

# Calculate sizes
original_size=$(du -sh hero-riad.jpg hotel-lobby.jpg marble-macro.jpg 2>/dev/null | awk '{sum += $1} END {print sum}' || echo "0")
optimized_size=$(du -sh *-*w.webp 2>/dev/null | awk '{sum += $1} END {print sum}' || echo "0")

echo "Original JPGs: $(du -sh hero-riad.jpg hotel-lobby.jpg marble-macro.jpg 2>/dev/null | awk '{print}' | tr '\n' ' ')"
echo "Optimized WebP: $(du -sh *-640w.webp *-1024w.webp *-1920w.webp *-2560w.webp 2>/dev/null | head -4)"
echo ""
echo -e "${GREEN}✅ All images optimized!${NC}"
echo ""
echo "Next steps:"
echo "1. Review generated images in client/public/images/"
echo "2. Update Home.tsx to use ResponsiveImage component"
echo "3. Test in browser to verify WebP support and fallbacks"
