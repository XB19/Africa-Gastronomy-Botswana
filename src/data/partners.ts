// Placeholder partner/sponsor slots — no logos supplied yet. Replace each
// slot with a real partner name + logo via the CMS as agreements are signed.
export interface PartnerTier {
  tier: "Headline" | "Gold" | "Silver" | "Supporting";
  slots: number;
}

export const partnerTiers: PartnerTier[] = [
  { tier: "Headline", slots: 1 },
  { tier: "Gold", slots: 3 },
  { tier: "Silver", slots: 4 },
  { tier: "Supporting", slots: 6 },
];
