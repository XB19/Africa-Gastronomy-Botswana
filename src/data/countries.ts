// Placeholder sample list — replace with the confirmed delegation list via
// the CMS once countries have formally confirmed participation.
export interface CountryEntry {
  name: string;
  flag: string;
  status: "confirmed" | "invited";
}

export const countries: CountryEntry[] = [
  { name: "Botswana", flag: "🇧🇼", status: "confirmed" },
  { name: "South Africa", flag: "🇿🇦", status: "confirmed" },
  { name: "Namibia", flag: "🇳🇦", status: "confirmed" },
  { name: "Zambia", flag: "🇿🇲", status: "confirmed" },
  { name: "Zimbabwe", flag: "🇿🇼", status: "confirmed" },
  { name: "Kenya", flag: "🇰🇪", status: "invited" },
  { name: "Nigeria", flag: "🇳🇬", status: "invited" },
  { name: "Ghana", flag: "🇬🇭", status: "invited" },
  { name: "Tanzania", flag: "🇹🇿", status: "invited" },
  { name: "Mozambique", flag: "🇲🇿", status: "invited" },
  { name: "Ethiopia", flag: "🇪🇹", status: "invited" },
  { name: "Senegal", flag: "🇸🇳", status: "invited" },
  { name: "Rwanda", flag: "🇷🇼", status: "invited" },
  { name: "Angola", flag: "🇦🇴", status: "invited" },
  { name: "Malawi", flag: "🇲🇼", status: "invited" },
  { name: "Mauritius", flag: "🇲🇺", status: "invited" },
  { name: "Uganda", flag: "🇺🇬", status: "invited" },
  { name: "Côte d'Ivoire", flag: "🇨🇮", status: "invited" },
  { name: "Egypt", flag: "🇪🇬", status: "invited" },
  { name: "Morocco", flag: "🇲🇦", status: "invited" },
];
