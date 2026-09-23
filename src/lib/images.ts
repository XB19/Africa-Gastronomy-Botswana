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
