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
    id: "moor-perfume",
    title: "MOOR PERFUME",
    description:
      "A visual identity for The Moor Perfume,\ntransforming a generic perfume shop into\nan authentic independent fragrance brand.",
    heroSubtitle:
      "A visual identity for The Moor Perfume,\ntransforming a generic perfume shop into an\nauthentic independent fragrance brand.",
    conceptTag: "Concept Development",
    challengeText:
      "The identity is centred around a portal-like symbol that represents the meeting point between the external world and the inner self, reinforcing the idea of fragrance as an act of self-discovery.",
    quoteText:
      "\"The most personal fragrance isn't\nthe one that changes who you are.\n\nIt's the one that reveals who you've\nalways been.\"",
    videoUrl: "/images/project-11.mp4",
    labels: ["ART DIRECTION", "BRAND IDENTITY", "PACKAGING"],
    category: "Brand Identity",
    year: "2024",
    client: "The Moor Perfume",
    services: ["Brand Strategy", "Visual Identity", "Art Direction", "Packaging"],
    image: "/images/project-2-main.png",
    gallery: [
      "/images/project-2-main.png",
    ],
  },
  {
    id: "the-shadow",
    title: "THE SHADOW",
    description:
      "The Shadow as an open brief from Studio Yukiko,\nbuilt around the question of what can be carried by\na person without leaving a physical trace.",
    heroSubtitle:
      "The Shadow as an open brief from Studio Yukiko,\nbuilt around the question of what can be carried by\na person without leaving a physical trace.",
    conceptTag: "Concept Development",
    challengeText:
      "An experimental short film exploring the\nshadow as a reflection of the inner self and the\nway we interact with it.",
    quoteText:
      "\"How can an abstract idea become something\npeople can emotionally experience?\n\nWe often treat the parts of ourselves that we\ndon't fully understand as something to hide.\"",
    videoUrl: "/images/project-11.mp4",
    labels: ["ART DIRECTION", "CONCEPTUAL THINKING"],
    category: "Art Direction",
    year: "2024",
    client: "Studio Yukiko",
    services: ["Art Direction", "Conceptual Thinking", "Film & Motion"],
    image: "/images/the-shadow.png",
    gallery: [
      "/images/the-shadow.png",
    ],
  },
];

