export type Project = {
  id: string;
  title: string;
  description: string;
  heroSubtitle?: string;
  conceptTag?: string;
  challengeText?: string;
  quoteText?: string;
  videoUrl?: string;
  labels: string[];
  image: string;
  category: string;
  year: string;
  client?: string;
  services?: string[];
  longDescription?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    id: "voloshky",
    title: "VOLOSHKY",
    description:
      "A brand identity for a Ukrainian dance ensemble that transforms the celebration of one culture into an invitation to celebrate many.",
    heroSubtitle:
      "Voloshky Ukrainian Dance Ensemble, a Ukrainian dance company based in the United States, was preparing a world tour across Africa, America, Asia, and Europe.",
    conceptTag: "Concept Development",
    challengeText:
      "Create a visual identity for a Ukrainian dance ensemble's world tour that celebrates Ukrainian heritage while embracing the cultural identity of every destination.",
    quoteText:
      "\"Celebrating one culture can become an invitation to celebrate many.\"",
    videoUrl: "/images/project-11.mp4",
    labels: ["ART DIRECTION", "BRAND IDENTITY"],
    category: "Brand Identity",
    year: "2024",
    client: "Voloshky Ensemble",
    services: ["Brand Strategy", "Visual Identity", "Art Direction", "Print & Packaging"],
    image: "/assets/project-1.png",
    gallery: [
      "/assets/project-1.png",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "oak-and-iron",
    title: "OAK & IRON",
    description:
      "A conceptual furniture studio exploring the raw tension between natural materials and industrial manufacturing techniques.",
    longDescription:
      "Oak & Iron is a bespoke furniture studio operating at the intersection of raw craftsmanship and refined modernism. The digital experience captures the tactile quality of raw timber and steel through high-contrast imagery, minimalist spatial layout, and fluid motion design.",
    labels: ["Web Design", "Photography"],
    category: "Web Design",
    year: "2024",
    client: "Oak & Iron Studio",
    services: ["E-Commerce", "Web Design", "Art Direction", "3D Visualization"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "lumina",
    title: "LUMINA",
    description:
      "An experimental light installation highlighting the interaction between spatial geometry and human perception.",
    longDescription:
      "Lumina is a spatial installation commissioned for a contemporary art triennial. The project explores light as a physical architectural material, creating shifting geometric volumes in reaction to visitor movement.",
    labels: ["Exhibition", "Art Direction"],
    category: "Exhibition",
    year: "2023",
    client: "Spatial Art Foundation",
    services: ["Spatial Design", "Exhibition", "Art Direction"],
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "aetheria",
    title: "AETHERIA",
    description:
      "A immersive digital archive and generative visual experience for contemporary sonic performances.",
    longDescription:
      "Aetheria synthesizes live audio data into real-time 3D generative visuals. Designed for progressive ambient musicians, the system translates timbre and resonance into reactive light landscapes.",
    labels: ["Digital Experience", "Art Direction"],
    category: "Digital Experience",
    year: "2023",
    client: "Aetheria Collective",
    services: ["Generative Art", "Digital Experience", "Sound Reactive UI"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "atelier-k",
    title: "ATELIER K",
    description:
      "Editorial packaging and visual identity system for a high-end sustainable ceramics house.",
    longDescription:
      "Atelier K produces handcrafted ceramic homeware built to endure generations. We developed a tactile brand system featuring tactile unbleached paper stocks, blind debossing, and warm organic color palettes.",
    labels: ["Brand Identity", "Packaging"],
    category: "Brand Identity",
    year: "2023",
    client: "Atelier K Ceramics",
    services: ["Brand Identity", "Packaging Design", "Art Direction"],
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "monolith",
    title: "MONOLITH",
    description:
      "Spatial typography and environmental graphic design for an international architecture exhibition.",
    longDescription:
      "Monolith explores heavy concrete structures through dramatic typographic scale and environmental graphics across 4,000 square meters of exhibition space.",
    labels: ["Exhibition", "Web Design"],
    category: "Exhibition",
    year: "2022",
    client: "International Arch Biennale",
    services: ["Wayfinding", "Exhibition Design", "Editorial"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];
