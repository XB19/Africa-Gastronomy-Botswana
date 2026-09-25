import monana from "../assets/chefs/monana.jpg";
import joseph from "../assets/chefs/joseph.jpg";
import lopez from "../assets/chefs/lopez.jpg";
import rodrigue from "../assets/chefs/rodrigue.jpg";
import sheila from "../assets/chefs/sheila.jpg";
import felix from "../assets/chefs/felix.jpg";
import winfred from "../assets/chefs/winfred.jpg";
import faustina from "../assets/chefs/faustina.jpg";
import raphael from "../assets/chefs/raphael.jpg";
import richard from "../assets/chefs/richard.jpg";
import bienvenu from "../assets/chefs/bienvenu.jpg";

export type ChefGroup = "botswana" | "founder" | "international";

export interface ChefProfile {
  id: string;
  name: string;
  country: string;
  flags: string;
  title: string;
  group: ChefGroup;
  bio: string[];
  image: string;
}

export const chefGroups: { key: ChefGroup; title: string }[] = [
  { key: "botswana", title: "Chefs from Africa Gastronomique Botswana" },
  { key: "founder", title: "Founder of the Africa Gastronomique Organisation" },
  { key: "international", title: "Chefs from other African countries" },
];

export const chefProfiles: ChefProfile[] = [
  {
    id: "monana-motswaledi",
    name: "Chef Monana Motswaledi",
    country: "Botswana",
    flags: "🇧🇼",
    title: "President, Africa Gastronomique Botswana",
    group: "botswana",
    image: monana,
    bio: [
      "A renowned chef and entrepreneur from Botswana, recognized for her commitment to culinary education and the development of African gastronomy. An influential businesswoman, she is the president of the Africa Gastronomique Botswana association, through which she actively promotes local and continental culinary heritage.",
      "She is also the founder and managing director of the Gaborone College of Culinary Art (GCCA), an institution dedicated to training chefs and hospitality professionals. Co-founder of African Chef Mentors, she works to support and mentor young African culinary talent, contributing to the emergence of a new generation of skilled and ambitious chefs.",
    ],
  },
  {
    id: "joseph-lancma",
    name: "Chef Joseph Lancma",
    country: "Cameroon",
    flags: "🇨🇲",
    title: "Founder, Africa Gastronomique Organisation",
    group: "founder",
    image: joseph,
    bio: [
      "A Cameroonian chef recognized for his major role in the large-scale development of African gastronomy. Founder of the Africa Gastronomic Organization, now present in 35 African countries, he actively works to structure and promote culinary professions on the continent.",
      "A culinary coach and hospitality consultant, he specializes in the installation and commissioning of professional kitchens and the training of Food & Beverage teams. Through his expertise and commitment, he contributes to raising the standards of African cuisine and training a new generation of qualified professionals.",
    ],
  },
  {
    id: "lopez-ahligo",
    name: "Chef Lopez Ahligo",
    country: "Togo · USA",
    flags: "🇹🇬 🇺🇸",
    title: "Vice-President, Africa Gastronomique Togo",
    group: "international",
    image: lopez,
    bio: [
      "A hospitality and restaurant professional and entrepreneur of Togolese and American nationality. After several years of experience in the United States, he returned to Togo with the desire to pass on his know-how and expertise to African youth. A recognized artist in fruit and vegetable carving, he combines culinary creativity with a passion for training.",
      "Vice-President of Africa Gastronomique Togo, he is currently a hospitality consultant, owner and Executive Chef of Talier À Volonté and the recycling and placement agency EHR Sarl. Through his various initiatives, he actively contributes to the development of the gastronomy and hospitality industries in Africa.",
    ],
  },
  {
    id: "rodrigue-sourou-agbo",
    name: "Chef Rodrigue Sourou Agbo",
    country: "Burkina Faso",
    flags: "🇧🇫",
    title: "Secretary General, Africa Gastronomique Burkina Faso",
    group: "international",
    image: rodrigue,
    bio: [
      "A master pastry chef renowned for his excellence and remarkable career in the world of gastronomy. Secretary General of the Africa Gastronomique Burkina Faso association, he actively contributes to the promotion of African culinary expertise.",
      "Awarded five world gold medals in desserts, he has established himself as an international pastry authority. An international culinary judge and distinguished on several national and international stages, he embodies high standards, creativity, and the transmission of gastronomic excellence.",
    ],
  },
  {
    id: "sheila-ahabwe",
    name: "Chef Sheila Ahabwe",
    country: "Uganda",
    flags: "🇺🇬",
    title: "President, Africa Gastronomique Uganda",
    group: "international",
    image: sheila,
    bio: [
      "A Ugandan chef and culinary entrepreneur, and a leading figure in East African gastronomy. President of Africa Gastronomique Uganda and Vice-President of the Ugandan Chefs Association, she plays a key role in promoting and elevating Ugandan cuisine on the international stage. Regularly representing her country at culinary events around the world, she showcases authentic, modern, and ambitious African cuisine.",
      "She is also the Managing Director and owner of Vine Culinary & Hospitality School and the catering service Vine Kitchen, through which she trains and mentors future professionals in the culinary and hospitality industries.",
    ],
  },
  {
    id: "felix-norman",
    name: "Chef Felix Norman",
    country: "Togo · USA",
    flags: "🇹🇬 🇺🇸",
    title: "President, Africa Gastronomique Diaspora-Américaine",
    group: "international",
    image: felix,
    bio: [
      "A Togolese and American chef with over 22 years of experience in French, American, and African fusion cuisine. President of Africa Gastronomique Diaspora-Américaine, he works to promote African gastronomy internationally. He is also Executive Chef at ATG Management, a group managing over twenty establishments in the United States, where he is distinguished by his culinary expertise and creativity.",
    ],
  },
  {
    id: "winfred-kwadwo-siaw",
    name: "Chef Winfred Kwadwo Siaw",
    country: "Ghana",
    flags: "🇬🇭",
    title: "President, Africa Gastronomique Ghana",
    group: "international",
    image: winfred,
    bio: [
      "A Ghanaian chef and culinary entrepreneur committed to the promotion and development of African gastronomy. President of Africa Gastronomique Ghana, he actively works to enhance Ghana's culinary heritage and its international profile.",
      "Executive Chef and owner of Taste One Catering, he is distinguished by his sense of excellence, creativity, and leadership in the catering industry. Through his activities, he contributes to the professionalization of gastronomy and the showcasing of authentic Ghanaian flavors.",
    ],
  },
  {
    id: "faustina-sopriala-pepple",
    name: "Chef Faustina Sopriala-Pepple",
    country: "Nigeria",
    flags: "🇳🇬",
    title: "Vice-President, Africa Gastronomique Nigeria",
    group: "international",
    image: faustina,
    bio: [
      "Vice President of Africa Gastronomique Nigeria and a recognized expert in cuisine, hospitality, and food safety. A certified professional chef, event planner, and culinary trainer, she is distinguished by her commitment to passing on culinary know-how and supporting entrepreneurs in the food sector.",
      "Founder of Sofausty Foods and Culinary Academy Ltd, she works to empower youth and professionals through hands-on culinary training, promoting food safety standards, and developing sustainable and profitable culinary businesses.",
    ],
  },
  {
    id: "raphael-nang-mevoung",
    name: "Chef Raphaël Nang Mevoung",
    country: "Gabon",
    flags: "🇬🇦",
    title: "President, Africa Gastronomique Gabon",
    group: "international",
    image: raphael,
    bio: [
      "A Gabonese professional chef with over 16 years of experience in gastronomy, training, and culinary coaching. A gourmet chef and event caterer, he is renowned for his high-end services at private and professional receptions in Gabon.",
      "President of Africa Gastronomique Gabon, he reinterprets traditional Gabonese flavors with creativity and modernity. He also manages AKIBA NZAME FOOD Catering Restaurant, a company specializing in event planning and gastronomy.",
    ],
  },
  {
    id: "richard-perez-kombo",
    name: "Chef Richard Perez Kombo",
    country: "Congo-Brazzaville",
    flags: "🇨🇬",
    title: "President, Africa Gastronomique Congo Brazzaville",
    group: "international",
    image: richard,
    bio: [
      "A passionate culinary artisan, nutrition and restaurant consultant, renowned for his commitment to promoting African gastronomy. President of the Africa Gastronomique Congo Brazzaville Association, he actively works to promote Congolese and African culinary heritage.",
      "Head chef at the Olympic Palace Hotel, he is distinguished by his expertise, rigor, and dedication to a cuisine that combines tradition, nutritional balance, and creativity.",
    ],
  },
  {
    id: "bienvenu-mahutondji-dansi",
    name: "Chef Bienvenu Mahutondji Dansi",
    country: "Benin",
    flags: "🇧🇯",
    title: "Project Manager, Africa Gastronomique Bénin",
    group: "international",
    image: bienvenu,
    bio: [
      "A passionate Beninese chef, currently Project Manager of Africa Gastronomique Bénin. Trained in renowned establishments, he has developed a cuisine that combines the richness of local flavours with international culinary influences.",
      "A head chef and trainer in culinary technology, catering and HACCP, he is distinguished by his high standards, attention to detail and commitment to passing on gastronomic know-how. Through his career, he actively contributes to the promotion and influence of Beninese and African culinary art.",
    ],
  },
];

export const chefsByGroup = (group: ChefGroup) => chefProfiles.filter((c) => c.group === group);
