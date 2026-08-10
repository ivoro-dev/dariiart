export type Project = {
  title: string;
  description: string;
  labels: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "VOLOSHKY",
    description:
      "A brand identity for a Ukrainian dance ensemble that transforms the celebration of one culture into an invitation to celebrate many.",
    labels: ["Art Direction", "Brand Identity"],
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "OAK & IRON",
    description:
      "A conceptual furniture studio exploring the raw tension between natural materials and industrial manufacturing techniques.",
    labels: ["Web Design", "Photography"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "LUMINA",
    description:
      "An experimental light installation highlighting the interaction between spatial geometry and human perception.",
    labels: ["Exhibition", "Art Direction"],
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop",
  },
];
