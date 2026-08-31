export interface AboutHeroData {
  title: string;
  subtitlePre: string;
  artDirectorImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  subtitlePost: string;
  labels: string[];
  description: string;
}

export const aboutHeroData: AboutHeroData = {
  title: "About Me",
  subtitlePre: "I'm Dariia Chervoniak, an independent ",
  artDirectorImage: {
    src: "/assets/art-director.png",
    alt: "Art Director",
    width: 210,
    height: 48,
  },
  subtitlePost: " and Graphic Designer based in the UK.",
  labels: ["creative strategy", "concept development", "brand identity"],
  description:
    "I collaborate with cultural organisations, creative businesses, arts organisations and purpose-driven brands to uncover what makes them distinctive and translate it into compelling visual identities, campaigns and experiences.",
};

export interface AboutVideoData {
  videoSrc: string;
  verticalImageSrc: string;
  verticalImageAlt: string;
  practiceText: string;
  ctaText: string;
  ctaHref: string;
}

export const aboutVideoData: AboutVideoData = {
  videoSrc: "/assets/about-me.mp4",
  verticalImageSrc: "/assets/about.png",
  verticalImageAlt: "A brand is not something I create. It something I uncover.",
  practiceText:
    "My practice is shaped by a background in fine art and graphic design, alongside experience working across branding, digital design, cultural projects and independent creative practice.",
  ctaText: "See my work",
  ctaHref: "/work",
};
