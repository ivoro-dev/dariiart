export interface ContactHeroData {
  headingImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  subtitle: string;
  leftParagraph: string;
  rightParagraph: string;
}

export const contactHeroData: ContactHeroData = {
  headingImage: {
    src: "/assets/contact-head.png",
    alt: "What are we uncovering?",
    width: 720,
    height: 180,
  },
  subtitle: "Every project starts with a question.",
  leftParagraph:
    "If you have an organisation, idea or story that needs a visual language, let's explore what is already there and find the best way to bring it to life.",
  rightParagraph:
    "I'm available for Art Direction, Brand Identity, Creative Strategy, Concept creation and Graphic Design.",
};

export interface ContactDetailsData {
  heading: string;
  subtitle: string;
  emailLabelImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  email: string;
  phoneLabelImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  phone: string;
  videoBgImage: {
    src: string;
    alt: string;
  };
  videoSrc: string;
}

export const contactDetailsData: ContactDetailsData = {
  heading: "Get in touch",
  subtitle: "For collaborations, commissions and enquiries:",
  emailLabelImage: {
    src: "/assets/email.png",
    alt: "Email",
    width: 150,
    height: 64,
  },
  email: "dariart.creative@gmail.com",
  phoneLabelImage: {
    src: "/assets/phone.png",
    alt: "Phone",
    width: 150,
    height: 78,
  },
  phone: "+447493829280",
  videoBgImage: {
    src: "/assets/video-bg.png",
    alt: "Video background doodle frame",
  },
  videoSrc: "/assets/contact.mp4",
};

