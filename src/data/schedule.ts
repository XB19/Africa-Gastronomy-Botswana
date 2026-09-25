export interface ScheduleItem {
  time: string;
  title: string;
  details?: string[];
}

export interface ScheduleDay {
  day: number;
  date: string;
  label: string;
  items: ScheduleItem[];
}

export const schedule: ScheduleDay[] = [
  {
    day: 1,
    date: "11 Nov 2026",
    label: "Opening Ceremony & Industry Engagement",
    items: [
      { time: "08:00 – 10:00", title: "Official Opening Ceremony" },
      { time: "10:00 – 10:30", title: "Botswana Indigenous Cuisine Challenge Tour" },
      { time: "10:30 – 11:30", title: "Tasting Session" },
      {
        time: "11:30 – 13:00",
        title: "Business-to-Business (B2B) Networking Sessions",
        details: [
          "Investors",
          "Chefs and culinary professionals",
          "Tourism operators",
          "Hospitality businesses",
          "Food producers and farmers",
          "Development partners and industry stakeholders",
          "Personal Branding for Culinary Professionals",
        ],
      },
      { time: "13:00 – 14:00", title: "Lunch" },
      { time: "14:00 – 16:00", title: "City Tour", details: ["3 Dikgosi, Museum, Orapa House, Mmankgodi…"] },
    ],
  },
  {
    day: 2,
    date: "12 Nov 2026",
    label: "Pan-African Gastronomy Conference, Innovation & Skills Development",
    items: [
      { time: "08:30 – 09:15", title: "Panel Discussion: Culinary Tourism – Positioning Botswana as a Destination" },
      { time: "09:15 – 10:00", title: "Indigenous Foods and Products – Presentation" },
      { time: "10:00 – 10:30", title: "Country Cuisine Showcase" },
      { time: "10:30 – 11:00", title: "Tea Break" },
      {
        time: "11:00 – 13:00",
        title: "Masterclass Series",
        details: ["African Cuisine Innovation", "Food Styling", "Personal Branding for Culinary Professionals"],
      },
      { time: "13:00 – 14:00", title: "Lunch" },
      { time: "14:00 – 14:45", title: "Culinary Entrepreneurship – Thematic Panel Discussions" },
      { time: "14:45 – 15:30", title: "Intellectual Property in Gastronomy (Presentation)" },
      { time: "15:30 – 16:00", title: "Refreshments" },
      { time: "16:00 – 20:30", title: "Drama" },
    ],
  },
  {
    day: 3,
    date: "13 Nov 2026",
    label: "Exhibition & Trade Fair, Culinary Competitions",
    items: [
      { time: "All day", title: "Exhibition & Trade Fair (open throughout the day)" },
      { time: "08:00 – 10:30", title: "Young African Chef Challenge" },
      { time: "10:30 – 11:00", title: "Tea Break" },
      { time: "11:00 – 12:30", title: "Local Inter Hotel Culinary Competition" },
      { time: "13:00 – 14:00", title: "Break / Refreshments" },
      { time: "14:00 – 19:00", title: "BMC Lobatse, Mogobane Dipopolere Plantation" },
    ],
  },
  {
    day: 4,
    date: "14 Nov 2026",
    label: "Culinary Competitions & Gala Dinner",
    items: [
      { time: "08:00 – 10:30", title: "African Fusion Culinary Competition" },
      { time: "11:00 – 12:30", title: "Plant Based Challenge" },
      { time: "13:00 – 14:00", title: "Break / Refreshments" },
      { time: "18:30 – 19:30", title: "Guest Arrival & Red Carpet Reception" },
      { time: "19:30 – 19:40", title: "Opening & Welcome Remarks" },
      { time: "19:40 – 20:15", title: "Keynote Addresses" },
      { time: "20:15 – 21:15", title: "African Gastronomy Gala Dinner" },
      { time: "21:15 – 22:00", title: "Awards & Recognition Ceremony" },
      { time: "22:00 – 22:30", title: "Closing Toast & Networking" },
    ],
  },
];
