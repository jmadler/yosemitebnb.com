export interface Activity {
  title: string;
  description: string;
  image: string;
  additionalImages?: string[];
  season: 'spring' | 'summer' | 'fall' | 'winter';
}

export interface SeasonInfo {
  activities: string[];
  image: string;
  additionalImages: string[];
  temp: string;
  highlights: string;
  detailedActivities: Activity[];
}

export interface SeasonalActivities {
  spring: SeasonInfo;
  summer: SeasonInfo;
  fall: SeasonInfo;
  winter: SeasonInfo;
}

// Helper function to get current season
export const getCurrentSeason = (): 'spring' | 'summer' | 'fall' | 'winter' => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
};

export const currentSeason = getCurrentSeason();

// Detailed activities for each season
export const activities: Activity[] = [
  {
    title: "Waterfall Viewing",
    description: "Experience Yosemite's magnificent waterfalls at their peak flow during spring months. Yosemite Falls, Bridalveil Fall, and Vernal Fall are especially spectacular from April to June.",
    image: "/images/activities/waterfalls.jpg",
    additionalImages: [
      "/images/activities/yosemite-falls.jpg",
      "/images/activities/bridalveil-fall.jpg",
      "/images/activities/vernal-fall.jpg"
    ],
    season: "spring"
  },
  {
    title: "Wildflower Walks",
    description: "Explore Yosemite's colorful spring wildflower displays. The Valley floor and lower elevation meadows come alive with lupine, poppies, and dozens of other wildflower species.",
    image: "/images/activities/wildflowers.jpg",
    additionalImages: [
      "/images/activities/lupine.jpg",
      "/images/activities/poppies.jpg",
      "/images/activities/meadow-flowers.jpg"
    ],
    season: "spring"
  },
  {
    title: "Hiking",
    description: "Access all of Yosemite's trails during summer months. From easy valley floor walks to challenging high country treks, summer offers perfect conditions for exploring on foot.",
    image: "/images/activities/hiking.jpg",
    additionalImages: [
      "/images/activities/valley-hiking.jpg",
      "/images/activities/high-country-trail.jpg",
      "/images/activities/panorama-trail.jpg"
    ],
    season: "summer"
  },
  {
    title: "Swimming",
    description: "Cool off in the Merced River's refreshing waters. Several beaches along the valley offer perfect swimming spots during hot summer days.",
    image: "/images/activities/swimming.jpg",
    additionalImages: [
      "/images/activities/merced-river.jpg",
      "/images/activities/sentinel-beach.jpg",
      "/images/activities/river-relaxing.jpg"
    ],
    season: "summer"
  },
  {
    title: "Fall Colors",
    description: "Witness Yosemite Valley's spectacular autumn transformation. Big-leaf maples, black oaks, and dogwoods create a stunning display of yellow, orange, and red foliage from late October through November.",
    image: "/images/activities/fall-colors.jpg",
    additionalImages: [
      "/images/activities/valley-autumn.jpg",
      "/images/activities/golden-trees.jpg",
      "/images/activities/red-maple.jpg"
    ],
    season: "fall"
  },
  {
    title: "Photography",
    description: "Capture Yosemite's dramatic autumn light and clear skies. Fall offers photographers unique conditions with seasonal colors, fewer crowds, and beautiful reflections in the Merced River.",
    image: "/images/activities/photography.jpg",
    additionalImages: [
      "/images/activities/autumn-reflection.jpg",
      "/images/activities/half-dome-fall.jpg",
      "/images/activities/valley-view-autumn.jpg"
    ],
    season: "fall"
  },
  {
    title: "Skiing & Snowboarding",
    description: "Enjoy downhill skiing and snowboarding at Badger Pass Ski Area, California's oldest ski resort. Perfect for beginners and families with gentle slopes and affordable lessons.",
    image: "/images/activities/skiing.jpg",
    additionalImages: [
      "/images/activities/badger-pass.jpg",
      "/images/activities/ski-lessons.jpg",
      "/images/activities/snowboarding.jpg"
    ],
    season: "winter"
  },
  {
    title: "Snowshoeing",
    description: "Explore Yosemite's winter wonderland on snowshoes. Join a ranger-guided snowshoe walk or venture out on your own through snow-covered meadows and forests.",
    image: "/images/activities/snowshoeing.jpg",
    additionalImages: [
      "/images/activities/ranger-snowshoe.jpg",
      "/images/activities/snowshoe-trail.jpg",
      "/images/activities/winter-vista.jpg"
    ],
    season: "winter"
  }
];

// Group activities by season
const springActivities = activities.filter(activity => activity.season === 'spring');
const summerActivities = activities.filter(activity => activity.season === 'summer');
const fallActivities = activities.filter(activity => activity.season === 'fall');
const winterActivities = activities.filter(activity => activity.season === 'winter');

// Consolidated seasonal activities information
export const seasonalActivities: SeasonalActivities = {
  spring: {
    activities: [
      "Waterfall viewing at peak flow (April-May)",
      "Wildflower blooms in meadows",
      "Hiking lower elevation trails",
      "Rock climbing beginning season",
      "Bird watching as migrants return"
    ],
    image: "/images/seasons/spring-waterfalls.jpg",
    additionalImages: [
      "/images/seasons/spring-wildflowers.jpg",
      "/images/seasons/spring-hiking.jpg",
      "/images/seasons/spring-climbing.jpg"
    ],
    temp: "45-70°F (7-21°C)",
    highlights: "Peak waterfall season, wildflowers",
    detailedActivities: springActivities
  },
  summer: {
    activities: [
      "All park roads open",
      "Full hiking trail access",
      "Swimming in Merced River",
      "Rock climbing peak season",
      "Stargazing programs",
      "High country access"
    ],
    image: "/images/seasons/summer-valley.jpg",
    additionalImages: [
      "/images/seasons/summer-hiking.jpg",
      "/images/seasons/summer-stargazing.jpg",
      "/images/seasons/summer-highcountry.jpg"
    ],
    temp: "65-90°F (18-32°C)",
    highlights: "Best hiking weather, all areas accessible",
    detailedActivities: summerActivities
  },
  fall: {
    activities: [
      "Fall colors in valley (October-November)",
      "Less crowded trails",
      "Pleasant temperatures for hiking",
      "Clear skies for photography",
      "Rock climbing continues"
    ],
    image: "/images/seasons/fall-colors.jpg",
    additionalImages: [
      "/images/seasons/fall-hiking.jpg",
      "/images/seasons/fall-photography.jpg",
      "/images/seasons/fall-climbing.jpg"
    ],
    temp: "50-75°F (10-24°C)",
    highlights: "Fall colors, fewer crowds",
    detailedActivities: fallActivities
  },
  winter: {
    activities: [
      "Skiing at Badger Pass",
      "Snowshoeing trails",
      "Ice skating in valley",
      "Winter photography",
      "Cozy fireplace evenings"
    ],
    image: "/images/seasons/winter-snow.jpg",
    additionalImages: [
      "/images/seasons/winter-skiing.jpg",
      "/images/seasons/winter-snowshoeing.jpg",
      "/images/seasons/winter-ice-skating.jpg"
    ],
    temp: "35-50°F (2-10°C)",
    highlights: "Snow activities, dramatic scenery",
    detailedActivities: winterActivities
  }
}; 