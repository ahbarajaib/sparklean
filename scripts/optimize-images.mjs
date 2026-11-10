import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (file === '.DS_Store' || file.startsWith('.')) continue;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.png')) {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

function formatBytes(bytes, decimals = 1) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function optimize() {
  const files = await getAllFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images to optimize.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const originalSize = fs.statSync(file).size;
    totalOriginal += originalSize;

    const ext = path.extname(file);
    const targetWebp = file.replace(/\.png$/, '.webp');
    const relativePath = path.relative('public', file);

    const isProduct = file.includes('/products/');
    const isCategory = file.includes('/categories/');
    const isHero = file.includes('/hero/');
    const isLogo = file.includes('/logo/');
    const isIndustries = file.includes('/industries/');
    const isCta = file.includes('/cta/');
    const isAbout = file.includes('/about/');

    let pipeline = sharp(file);
    const metadata = await pipeline.metadata();

    // Determine max dimension
    let maxWidth = 1600;
    let quality = 85;

    if (isProduct) {
      maxWidth = 1000;
      quality = 88;
    } else if (isCategory) {
      maxWidth = 1000;
      quality = 85;
    } else if (isCta) {
      maxWidth = 900;
      quality = 85;
    } else if (isIndustries) {
      maxWidth = 1400;
      quality = 85;
    } else if (isAbout) {
      maxWidth = 1200;
      quality = 85;
    } else if (isHero) {
      maxWidth = 1600;
      quality = 85;
    } else if (isLogo) {
      maxWidth = 1024;
      quality = 90;
    }

    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    if (isProduct || isLogo) {
      await pipeline
        .webp({ quality, alphaQuality: 90, effort: 6 })
        .toFile(targetWebp);
    } else {
      await pipeline
        .webp({ quality, effort: 6 })
        .toFile(targetWebp);
    }

    const optimizedSize = fs.statSync(targetWebp).size;
    totalOptimized += optimizedSize;

    const savedPercent = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
    console.log(`✓ ${relativePath.padEnd(50)} ${formatBytes(originalSize).padStart(8)} → ${formatBytes(optimizedSize).padStart(8)}  (-${savedPercent}%)`);
  }

  const totalSaved = totalOriginal - totalOptimized;
  const totalPercent = (((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1);

  console.log('\n======================================================');
  console.log(`Total Original Size:  ${formatBytes(totalOriginal)}`);
  console.log(`Total Optimized Size: ${formatBytes(totalOptimized)}`);
  console.log(`Total Saved:          ${formatBytes(totalSaved)} (-${totalPercent}%)`);
  console.log('======================================================');
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
