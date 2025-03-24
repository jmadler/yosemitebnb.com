import { seasonalActivities } from './activities';

export const siteInfo = {
	address: "6484A CA-140, Midpines, CA 95345",
	phone: "(209) 742-4019",
	email: "rlntlss1@gmail.com",
	checkIn: "3:00 PM - 8:00 PM",
	checkOut: "11:00 AM",
	parking: "Free on-site parking available",
	distances: {
		"Yosemite Valley": "45 min drive (37 miles)",
		"Mariposa": "10 min drive (7 miles)",
		"Merced Airport": "1 hour drive (50 miles)",
		"Bass Lake": "45 min drive",
		"Glacier Point": "1 hour drive (45 miles)",
		"Sierra National Forest": "30 min drive",
		"El Portal": "25 min drive",
		"Arch Rock Entrance": "30 min drive"
	},
	nearbyAttractions: [
		{
			name: "Yosemite National Park",
			description: "World-famous for its granite cliffs, waterfalls, and diverse wildlife",
			url: "https://www.nps.gov/yose/index.htm"
		},
		{
			name: "Historic Mariposa",
			description: "Gold rush era town with museums, shops, and restaurants",
			url: "https://www.mariposa.ca.us/"
		},
		{
			name: "Merced River Recreation",
			description: "Swimming, fishing, and rafting opportunities",
			url: "https://www.mercedca.gov/parks-recreation/merced-river-recreation"
		},
		{
			name: "California State Mining Museum",
			description: "Exhibits on gold mining history and mineral displays",
			url: "https://www.californiamines.org/"
		}
	],
	seasonalActivities,
	houseRules: [
		"Quiet hours 10 PM - 7 AM",
		"No smoking inside",
		"No pets allowed",
		"No parties or events",
		"Check-in time strictly 3 PM - 8 PM"
	],
	transportation: {
		"YARTS Bus": {
			description: "Year-round service to Yosemite Valley",
			url: "https://yarts.com/routes-and-schedules/",
			schedule: "Multiple daily departures from Mariposa",
			cost: "Around $13 one-way, free with Yosemite entrance pass"
		},
		"Rental Cars": {
			description: "Available in Merced and Fresno",
			locations: [
				"Merced Airport (MCE)",
				"Fresno Airport (FAT)",
				"Enterprise Rent-A-Car Merced"
			]
		},
		"Private Shuttle": {
			description: "Door-to-door service available",
			providers: [
				"Yosemite Private Tours",
				"Discover Yosemite"
			]
		}
	},
	maps: {
		google: "https://maps.google.com/?q=6484A+CA-140,+Midpines,+CA+95345",
		apple: "http://maps.apple.com/?address=6484A+CA-140,+Midpines,+CA+95345",
		coordinates: {
			lat: 37.5655556,
			lng: -119.9394444
		}
	}
};