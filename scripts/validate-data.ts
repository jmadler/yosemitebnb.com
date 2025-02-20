import { rooms } from '../src/data/rooms';

function validateRooms() {
    const errors: string[] = [];

    Object.entries(rooms).forEach(([id, room]) => {
        // Validate required fields
        if (!room.id) errors.push(`${id}: Missing id`);
        if (!room.airbnbUrl) errors.push(`${id}: Missing airbnbUrl`);
        if (!room.rating) errors.push(`${id}: Missing rating`);
        if (!room.capacity) errors.push(`${id}: Missing capacity`);

        // Validate images
        if (!room.images?.length) {
            errors.push(`${id}: No images`);
        } 

        // Validate amenities
        const requiredAmenities = ['Mountain view', 'Kitchen', 'Wifi', 'Shared hot tub'];
        requiredAmenities.forEach(amenity => {
            if (!room.amenities.includes(amenity)) {
                errors.push(`${id}: Missing required amenity: ${amenity}`);
            }
        });

        // Validate TV amenity format
        const tvAmenity = room.amenities.find(a => a.includes('HDTV'));
        if (!tvAmenity?.match(/^\d+ inch HDTV with Amazon Prime Video/)) {
            errors.push(`${id}: Invalid TV amenity format`);
        }
    });

    if (errors.length) {
        console.error('Data validation failed:');
        errors.forEach(err => console.error('- ' + err));
        process.exit(1);
    }

    console.log('Data validation passed!');
}

validateRooms(); 