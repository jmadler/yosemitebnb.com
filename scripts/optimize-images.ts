import sharp from 'sharp';
import glob from 'glob';
import path from 'path';
import fs from 'fs/promises';

async function optimizeImages() {
  try {
    // Only target images in subdirectories, skip root level images
    const imageFiles = glob.sync('public/images/{rooms,seasons,lodge}/**/*.{jpg,jpeg,png}');

    for (const imagePath of imageFiles) {
      try {
        const image = sharp(imagePath);
        const info = await image.metadata();

        // Skip if image is already optimized
        if (info.size && info.size < 500000) {
          console.log(`Skipping already optimized image: ${imagePath}`);
          continue;
        }

        const optimized = await image
          .resize({
            width: 1920,
            height: 1080,
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ 
            quality: 80,
            mozjpeg: true
          })
          .toBuffer();

        // Save back to same location
        await fs.writeFile(imagePath, optimized);
        console.log(`Optimized: ${imagePath}`);

      } catch (fileError) {
        console.error(`Error processing ${imagePath}:`, fileError);
        continue; // Skip to next file on error
      }
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 