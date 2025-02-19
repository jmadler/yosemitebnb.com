import type { Browser, Page } from 'puppeteer';

interface ImageUrl {
    url: string;
    filename: string;
}

async function waitForImages(page: Page): Promise<void> {
    try {
        await page.waitForFunction(() => {
            const images = document.querySelectorAll('img[src*="googleusercontent"]');
            return images.length > 10;
        }, { timeout: 30000 });
    } catch (error) {
        throw new Error(`Timeout waiting for images: ${(error as Error).message}`);
    }
}

async function processImages(): Promise<void> {
    try {
        // ... rest of function
    } catch (error) {
        console.error('Error processing images:', error instanceof Error ? error.message : error);
        process.exit(1);
    }
}

void processImages(); 