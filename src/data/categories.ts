import { icons } from "../lib/icons";

export type CategoryIconKey = "wine-glass" | "id-badge" | "chalkboard" | "store" | "handshake";

export const categoryIconMap: Record<CategoryIconKey, typeof icons.trophy> = {
  "wine-glass": icons.wineGlass,
  "id-badge": icons.idBadge,
  chalkboard: icons.chalkboard,
  store: icons.store,
  handshake: icons.handshake,
};

export interface RegistrationCategory {
  id: string;
  name: string;
  price: string;
  description: string;
  perks: string[];
  icon: CategoryIconKey;
  featured?: boolean;
}

export const registrationCategories: RegistrationCategory[] = [
  {
    id: "full-pass",
    name: "Full Pass",
    price: "From BWP 2,500",
    description: "Full access to all four days — competitions, masterclasses, exhibitions and the gala dinner.",
    perks: ["All 4 days of access", "Masterclass seating", "Gala Dinner ticket included", "Delegate welcome pack"],
    icon: "id-badge",
    featured: true,
  },
  {
    id: "gala-dinner",
    name: "Gala Dinner",
    price: "From BWP 950",
    description: "A single ticket to the signature closing Gala Dinner celebrating African flavours.",
    perks: ["Gala Dinner seating", "Welcome cocktail", "Live entertainment"],
    icon: "wine-glass",
  },
  {
    id: "masterclasses",
    name: "Masterclasses",
    price: "From BWP 450 per session",
    description: "Hands-on masterclass sessions led by celebrated chefs and culinary educators.",
    perks: ["Choice of sessions", "Ingredients & materials included", "Certificate of participation"],
    icon: "chalkboard",
  },
  {
    id: "exhibitions",
    name: "Exhibition Stall",
    price: "From BWP 3,500",
    description: "Showcase your brand or products with a dedicated stall across the event.",
    perks: ["3x3m stall space", "Exhibitor listing", "2 exhibitor passes"],
    icon: "store",
  },
  {
    id: "sponsorship",
    name: "Sponsorship",
    price: "Custom package",
    description: "Partner with FIGA Botswana 2026 across visibility, hospitality and activation tiers.",
    perks: ["Brand visibility", "VIP hospitality", "Speaking & activation opportunities"],
    icon: "handshake",
  },
];
