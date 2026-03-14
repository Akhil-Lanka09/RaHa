export type MangoVariety = {
  id: string;
  name: string;
  desc: string;
  image: string;
  packs: { size: number; price: number; discount?: number }[];
  badges?: string[];
};

export const mangoes: MangoVariety[] = [
  {
    id: 'mng-banganapalli',
    name: 'Banganapalli',
    desc: 'The King of Mangoes from Andhra Pradesh. Sweet, fibreless, and highly sought-after. Perfect for eating fresh or making thick milkshakes.',
    image: '/mango_banganapalli.png',
    badges: ['Best Seller', 'Andhra Origin'],
    packs: [
      { size: 6, price: 550 },
      { size: 12, price: 1050, discount: 5 },
      { size: 18, price: 1550, discount: 10 },
    ],
  },
  {
    id: 'mng-chinna-rashalu',
    name: 'Chinna Rashalu',
    desc: 'Extremely sweet and juicy, known for its strong aroma. Perfect for squeezing and drinking the juice directly from the fruit.',
    image: '/mango_rasam.png',
    packs: [
      { size: 6, price: 480 },
      { size: 12, price: 920 },
      { size: 18, price: 1350 },
    ],
  },
  {
    id: 'mng-pedda-rashalu',
    name: 'Pedda Rashalu',
    desc: 'The larger variant of Rashalu mangoes. Extremely juicy with a unique sweet-tangy flavor profile that lingers.',
    image: '/mango_rasam.png',
    packs: [
      { size: 6, price: 520 },
      { size: 12, price: 1000 },
      { size: 18, price: 1450 },
    ],
  },
  {
    id: 'mng-himampasandh',
    name: 'Himampasandh',
    desc: 'Often called Imam Pasand. Exceptionally sweet, large in size, with a very thin skin and small seed. A true connoisseur\'s delight.',
    image: '/mango_assorted.png',
    badges: ['Premium'],
    packs: [
      { size: 6, price: 850 },
      { size: 12, price: 1650 },
      { size: 18, price: 2400 },
    ],
  },
  {
    id: 'mng-jalalu',
    name: 'Jalalu',
    desc: 'A distinct, elongated variety known for its unique flavor and excellent keeping quality. Great for slicing and serving.',
    image: '/mango_banganapalli.png',
    packs: [
      { size: 6, price: 490 },
      { size: 12, price: 950 },
      { size: 18, price: 1400 },
    ],
  },
  {
    id: 'mng-cheruku-rasam',
    name: 'Cheruku Rasam',
    desc: '"Cheruku" means Sugarcane. Extraordinarily sweet with abundant juice. A beloved summer staple across Telugu states.',
    image: '/mango_rasam.png',
    badges: ['Juice Special'],
    packs: [
      { size: 6, price: 480 },
      { size: 12, price: 920 },
      { size: 18, price: 1350 },
    ],
  },
  {
    id: 'mng-collector',
    name: 'Collector',
    desc: 'Also known as Totapuri or Bangalora. Recognisable by its distinct beak shape. Perfect blend of sweet and tangy, great for salads.',
    image: '/mango_assorted.png',
    packs: [
      { size: 6, price: 380 },
      { size: 12, price: 720 },
      { size: 18, price: 1050 },
    ],
  },
  {
    id: 'mng-rumani',
    name: 'Rumani',
    desc: 'Apple-shaped mangoes with a beautiful yellow-green hue. Highly aromatic, sweet, and firm-fleshed — great for cutting.',
    image: '/mango_rumani.png',
    packs: [
      { size: 6, price: 450 },
      { size: 12, price: 850 },
      { size: 18, price: 1250 },
    ],
  },
  {
    id: 'mng-natu-kai',
    name: 'Natu Kai',
    desc: 'Local, rustic farm mangoes. Unmatched authentic countryside aroma, excellent for regional pickles and traditional curries.',
    image: '/mango_rumani.png',
    badges: ['Rustic'],
    packs: [
      { size: 6, price: 350 },
      { size: 12, price: 680 },
      { size: 18, price: 1000 },
    ],
  },
];
