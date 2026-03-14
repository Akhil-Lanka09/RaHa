export type PackSize = {
  size: string;
  price: number;
  code: string;
};

export type Product = {
  id: string;
  name: string;
  subtitle?: string;
  variety: string;
  origin: string;
  description: string;
  emoji: string;
  image: string;
  badge?: { label: string; type: 'gold' | 'green' | 'spice' };
  dotType: 'gold' | 'green' | 'spice';
  sizes: PackSize[];
  tags?: string[];
};

export const riceProducts: Product[] = [
  {
    id: 'sona-masoori',
    name: 'Sona Masoori',
    variety: 'Premium · Andhra Pradesh',
    origin: 'Andhra Pradesh',
    description: 'Lightweight, aromatic. Perfect for daily cooking, idli, dosa & pongal.',
    emoji: '🌾',
    image: '/rice_sona_masoori.png',
    badge: { label: '⭐ Best Seller', type: 'green' },
    dotType: 'green',
    sizes: [
      { size: '1 kg', price: 58, code: 'RICE-SM-1K' },
      { size: '5 kg', price: 270, code: 'RICE-SM-5K' },
      { size: '10 kg', price: 520, code: 'RICE-SM-10K' },
      { size: '25 kg', price: 1200, code: 'RICE-SM-25K' },
    ],
  },
  {
    id: 'basmati',
    name: 'Basmati',
    subtitle: 'Dawatt',
    variety: 'Premium · Punjab',
    origin: 'Punjab',
    description: 'Long-grain, fragrant. The gold standard for biryani, pulao & festive cooking.',
    emoji: '✨',
    image: '/rice_basmati.png',
    badge: { label: '✨ Premium', type: 'gold' },
    dotType: 'gold',
    sizes: [
      { size: '1 kg', price: 95, code: 'RICE-BAS-1K' },
      { size: '5 kg', price: 450, code: 'RICE-BAS-5K' },
      { size: '10 kg', price: 870, code: 'RICE-BAS-10K' },
      { size: '26 kg', price: 2100, code: 'RICE-BAS-26K' },
    ],
  },
  {
    id: 'ponni',
    name: 'Ponni',
    variety: 'Soft · Tamil Nadu',
    origin: 'Tamil Nadu',
    description: 'Soft, sticky texture. Classic South Indian comfort — sambhar rice, kanji & curd rice.',
    emoji: '🍚',
    image: '/rice_ponni.png',
    badge: { label: '🏆 Classic', type: 'spice' },
    dotType: 'spice',
    sizes: [
      { size: '1 kg', price: 62, code: 'RICE-PON-1K' },
      { size: '5 kg', price: 295, code: 'RICE-PON-5K' },
      { size: '10 kg', price: 560, code: 'RICE-PON-10K' },
      { size: '25 kg', price: 1300, code: 'RICE-PON-25K' },
    ],
  },
  {
    id: 'red-rice',
    name: 'Red Rice',
    subtitle: 'Kerala Matta',
    variety: 'Nutritious · Kerala',
    origin: 'Kerala',
    description: 'Rich in fibre & minerals. Traditional Kerala staple — best with fish curry & avial.',
    emoji: '🔴',
    image: '/rice_red.png',
    badge: { label: '💚 Nutritious', type: 'green' },
    dotType: 'green',
    sizes: [
      { size: '1 kg', price: 75, code: 'RICE-RED-1K' },
      { size: '5 kg', price: 355, code: 'RICE-RED-5K' },
      { size: '10 kg', price: 680, code: 'RICE-RED-10K' },
    ],
  },
  {
    id: 'brown-rice',
    name: 'Brown Rice',
    variety: 'Whole Grain · Telangana',
    origin: 'Telangana',
    description: 'Unpolished whole grain. High fibre, nutty flavour — a conscious everyday choice.',
    emoji: '🌰',
    image: '/rice_brown.png',
    badge: { label: '🌿 Organic', type: 'green' },
    dotType: 'green',
    sizes: [
      { size: '1 kg', price: 80, code: 'RICE-BRN-1K' },
      { size: '5 kg', price: 380, code: 'RICE-BRN-5K' },
      { size: '10 kg', price: 720, code: 'RICE-BRN-10K' },
    ],
  },
  {
    id: 'hmt-rice',
    name: 'HMT Rice',
    variety: 'Medium Grain · Karnataka',
    origin: 'Karnataka',
    description: 'Medium grain, great for one-pot dishes. A popular variety for khichdi & pulao.',
    emoji: '🌾',
    image: '/rice_hmt.png',
    dotType: 'gold',
    sizes: [
      { size: '1 kg', price: 55, code: 'RICE-HMT-1K' },
      { size: '5 kg', price: 255, code: 'RICE-HMT-5K' },
      { size: '10 kg', price: 490, code: 'RICE-HMT-10K' },
      { size: '25 kg', price: 1150, code: 'RICE-HMT-25K' },
    ],
  },
];
