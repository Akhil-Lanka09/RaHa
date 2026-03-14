export type PantryProduct = {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  image: string;
  category: 'ghee' | 'honey';
  badges?: string[];
  sizes: { label: string; price: number }[];
};

export const pantryProducts: PantryProduct[] = [
  /* ─── GHEE ─── */
  {
    id: 'ghee-buffalo',
    name: 'Pure Buffalo Ghee',
    subtitle: 'Traditional Bilona method',
    desc: 'Rich, aromatic buffalo ghee prepared using the ancient Bilona method. Deep golden colour with an intense buttery aroma — perfect for sweets, parathas, and dal tadka.',
    image: '/buffalo_ghee.png',
    category: 'ghee',
    badges: ['Premium', 'A2 Bilona'],
    sizes: [
      { label: '250 ml', price: 350 },
      { label: '500 ml', price: 650 },
      { label: '1 litre', price: 1200 },
    ],
  },
  {
    id: 'ghee-cow',
    name: 'Pure Cow Ghee',
    subtitle: 'Desi Gir Cow A2 Ghee',
    desc: 'Light, golden desi cow ghee from A2 milk of Gir cows. Gentle nutty flavour, easy to digest. Ideal for everyday cooking, rice, rotis, and Ayurvedic use.',
    image: '/cow_ghee.png',
    category: 'ghee',
    badges: ['A2 Milk', 'Gir Cow'],
    sizes: [
      { label: '250 ml', price: 400 },
      { label: '500 ml', price: 750 },
      { label: '1 litre', price: 1400 },
    ],
  },
  /* ─── HONEY ─── */
  {
    id: 'honey-forest',
    name: 'Wild Forest Honey',
    subtitle: 'Multi-flora forest harvest',
    desc: 'Dark, robust honey harvested from wild beehives deep inside the Eastern Ghats forests. Rich in antioxidants with a complex, earthy flavour profile.',
    image: '/forest_honey.png',
    category: 'honey',
    badges: ['Wild Harvest', 'Unprocessed'],
    sizes: [
      { label: '250 g', price: 320 },
      { label: '500 g', price: 600 },
      { label: '1 kg', price: 1100 },
    ],
  },
  {
    id: 'honey-raw',
    name: 'Raw Honey',
    subtitle: 'Farm-fresh unfiltered',
    desc: 'Pure, unfiltered raw honey straight from the apiary. Contains natural pollen and enzymes. Light golden with a delicate floral sweetness — perfect for teas, smoothies, and toast.',
    image: '/raw_honey.png',
    category: 'honey',
    badges: ['Raw', 'Unfiltered'],
    sizes: [
      { label: '250 g', price: 280 },
      { label: '500 g', price: 520 },
      { label: '1 kg', price: 950 },
    ],
  },
];
