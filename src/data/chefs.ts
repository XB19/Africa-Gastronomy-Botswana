import { kitchenImages, pick } from "../lib/images";

// Placeholder chef & speaker slots. Real names, biographies, expertise and
// achievements are to be added via the CMS as profiles are confirmed —
// intentionally left generic here rather than inventing biographical detail.
export interface ChefProfile {
  id: string;
  role: string;
  category: "Chef" | "Speaker" | "Judge";
  image: string;
}

export const chefProfiles: ChefProfile[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `chef-${i + 1}`,
  role: `Chef Profile ${String(i + 1).padStart(2, "0")}`,
  category: i % 3 === 2 ? "Judge" : i % 2 === 0 ? "Chef" : "Speaker",
  image: pick(kitchenImages, i),
}));
