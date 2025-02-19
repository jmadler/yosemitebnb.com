import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';

export interface RoomData {
    id: string;
    price: string;
    description: string;
    images: string[];
    capacity: string;
    amenities: string[];
    rating: string;
    airbnbUrl: string;
}

export function normalizeAmenity(amenity: string): string {
    if (amenity.includes('washer') || amenity.includes('Washer')) {
        return 'Free washer – In building';
    }
    if (amenity.includes('dryer') || amenity.includes('Dryer')) {
        return 'Free dryer – In building';
    }
    if (amenity.includes('parking')) {
        return 'Free parking on premises';
    }
    if (amenity.includes('HDTV')) {
        const size = amenity.match(/(\d+)\s*inch/)?.[1] || '';
        return `${size} inch HDTV with Amazon Prime Video, Disney+, Fire TV, Hulu, Netflix`;
    }
    return amenity;
}

export function parseHtml(id: string, html: string): RoomData {
    const $ = load(html);

    // Get listing ID from og:url
    const listingId = $('meta[property="og:url"]').attr('content')?.match(/rooms\/(\d+)/)?.[1];
    console.log(`Found listing ID for ${id}:`, listingId);

    // Get images from the baseUrl attributes
    const imageUrls = new Set<string>();
    const imageMatches = html.match(/"baseUrl":"[^"]+"/g);
    if (imageMatches) {
        imageMatches.forEach(match => {
            const url = match.split('"baseUrl":"')[1].replace('"', '');
            if (url.includes('/original/') && url.endsWith('.jpeg') && !url.includes('...')) {
                // Only add if we don't already have this image
                const imageName = url.split('/').pop();
                const isDuplicate = Array.from(imageUrls).some(existingUrl => 
                    existingUrl.split('/').pop() === imageName
                );
                if (!isDuplicate) {
                    imageUrls.add(url);
                }
            }
        });
    }

    // Get amenities from the JSON data and normalize them
    const amenities = new Set<string>();
    const amenitySection = html.match(/amenities":\[(.*?)\]/s)?.[1];
    if (amenitySection) {
        const amenityMatches = amenitySection.match(/"title":"([^"]+)"/g);
        if (amenityMatches) {
            amenityMatches.forEach(match => {
                const amenity = match.split('"title":"')[1].replace('"', '');
                if (amenity) {
                    amenities.add(normalizeAmenity(amenity));
                }
            });
        }
    }

    // Get capacity and rating from og:title first
    const ogTitle = $('meta[property="og:title"]').attr('content') || '';
    const ratingMatch = ogTitle.match(/★([\d.]+)/);
    const rating = ratingMatch ? ratingMatch[1] : '';
    
    const capacityMatch = ogTitle.match(/(\d+) bedroom|(\d+) bed|(\d+) guests/);
    const capacity = capacityMatch ? `${capacityMatch[1] || capacityMatch[2] || capacityMatch[3]} guests` : '';

    // Then get description and price from meta tags
    const descriptions = $('meta[name="description"]')
        .map((_, el) => $(el).attr('content'))
        .get()
        .filter(Boolean)
        .sort((a, b) => b.length - a.length);
    
    const fullDescription = descriptions[0] || '';
    // Look for price in description or og:title
    const priceMatch = fullDescription.match(/\$(\d+)/) || 
                      ogTitle.match(/\$(\d+)/);
    const price = priceMatch ? priceMatch[1] : 'unknown';

    // Filter images to only include those matching the listing ID
    const filteredImages = Array.from(imageUrls).filter(url => 
        url.includes(`Hosting-${listingId}`)
    );

    // Get Airbnb URL from og:url or construct it from listing ID
    const airbnbUrl = $('meta[property="og:url"]').attr('content') || 
                     `https://www.airbnb.com/rooms/${listingId}`;

    return {
        id,
        price: `$${price}`,
        description: fullDescription,
        images: filteredImages,
        capacity,
        amenities: Array.from(amenities),
        rating,
        airbnbUrl
    };
}

// Main script execution
if (require.main === module) {
    const files = {
        'yosemite-falls': 'tmp/yosemite-falls.html',
        'mariposa-grove': 'tmp/mariposa-grove.html',
        'el-capitan': 'tmp/el-capitan.html',
        'half-dome': 'tmp/half-dome.html'
    };

    const roomData: Record<string, RoomData> = {};

    for (const [id, file] of Object.entries(files)) {
        const html = readFileSync(file, 'utf-8');
        roomData[id] = parseHtml(id, html);
    }

    // Write to rooms.ts
    const roomsContent = `// Auto-generated from parse-listings.ts
export const rooms = ${JSON.stringify(roomData, null, 2)};
`;

    writeFileSync('src/data/rooms.ts', roomsContent);
} 