// Centralised access to the photography library shipped with the project.
// Vite's import.meta.glob eagerly resolves every file into a hashed URL at
// build time, so new photos just need to be dropped into the folders below.

const foodModules = import.meta.glob("../assets/food/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const kitchenModules = import.meta.glob("../assets/kitchen/*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function sortedValues(modules: Record<string, string>): string[] {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key]);
}

export const foodImages: string[] = sortedValues(foodModules);
export const kitchenImages: string[] = sortedValues(kitchenModules);

export function pick(list: string[], index: number): string {
  return list[index % list.length];
}

import gaborone from "../assets/event/gaborone.jpg";
import team from "../assets/event/team.jpg";
import classroom from "../assets/event/class.jpg";
import certificates from "../assets/event/certificates.jpg";
import audience from "../assets/event/audience.jpg";
import hotelGroup from "../assets/event/hotel-group.jpg";
import chefsGroup from "../assets/event/chefs-group.jpg";
import togoGroup from "../assets/event/togo-group.jpg";
import fruitCarving from "../assets/event/fruit-carving.jpg";
import meeting from "../assets/event/meeting-2.jpg";

// Photographs taken from the FIGA Botswana 2026 sponsoring dossier.
export const eventPhotos = {
  gaborone,
  team,
  classroom,
  certificates,
  audience,
  hotelGroup,
  chefsGroup,
  togoGroup,
  fruitCarving,
  meeting,
};

export const eventGallery: string[] = [
  gaborone,
  team,
  classroom,
  certificates,
  audience,
  hotelGroup,
  chefsGroup,
  togoGroup,
  fruitCarving,
  meeting,
];

const ugandaFoodModules = import.meta.glob("../assets/uganda/food/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const ugandaChallengeModules = import.meta.glob("../assets/uganda/challenge/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Photographs of the 2nd Hospitality Skills Challenge 2026 (HTTC Campus Jinja, Uganda).
export const ugandaFood: string[] = sortedValues(ugandaFoodModules);
export const ugandaChallenge: string[] = sortedValues(ugandaChallengeModules);
