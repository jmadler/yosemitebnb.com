import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

const rooms = {
    'yosemite-falls': 'https://www.airbnb.com/rooms/571974372732706352',
    'mariposa-grove': 'https://www.airbnb.com/rooms/53756806',
    'el-capitan': 'https://www.airbnb.com/rooms/571972852764260849',
    'half-dome': 'https://www.airbnb.com/rooms/571966891960994960'
};

async function fetchAndSaveHtml(id: string, url: string) {
    const browser = await puppeteer.launch({ headless: false });
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        
        console.log(`Fetching ${id} from ${url}...`);
        await page.goto(url);
        await page.waitForSelector('h1', { timeout: 30000 });
        await new Promise(r => setTimeout(r, 2000));

        const html = await page.content();
        writeFileSync(`tmp/${id}.html`, html);
        console.log(`Saved HTML for ${id}`);

    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
    } finally {
        await browser.close();
    }
}

async function fetchAllListings() {
    for (const [id, url] of Object.entries(rooms)) {
        await fetchAndSaveHtml(id, url);
    }
}

// Run the script
void (async () => {
    console.log('Fetching listings...');
    await fetchAllListings();
})(); 