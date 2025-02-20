import fs from 'fs';
import path from 'path';

const nameMapping = {
  "yosemite-falls": {
    "1.jpg": "yosemite-falls-suite-exterior-view.jpg",
    "2.jpg": "yosemite-falls-suite-queen-bedroom.jpg",
    "3.jpg": "yosemite-falls-suite-mountain-view.jpg",
    "4.jpg": "yosemite-falls-suite-modern-bathroom.jpg",
    "5.jpg": "yosemite-falls-suite-full-kitchen.jpg",
    "6.jpg": "yosemite-falls-suite-living-room.jpg",
    "7.jpg": "yosemite-falls-suite-workspace.jpg",
    "8.jpg": "yosemite-falls-suite-smart-tv.jpg",
    "9.jpg": "yosemite-falls-suite-comfortable-bed.jpg",
    "10.jpg": "yosemite-falls-suite-scenic-window.jpg",
    "11.jpg": "yosemite-falls-suite-walk-in-shower.jpg",
    "12.jpg": "yosemite-falls-suite-kitchen-amenities.jpg",
    "13.jpg": "yosemite-falls-suite-lounge-area.jpg",
    "14.jpg": "yosemite-falls-suite-room-amenities.jpg",
    "15.jpg": "yosemite-falls-suite-features.jpg"
  },
  "mariposa-grove": {
    "1.jpg": "mariposa-grove-suite-entrance.jpg",
    "2.jpg": "mariposa-grove-suite-living-space.jpg",
    "3.jpg": "mariposa-grove-suite-cozy-bedroom.jpg",
    "4.jpg": "mariposa-grove-suite-equipped-kitchen.jpg",
    "5.jpg": "mariposa-grove-suite-modern-bath.jpg",
    "6.jpg": "mariposa-grove-suite-work-area.jpg",
    "7.jpg": "mariposa-grove-suite-relaxation-space.jpg",
    "8.jpg": "mariposa-grove-suite-entertainment-center.jpg",
    "9.jpg": "mariposa-grove-suite-bed-view.jpg",
    "10.jpg": "mariposa-grove-suite-kitchen-view.jpg",
    "11.jpg": "mariposa-grove-suite-bathroom-features.jpg",
    "12.jpg": "mariposa-grove-suite-storage-space.jpg",
    "13.jpg": "mariposa-grove-suite-amenities.jpg",
    "14.jpg": "mariposa-grove-suite-room-features.jpg",
    "15.jpg": "mariposa-grove-suite-exterior.jpg"
  },
  "el-capitan": {
    "1.jpg": "el-capitan-suite-entrance-view.jpg",
    "2.jpg": "el-capitan-suite-bedroom-area.jpg",
    "3.jpg": "el-capitan-suite-living-area.jpg",
    "4.jpg": "el-capitan-suite-full-kitchen.jpg",
    "5.jpg": "el-capitan-suite-modern-bathroom.jpg",
    "6.jpg": "el-capitan-suite-desk-workspace.jpg",
    "7.jpg": "el-capitan-suite-lounge-seating.jpg",
    "8.jpg": "el-capitan-suite-smart-tv-setup.jpg",
    "9.jpg": "el-capitan-suite-comfortable-bed.jpg",
    "10.jpg": "el-capitan-suite-kitchen-details.jpg",
    "11.jpg": "el-capitan-suite-walk-in-shower.jpg",
    "12.jpg": "el-capitan-suite-storage-area.jpg",
    "13.jpg": "el-capitan-suite-room-amenities.jpg",
    "14.jpg": "el-capitan-suite-features.jpg",
    "15.jpg": "el-capitan-suite-exterior.jpg"
  },
  "half-dome": {
    "1.jpg": "half-dome-suite-entrance.jpg",
    "2.jpg": "half-dome-suite-living-space.jpg",
    "3.jpg": "half-dome-suite-sleeping-area.jpg",
    "4.jpg": "half-dome-suite-kitchenette-view.jpg",
    "5.jpg": "half-dome-suite-modern-bathroom.jpg",
    "6.jpg": "half-dome-suite-work-desk.jpg",
    "7.jpg": "half-dome-suite-relaxation-area.jpg",
    "8.jpg": "half-dome-suite-entertainment.jpg",
    "9.jpg": "half-dome-suite-bed-view.jpg",
    "10.jpg": "half-dome-suite-kitchen-amenities.jpg",
    "11.jpg": "half-dome-suite-bathroom-details.jpg",
    "12.jpg": "half-dome-suite-closet-storage.jpg",
    "13.jpg": "half-dome-suite-room-features.jpg",
    "14.jpg": "half-dome-suite-amenities.jpg",
    "15.jpg": "half-dome-suite-exterior.jpg"
  }
};

async function renamePhotos() {
  for (const [roomId, mapping] of Object.entries(nameMapping)) {
    const roomPath = path.join('public', 'images', 'rooms', roomId);
    console.log(`\nRenaming photos for ${roomId}...`);
    
    for (const [oldName, newName] of Object.entries(mapping)) {
      const oldPath = path.join(roomPath, oldName);
      const newPath = path.join(roomPath, newName);
      
      if (fs.existsSync(oldPath)) {
        await fs.promises.rename(oldPath, newPath);
        console.log(`✓ ${oldName} → ${newName}`);
      }
    }
  }
}

renamePhotos().catch(console.error); 