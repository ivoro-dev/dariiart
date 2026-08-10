export type CtaData = {
  heading: string;
  subheading: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

export const ctaData: CtaData = {
  heading: "Have an idea worth bringing to life?",
  subheading:
    "Whether you’re building a new identity, shaping a visual story, or exploring an idea, I’d love to hear what you have in mind.",
  primaryButton: {
    label: "Start a conversation",
    href: "/contact",
  },
  secondaryButton: {
    label: "View my work",
    href: "/work",
  },
};
