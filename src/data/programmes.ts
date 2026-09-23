export type ProgrammeType = "masterclass" | "competition" | "exhibition";

export interface Programme {
  id: string;
  type: ProgrammeType;
  title: string;
  description: string;
  day: string;
  icon: "chef-hat" | "trophy" | "store" | "utensils" | "wine-glass" | "seedling";
}

export const programmes: Programme[] = [
  {
    id: "mc-indigenous-ingredients",
    type: "masterclass",
    title: "Indigenous Ingredients Masterclass",
    description:
      "A hands-on session exploring sorghum, millet, morogo and other indigenous ingredients with leading chefs.",
    day: "Day 1 · 11 Nov",
    icon: "seedling",
  },
  {
    id: "mc-modern-african-plating",
    type: "masterclass",
    title: "Modern African Plating",
    description:
      "Contemporary plating techniques applied to traditional Southern African dishes.",
    day: "Day 2 · 12 Nov",
    icon: "utensils",
  },
  {
    id: "mc-pastry-baking",
    type: "masterclass",
    title: "African Pastry & Baking",
    description:
      "From steamed breads to modern patisserie inspired by African flavours.",
    day: "Day 2 · 12 Nov",
    icon: "chef-hat",
  },
  {
    id: "cp-national-chef-challenge",
    type: "competition",
    title: "National Chef Challenge",
    description:
      "Botswana's top chefs compete for the national title in a live cook-off judged by an international panel.",
    day: "Day 1 · 11 Nov",
    icon: "trophy",
  },
  {
    id: "cp-pan-african-team",
    type: "competition",
    title: "Pan-African Team Competition",
    description:
      "Teams representing participating countries showcase signature dishes rooted in national heritage.",
    day: "Day 3 · 13 Nov",
    icon: "trophy",
  },
  {
    id: "cp-young-chefs",
    type: "competition",
    title: "Young Chefs of Africa",
    description:
      "A competition spotlighting emerging culinary talent aged 18–25 from across the continent.",
    day: "Day 2 · 12 Nov",
    icon: "trophy",
  },
  {
    id: "ex-producers-market",
    type: "exhibition",
    title: "Producers & Ingredients Market",
    description:
      "Local and regional producers showcase indigenous ingredients, spices and artisanal products.",
    day: "Day 1–4",
    icon: "store",
  },
  {
    id: "ex-brand-activations",
    type: "exhibition",
    title: "Brand & Partner Activations",
    description:
      "Exhibition stalls for hospitality brands, equipment suppliers and culinary institutions.",
    day: "Day 1–4",
    icon: "store",
  },
  {
    id: "ex-gala-dinner",
    type: "exhibition",
    title: "Closing Gala Dinner",
    description:
      "A signature evening celebrating African flavours, closing FIGA Botswana 2026 in style.",
    day: "Day 4 · 14 Nov",
    icon: "wine-glass",
  },
];

export function programmesByType(type: ProgrammeType): Programme[] {
  return programmes.filter((p) => p.type === type);
}
