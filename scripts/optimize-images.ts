import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';
import type { Sharp } from 'sharp';

const ROOM_DIRS = [
    'yosemite-falls',
    'mariposa-grove',
    'el-capitan',
    'half-dome'
];

interface OptimizeOptions {
    width?: number;
    height?: number;
    quality?: number;
}

async function optimizeImage(
    input: string,
    output: string,
    options: OptimizeOptions = {}
): Promise<void> {
    try {
        // ... optimization logic
    } catch (error) {
        throw new Error(`Failed to optimize image: ${(error as Error).message}`);
    }
}

async function optimizeImages() {
    const sourceDir = 'original-images';
    const targetBaseDir = 'public/images';

    try {
        // Create room directories
        for (const roomDir of ROOM_DIRS) {
            await mkdir(join(targetBaseDir, roomDir), { recursive: true });
        }

        // Process each room's images
        for (const roomDir of ROOM_DIRS) {
            const roomSourceDir = join(sourceDir, roomDir);
            const roomTargetDir = join(targetBaseDir, roomDir);

            try {
                const files = await readdir(roomSourceDir, { withFileTypes: true });

                for (const file of files) {
                    if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
                        const sourcePath = join(roomSourceDir, file.name);
                        const targetPath = join(roomTargetDir, file.name);

                        await sharp(sourcePath)
                            .resize(1920, 1080, {
                                fit: 'inside',
                                withoutEnlargement: true
                            })
                            .jpeg({ 
                                quality: 80,
                                mozjpeg: true
                            })
                            .toFile(targetPath);

                        console.log(`Optimized: ${roomDir}/${file.name}`);
                    }
                }
            } catch (error) {
                console.warn(`Warning: Could not process ${roomDir}:`, error instanceof Error ? error.message : String(error));
            }
        }
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages(); 