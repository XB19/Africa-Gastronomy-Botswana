// "delegation": countries of the chefs featured in the FIGA Botswana 2026
// sponsoring dossier. "network": other countries of the Africa Gastronomique
// network shown on the dossier's "Our Ancestral Cuisine" flag chart.
export interface CountryEntry {
  name: string;
  flag: string;
  status: "delegation" | "network";
}

const d = (name: string, flag: string): CountryEntry => ({ name, flag, status: "delegation" });
const n = (name: string, flag: string): CountryEntry => ({ name, flag, status: "network" });

export const countries: CountryEntry[] = [
  d("Botswana", "🇧🇼"),
  d("Cameroon", "🇨🇲"),
  d("Togo", "🇹🇬"),
  d("Burkina Faso", "🇧🇫"),
  d("Uganda", "🇺🇬"),
  d("Ghana", "🇬🇭"),
  d("Nigeria", "🇳🇬"),
  d("Gabon", "🇬🇦"),
  d("Congo-Brazzaville", "🇨🇬"),
  d("Benin", "🇧🇯"),
  d("USA (African Diaspora)", "🇺🇸"),
  n("Algeria", "🇩🇿"),
  n("Angola", "🇦🇴"),
  n("Burundi", "🇧🇮"),
  n("Cape Verde", "🇨🇻"),
  n("Central African Republic", "🇨🇫"),
  n("Chad", "🇹🇩"),
  n("Comoros", "🇰🇲"),
  n("Côte d'Ivoire", "🇨🇮"),
  n("DR Congo", "🇨🇩"),
  n("Djibouti", "🇩🇯"),
  n("Egypt", "🇪🇬"),
  n("Equatorial Guinea", "🇬🇶"),
  n("Eritrea", "🇪🇷"),
  n("Eswatini", "🇸🇿"),
  n("Ethiopia", "🇪🇹"),
  n("Gambia", "🇬🇲"),
  n("Guinea", "🇬🇳"),
  n("Guinea-Bissau", "🇬🇼"),
  n("Kenya", "🇰🇪"),
  n("Lesotho", "🇱🇸"),
  n("Liberia", "🇱🇷"),
  n("Libya", "🇱🇾"),
  n("Madagascar", "🇲🇬"),
  n("Malawi", "🇲🇼"),
  n("Mali", "🇲🇱"),
  n("Mauritania", "🇲🇷"),
  n("Mauritius", "🇲🇺"),
  n("Morocco", "🇲🇦"),
  n("Mozambique", "🇲🇿"),
  n("Namibia", "🇳🇦"),
  n("Niger", "🇳🇪"),
  n("Réunion", "🇷🇪"),
  n("Rwanda", "🇷🇼"),
  n("São Tomé and Príncipe", "🇸🇹"),
  n("Senegal", "🇸🇳"),
  n("Seychelles", "🇸🇨"),
  n("Sierra Leone", "🇸🇱"),
  n("Somalia", "🇸🇴"),
  n("South Africa", "🇿🇦"),
  n("Sudan", "🇸🇩"),
  n("Tanzania", "🇹🇿"),
  n("Tunisia", "🇹🇳"),
  n("Zambia", "🇿🇲"),
  n("Zimbabwe", "🇿🇼"),
];
