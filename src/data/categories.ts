import { icons } from "../lib/icons";
import { sponsorPackages } from "./partners";

export type CategoryIconKey = "wine-glass" | "id-badge" | "chalkboard" | "store" | "handshake" | "medal" | "star" | "trophy";

export const categoryIconMap: Record<CategoryIconKey, typeof icons.trophy> = {
  "wine-glass": icons.wineGlass,
  "id-badge": icons.idBadge,
  chalkboard: icons.chalkboard,
  store: icons.store,
  handshake: icons.handshake,
  medal: icons.medal,
  star: icons.star,
  trophy: icons.trophy,
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

const iconById: Record<string, CategoryIconKey> = {
  diamond: "star",
  platinum: "trophy",
  gold: "medal",
  silver: "medal",
  bronze: "medal",
  "exhibition-partner": "store",
  "standard-exhibition": "store",
};

export const registrationCategories: RegistrationCategory[] = sponsorPackages.map((pkg) => ({
  id: pkg.id,
  name: pkg.name,
  price: pkg.price,
  description:
    pkg.kind === "sponsor"
      ? "Sponsorship package for FIGA Botswana 2026."
      : "Exhibition space at the FIGA Botswana 2026 Exhibition & Trade Fair.",
  perks: pkg.benefits.slice(0, 4),
  icon: iconById[pkg.id],
  featured: pkg.id === "diamond",
}));
