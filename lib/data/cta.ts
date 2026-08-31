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
  heading: "Let's uncover something meaningful.",
  subheading:
    "Have an idea, organisation or story that needs a stronger visual voice?",
  primaryButton: {
    label: "Start a conversation",
    href: "/contact",
  },
  secondaryButton: {
    label: "View my work",
    href: "/work",
  },
};
