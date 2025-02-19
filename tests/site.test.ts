import { describe, it, expect } from 'vitest';
import { rooms } from '../src/data/rooms';
import { getStaticPaths } from '../src/pages/rooms/[id].astro';

describe('site', () => {
    it('generates correct static paths', () => {
        const paths = getStaticPaths();
        expect(paths).toHaveLength(4);
        
        const ids = paths.map(p => p.params.id);
        expect(ids).toContain('yosemite-falls');
        expect(ids).toContain('mariposa-grove');
        expect(ids).toContain('el-capitan');
        expect(ids).toContain('half-dome');
    });

    it('has valid room data', () => {
        Object.values(rooms).forEach(room => {
            // Basic structure
            expect(room.id).toBeDefined();
            expect(room.images).toBeInstanceOf(Array);
            expect(room.amenities).toBeInstanceOf(Array);
            expect(room.airbnbUrl).toMatch(/^https:\/\/www\.airbnb\.com\/rooms\/\d+$/);

            // Content validation
            expect(room.images.length).toBeGreaterThan(0);
            expect(room.amenities).toContain('Mountain view');
            expect(room.amenities).toContain('Wifi');
            expect(room.amenities.some(a => a.includes('HDTV'))).toBe(true);
        });
    });
}); 