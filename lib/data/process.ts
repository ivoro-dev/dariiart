export type ProcessStep = {
  id: number;
  number: string;
  title: string;
  description: string;
  // Percentage coordinates for desktop SVG path alignment
  nodePos: {
    x: number;
    y: number;
  };
};

export type ProcessSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  steps: ProcessStep[];
};

export const processData: ProcessSectionData = {
  eyebrow: "FROM IDEA TO VISUAL LANGUAGE",
  title: "A thoughtful process behind every piece of work",
  description:
    "I keep my process simple and structured, while leaving room for exploration. Each project begins with understanding the idea, then develops through research, experimentation, and visual refinement.",
  buttonText: "Get Started",
  buttonHref: "/contact",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discover",
      description:
        "Understanding the brief, purpose, audience, and story behind the project.",
      nodePos: { x: 18, y: 72 },
    },
    {
      id: 2,
      number: "02",
      title: "Explore",
      description:
        "Researching ideas, references, and visual directions before shaping the strongest concept.",
      nodePos: { x: 50, y: 55 },
    },
    {
      id: 3,
      number: "03",
      title: "Create",
      description:
        "Turning the chosen direction into a refined, purposeful visual identity.",
      nodePos: { x: 80, y: 22 },
    },
  ],
};

