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
      href: "mailto:dariiart.creative@gmail.com",
    },
    {
      name: "LinkedIn",
      image: "/assets/linkedin.png",
      href: "https://www.linkedin.com/in/dariia-chervoniak-720542299/",
    },
    {
      name: "Instagram",
      image: "/assets/instagram.png",
      href: "https://www.instagram.com/dariia_chervoniak/?hl=en",
    },
  ],
};
