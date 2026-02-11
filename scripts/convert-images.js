import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JPG files to convert to WebP
const jpgToConvert = [];

// Large WebP files to optimize
const webPToOptimize = [];

// First, let's scan for JPG and large WebP files
async function scanImages() {
  const imageDir = path.join(__dirname, '../client/public/images');

  if (!fs.existsSync(imageDir)) {
    console.log(`⚠️  Image directory not found: ${imageDir}`);
    return;
  }

  // Recursively scan directory
  function scanDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        scanDir(filePath);
      } else if (file.match(/\.(jpg|jpeg)$/i)) {
        jpgToConvert.push(filePath);
      } else if (file.match(/\.webp$/i) && stats.size > 100 * 1024) { // > 100KB
        webPToOptimize.push(filePath);
      }
    });
  }

  scanDir(imageDir);

  console.log(`\n📊 Scan Results:`);
  console.log(`   Found ${jpgToConvert.length} JPG files to convert`);
  console.log(`   Found ${webPToOptimize.length} large WebP files to optimize`);
}

async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg)$/i, '.webp');

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);

    return true;
  } catch (error) {
    console.log(`❌ Failed to convert ${path.basename(inputPath)}: ${error.message}\n`);
    return false;
  }
}

async function optimizeWebP(inputPath) {
  const backupPath = inputPath.replace('.webp', '.backup.webp');

  try {
    // Backup original
    fs.copyFileSync(inputPath, backupPath);

    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(inputPath + '.tmp');

    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(inputPath + '.tmp').size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    if (newSize < originalSize) {
      fs.renameSync(inputPath + '.tmp', inputPath);
      fs.unlinkSync(backupPath); // Remove backup if successful
      console.log(`✅ Optimized: ${path.basename(inputPath)}`);
      console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
      return true;
    } else {
      fs.unlinkSync(inputPath + '.tmp');
      fs.unlinkSync(backupPath);
      console.log(`ℹ️  Skipped: ${path.basename(inputPath)} (already optimal)\n`);
      return false;
    }
  } catch (error) {
    // Restore from backup on error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, inputPath);
      fs.unlinkSync(backupPath);
    }
    console.log(`❌ Failed to optimize ${path.basename(inputPath)}: ${error.message}\n`);
    return false;
  }
}

(async () => {
  console.log('\n🖼️  NanoProtects Image Optimization\n');
  console.log('=' .repeat(50));

  await scanImages();

  if (jpgToConvert.length === 0 && webPToOptimize.length === 0) {
    console.log('\n✨ No images to process. All done!');
    return;
  }

  // Convert JPG files
  if (jpgToConvert.length > 0) {
    console.log(`\n📝 Converting JPG files to WebP...\n`);
    let converted = 0;
    for (const imagePath of jpgToConvert) {
      if (await convertToWebP(imagePath)) converted++;
    }
    console.log(`✅ Converted ${converted}/${jpgToConvert.length} JPG files\n`);
  }

  // Optimize WebP files
  if (webPToOptimize.length > 0) {
    console.log(`📝 Optimizing large WebP files...\n`);
    let optimized = 0;
    for (const imagePath of webPToOptimize) {
      if (await optimizeWebP(imagePath)) optimized++;
    }
    console.log(`✅ Optimized ${optimized}/${webPToOptimize.length} WebP files\n`);
  }

  console.log('=' .repeat(50));
  console.log('✨ Image optimization complete!\n');
})();
