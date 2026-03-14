export type FruitBox = {
  id: string;
  name: string;
  subtitle: string;
  serves: string;
  price: number;
  code: string;
  emoji: string;
  description: string;
  items: string[];
  badge?: { label: string; type: 'gold' | 'green' | 'spice' };
  seasonal?: boolean;
};

export const fruitBoxes: FruitBox[] = [
  {
    id: 'daily-fruit',
    name: 'Daily Fruit Box',
    subtitle: 'Everyday freshness for the whole family',
    serves: 'Family of 4 · 5-7 days',
    price: 449,
    code: 'FRT-DFB-L',
    emoji: '🍎',
    description: 'A vibrant mix of seasonal fruits to keep your family healthy and energised every day.',
    badge: { label: '⭐ Best Seller', type: 'green' },
    items: [
      'Banana 12 pcs', 'Apple 6 pcs', 'Orange 6 pcs', 'Pomegranate 2 pcs',
      'Papaya ½ pc', 'Guava 4 pcs', 'Seasonal fruit ×1',
    ],
  },
  {
    id: 'premium-exotic',
    name: 'Premium Exotic Box',
    subtitle: 'Handpicked premium & exotic fruits',
    serves: 'Family of 3-4 · 4-5 days',
    price: 799,
    code: 'FRT-PEB-L',
    emoji: '🍇',
    description: 'Curated exotic selection sourced from the best farms. Impress, indulge and celebrate.',
    badge: { label: '✨ Premium', type: 'gold' },
    items: [
      'Kiwi 6 pcs', 'Dragon Fruit 1 pc', 'Avocado 2 pcs', 'Blueberry 125 g',
      'Strawberry 250 g', 'Grapes 500 g', 'Pear 4 pcs',
    ],
  },
  {
    id: 'tropical-summer',
    name: 'Tropical Summer Box',
    subtitle: 'Sun-kissed summer favourites',
    serves: 'Family of 4 · 4-5 days',
    price: 599,
    code: 'FRT-TSB-L',
    emoji: '🥭',
    description: 'The best of the Indian summer harvest — sweet, juicy and bursting with tropical flavour.',
    badge: { label: '☀️ Seasonal', type: 'spice' },
    seasonal: true,
    items: [
      'Alphonso Mango 6 pcs', 'Watermelon 1 pc (2 kg)', 'Litchi 500 g',
      'Jackfruit 500 g', 'Pineapple 1 pc', 'Muskmelon ½ pc',
    ],
  },
  {
    id: 'mini-fruit',
    name: 'Mini Fruit Box',
    subtitle: 'Fresh fruits for singles & couples',
    serves: 'Couple · 4-5 days',
    price: 229,
    code: 'FRT-MFB-S',
    emoji: '🍊',
    description: 'A perfectly sized selection to enjoy fresh fruits without any waste.',
    items: [
      'Banana 8 pcs', 'Apple 4 pcs', 'Orange 4 pcs',
      'Pomegranate 1 pc', 'Guava 2 pcs',
    ],
  },
  {
    id: 'immunity-box',
    name: 'Immunity Booster Box',
    subtitle: 'Vitamin-rich health powerhouses',
    serves: 'Family of 3-4 · 5 days',
    price: 499,
    code: 'FRT-IMM-M',
    emoji: '🍋',
    description: 'Vitamin C rich fruits packed with antioxidants. Start your day right, every day.',
    badge: { label: '💚 Nutritious', type: 'green' },
    items: [
      'Amla 250 g', 'Lemon 10 pcs', 'Orange 8 pcs', 'Pomegranate 3 pcs',
      'Papaya ½ pc', 'Kiwi 4 pcs', 'Beetroot 3 pcs',
    ],
  },
  {
    id: 'festive-hamper',
    name: 'Festive Fruit Hamper',
    subtitle: 'Gift-worthy premium selection',
    serves: 'Gift for 6-8 people',
    price: 1299,
    code: 'FRT-FFH-XL',
    emoji: '🎁',
    description: 'A beautifully arranged premium hamper. Perfect for gifting during celebrations.',
    badge: { label: '🎁 Gift Pack', type: 'gold' },
    items: [
      'Alphonso Mango 8 pcs', 'Kiwi 8 pcs', 'Grapes 750 g', 'Strawberry 500 g',
      'Apple 6 pcs', 'Pear 6 pcs', 'Dragon Fruit 2 pcs', 'Dates 250 g',
    ],
  },
];
