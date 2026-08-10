export type SocialLink = {
  name: string;
  image: string;
  href: string;
};

export type FooterData = {
  logo: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

export const footerData: FooterData = {
  logo: {
    src: "/assets/logo.png",
    alt: "Dariiarts logo",
  },
  socialLinks: [
    {
      name: "Email",
      image: "/assets/email.png",
      href: "mailto:hello@dariiarts.com",
    },
    {
      name: "LinkedIn",
      image: "/assets/linkedin.png",
      href: "https://linkedin.com",
    },
    {
      name: "Instagram",
      image: "/assets/instagram.png",
      href: "https://instagram.com",
    },
  ],
};
