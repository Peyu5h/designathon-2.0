export const assets = {
  hero: {
    gdgLogo: "/images/gdg-logo.png",
    astronaut: "https://res.cloudinary.com/dunayy41e/image/upload/v1771742929/astronaut_mr0lus.png",
    bolt: "https://res.cloudinary.com/dunayy41e/image/upload/v1771742981/bolt_a7pf3k.png",
    laptop: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744434/laptop_utysp1.png",
    topleftCamera: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744435/topleft-camera_n18rio.png",
    toprightCamera: "https://res.cloudinary.com/dunayy41e/image/upload/v1771742928/topright-camera_vpetvk.png",
    bottomrightCamera: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744422/bottomright-camera_i1fv8a.png",
  },
  missionLogs: {
    drill: "https://res.cloudinary.com/dunayy41e/video/upload/v1771837553/drill_nwxdf7.webm",
    sponge: "https://res.cloudinary.com/dunayy41e/video/upload/v1771837553/sponge_os4vab.webm",
    mesh: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744612/mesh_xtkjvq.svg",
    milkyway: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744447/milkyway_sidata.png",
    arrowFilled: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744462/rightArrow_filled_zjlghc.svg",
    arrowOutline: "https://res.cloudinary.com/dunayy41e/image/upload/v1771744610/rightArrow_outline_eyqsbg.svg",
  },
  timeline: {
    path: "images/timeline/timelinePathFinalv3.svg",
    venueFinal: "images/timeline/venue_final.png",
    rectangle: "images/timeline/rectangle.svg",
    galaxy1: "images/timeline/galaxy_1.avif",
    galaxy1Details: "images/timeline/galaxy_1_details.svg",
    galaxy2: "images/timeline/galaxy_2.avif",
    galaxy2Details: "images/timeline/galaxy_2_details.svg",
    galaxy3: "images/timeline/galaxy_3.avif",
    galaxy3Details: "images/timeline/galaxy_3_details.svg",
    galaxy4: "images/timeline/galaxy_4.avif",
    galaxy4Details: "images/timeline/galaxy_4_details.svg",
    galaxy5: "images/timeline/galaxy_5.avif",
    galaxy5Details: "images/timeline/galaxy_5_details.svg",
    galaxy6: "images/timeline/galaxy_6.png",
    galaxy6Details: "images/timeline/galaxy_6_details.svg",
    locationPin: "images/timeline/location-pin.svg",
  },
  guidelines: {
    galaxyImage: "/images/Guidelines/Galaxy-image.jpg",
  },
  faqs: {
    background: "/images/faq/faq_bg.png",
    gif: "/gif/FAQ.gif",
    jupiter: "/images/faq/jupiter.png",
  },
} as const;

// above-fold assets that block the preloader
export const criticalAssets: string[] = [
  assets.hero.gdgLogo,
  assets.hero.astronaut,
  assets.hero.bolt,
  assets.hero.laptop,
  assets.hero.topleftCamera,
  assets.hero.toprightCamera,
  assets.hero.bottomrightCamera,
  assets.missionLogs.mesh,
  assets.missionLogs.milkyway,
];

// below-fold assets preloaded in background after page shows
export const deferredAssets: string[] = [
  assets.missionLogs.drill,
  assets.missionLogs.sponge,
  assets.guidelines.galaxyImage,
  assets.faqs.gif,
  assets.timeline.venueFinal,
];
