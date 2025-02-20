import fs from 'fs';
import path from 'path';
import { rooms } from '../src/data/rooms';
import fetch from 'node-fetch';

async function downloadImage(url: string, filepath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    await fs.promises.mkdir(path.dirname(filepath), { recursive: true });
    await fs.promises.writeFile(filepath, buffer);
}

async function downloadAllImages() {
    for (const [roomId, room] of Object.entries(rooms)) {
        console.log(`Downloading images for ${roomId}...`);
        
        for (let i = 0; i < room.images.length; i++) {
            const url = room.images[i];
            const filename = `${i + 1}.jpg`;
            const filepath = path.join('public', 'images', 'rooms', roomId, filename);
            
            await downloadImage(url, filepath);
            console.log(`Downloaded ${filename}`);
        }
    }
}

downloadAllImages().catch(console.error); 