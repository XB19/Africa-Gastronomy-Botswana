export type ProgrammeType = "masterclass" | "competition" | "exhibition";

export interface Programme {
  id: string;
  type: ProgrammeType;
  title: string;
  description: string;
  day: string;
  time: string;
  icon: "chef-hat" | "trophy" | "store" | "utensils" | "wine-glass" | "seedling";
}

export const programmes: Programme[] = [
  {
    id: "mc-african-cuisine-innovation",
    type: "masterclass",
    title: "African Cuisine Innovation",
    description: "Part of the Masterclass Series of the Pan-African Gastronomy Conference, Innovation & Skills Development day.",
    day: "Day 2 · 12 Nov",
    time: "11:00 – 13:00",
    icon: "chef-hat",
  },
  {
    id: "mc-food-styling",
    type: "masterclass",
    title: "Food Styling",
    description: "Part of the Masterclass Series of the Pan-African Gastronomy Conference, Innovation & Skills Development day.",
    day: "Day 2 · 12 Nov",
    time: "11:00 – 13:00",
    icon: "utensils",
  },
  {
    id: "mc-personal-branding",
    type: "masterclass",
    title: "Personal Branding for Culinary Professionals",
    description: "Part of the Masterclass Series, and of the Day 1 B2B networking sessions, for chefs and culinary professionals.",
    day: "Day 2 · 12 Nov",
    time: "11:00 – 13:00",
    icon: "seedling",
  },
  {
    id: "cp-young-african-chef",
    type: "competition",
    title: "Young African Chef Challenge",
    description: "A culinary competition for young African chefs, forming part of the Day 3 competition programme.",
    day: "Day 3 · 13 Nov",
    time: "08:00 – 10:30",
    icon: "trophy",
  },
  {
    id: "cp-inter-hotel",
    type: "competition",
    title: "Local Inter Hotel Culinary Competition",
    description: "Botswana hotels compete in a local inter-hotel culinary competition.",
    day: "Day 3 · 13 Nov",
    time: "11:00 – 12:30",
    icon: "trophy",
  },
  {
    id: "cp-african-fusion",
    type: "competition",
    title: "African Fusion Culinary Competition",
    description: "A Day 4 competition celebrating African fusion cuisine, ahead of the Gala Dinner and Awards Ceremony.",
    day: "Day 4 · 14 Nov",
    time: "08:00 – 10:30",
    icon: "trophy",
  },
  {
    id: "cp-plant-based",
    type: "competition",
    title: "Plant Based Challenge",
    description: "A Day 4 competition dedicated to plant-based cooking.",
    day: "Day 4 · 14 Nov",
    time: "11:00 – 12:30",
    icon: "seedling",
  },
  {
    id: "ex-trade-fair",
    type: "exhibition",
    title: "Exhibition & Trade Fair",
    description: "Open throughout the day: producers, SMEs, hospitality and tourism businesses engage directly with delegates, buyers and investors.",
    day: "Day 3 · 13 Nov",
    time: "Open all day",
    icon: "store",
  },
  {
    id: "ex-gala-dinner",
    type: "exhibition",
    title: "African Gastronomy Gala Dinner & Awards Ceremony",
    description:
      "Red carpet reception, keynote addresses, the Gala Dinner, awards and recognition, and a closing toast.",
    day: "Day 4 · 14 Nov",
    time: "18:30 – 22:30",
    icon: "wine-glass",
  },
];

export function programmesByType(type: ProgrammeType): Programme[] {
  return programmes.filter((p) => p.type === type);
}
