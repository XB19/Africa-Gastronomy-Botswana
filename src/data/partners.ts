export interface SponsorPackage {
  id: string;
  name: string;
  price: string;
  kind: "sponsor" | "exhibition";
  benefits: string[];
}

export const sponsorPackages: SponsorPackage[] = [
  {
    id: "diamond",
    name: "Diamond Partner",
    price: "P750,000+",
    kind: "sponsor",
    benefits: [
      "Exclusive naming rights: “FIGA Botswana 2026 Presented by [Sponsor]”",
      "Exclusive Diamond Partner status",
      "Premium logo placement on all event branding, promotional materials, media campaigns, official publications and social media platforms",
      "Exclusive branding of the Main Stage, Opening Ceremony and Gala Dinner",
      "Branding on official chef jackets, delegate lanyards, accreditation badges and selected event merchandise",
      "Opportunity to deliver keynote remarks during the Official Opening Ceremony",
      "Opportunity to present prestigious competition awards",
      "Premium exhibition in a prime location",
      "Twenty (20) VIP delegate passes throughout the week",
      "1 VIP table at the African Gastronomy Gala Dinner",
      "Participation in media interviews, press conferences and promotional campaigns",
      "Recognition in the official event documentary and post-event report",
      "Exclusive networking opportunities with government leaders, investors, tourism executives and international delegates",
    ],
  },
  {
    id: "platinum",
    name: "Platinum Partner",
    price: "P250,000+",
    kind: "sponsor",
    benefits: [
      "Prominent logo placement across all event branding and marketing materials",
      "Branding on the official website and digital platforms",
      "Speaking opportunity during a conference session or panel discussion",
      "Premium 6m × 3m exhibition stand",
      "VIP Gala Dinner table",
      "Ten (10) complimentary delegate passes",
      "Recognition during the Opening and Closing Ceremonies",
      "Participation in media engagements and official press releases",
      "Access to exclusive business networking sessions and B2B meetings",
      "First right of renewal for the next edition of FIGA Botswana",
    ],
  },
  {
    id: "gold",
    name: "Gold Partner",
    price: "P150,000+",
    kind: "sponsor",
    benefits: [
      "Logo placement on event branding, publications and digital platforms",
      "Exhibition stand in the trade fair",
      "Six (6) complimentary delegate passes",
      "Two (2) VIP invitations to the Opening Ceremony and Gala Dinner",
      "Brand recognition during official proceedings",
      "Social media promotion before and during the event",
      "Opportunity to provide branded promotional items in delegate packs",
    ],
  },
  {
    id: "silver",
    name: "Silver Partner",
    price: "P75,000+",
    kind: "sponsor",
    benefits: [
      "Logo displayed on the official event website and sponsor boards",
      "Exhibition stand allocation",
      "Four (4) complimentary delegate passes",
      "Recognition on social media and on the official programme",
      "Inclusion in sponsor appreciation and acknowledgement activities",
    ],
  },
  {
    id: "bronze",
    name: "Bronze Partner",
    price: "P25,000+",
    kind: "sponsor",
    benefits: [
      "Logo displayed on the official sponsor recognition board",
      "Recognition on the event website",
      "Two (2) complimentary delegate passes",
      "Inclusion in sponsor acknowledgement during the event",
      "Opportunity to participate in networking activities",
    ],
  },
  {
    id: "exhibition-partner",
    name: "Exhibition Partner",
    price: "P10,000+",
    kind: "exhibition",
    benefits: [
      "Prime exhibition location",
      "3m × 3m branded exhibition space",
      "Four (4) exhibitor passes",
      "Company profile in the official event programme",
      "Digital recognition on the event website",
    ],
  },
  {
    id: "standard-exhibition",
    name: "Standard Exhibition",
    price: "P5,000+",
    kind: "exhibition",
    benefits: [
      "3m × 3m exhibition space",
      "Two (2) exhibitor passes",
      "Company listing in the official event programme",
      "Opportunity to engage directly with delegates, buyers and investors",
    ],
  },
];

export interface PartnerGroup {
  title: string;
  partners: string[];
}

export const strategicPartners: PartnerGroup[] = [
  {
    title: "Strategic Tourism & Destination Partners",
    partners: [
      "Botswana Tourism Organisation (BTO)",
      "Air Botswana",
      "Wilderness Safaris",
      "Roots & Journeys",
      "Ministry of Youth and Gender Affairs",
      "Ministry of Tourism",
      "Hospitality and Tourism Association of Botswana",
    ],
  },
  {
    title: "Strategic Economic Diversification Partners",
    partners: ["Debswana", "Lucara Botswana", "Botswana Investment and Trade Centre (BITC)"],
  },
  {
    title: "Strategic Agrifood & Culinary Partners",
    partners: [
      "Botswana Meat Commission (BMC)",
      "Senn Foods",
      "Choppies Group",
      "Sefalana Group",
      "Safari Distributors",
      "Botswana Agricultural Marketing Board",
    ],
  },
  {
    title: "Strategic Financial & Innovation Partners",
    partners: [
      "FNB Botswana",
      "Absa Botswana",
      "Stanbic Bank Botswana",
      "Orange Botswana",
      "Mascom Wireless",
      "Letshego",
      "CEDA",
    ],
  },
];
