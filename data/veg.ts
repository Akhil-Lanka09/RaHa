export type VegBox = {
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
  highlight?: string;
};

export const vegBoxes: VegBox[] = [
  {
    id: 'weekly-essential',
    name: 'Weekly Essential Box',
    subtitle: 'The complete family weekly basket',
    serves: 'Family of 4 · 1 week',
    price: 499,
    code: 'VEG-WEB-L',
    emoji: '🥦',
    description: 'Everything you need for a full week of home cooking. Sourced fresh every Monday & Thursday.',
    badge: { label: '⭐ Most Popular', type: 'green' },
    highlight: 'Free delivery on this box',
    items: [
      'Tomato 1 kg', 'Onion 2 kg', 'Potato 2 kg', 'Green Chilli 200 g',
      'Spinach 500 g', 'Coriander 100 g', 'Brinjal 500 g', 'Carrot 500 g',
      'Capsicum 3 pcs', 'Ginger 100 g', 'Garlic 100 g', 'Lady Finger 500 g',
    ],
  },
  {
    id: 'mini-fresh',
    name: 'Mini Fresh Box',
    subtitle: 'Perfect for singles & couples',
    serves: 'Couple · 4-5 days',
    price: 249,
    code: 'VEG-MFB-S',
    emoji: '🥕',
    description: 'A curated selection of daily essentials — no waste, no over-buying.',
    items: [
      'Tomato 500 g', 'Onion 1 kg', 'Potato 1 kg', 'Green Chilli 100 g',
      'Spinach 250 g', 'Coriander 50 g', 'Capsicum 2 pcs', 'Ginger 50 g',
    ],
  },
  {
    id: 'south-indian-feast',
    name: 'South Indian Feast Box',
    subtitle: 'Curated for South Indian cooking',
    serves: 'Family of 4 · 1 week',
    price: 549,
    code: 'VEG-SIF-L',
    emoji: '🌿',
    description: 'Specially assembled for dosas, sambhar, rasam & kootu. Authentic home cooking starts here.',
    badge: { label: '🏆 Chef Pick', type: 'spice' },
    items: [
      'Tomato 1 kg', 'Drumstick 4 pcs', 'Raw Banana 4 pcs', 'Yam 500 g',
      'Curry Leaves 50 g', 'Coconut 2 pcs', 'Green Chilli 200 g', 'Tamarind 200 g',
      'Ash Gourd 1 pc', 'Colocasia 500 g', 'Bitter Gourd 500 g', 'Snake Gourd 500 g',
    ],
  },
  {
    id: 'organic-seasonal',
    name: 'Organic Seasonal Box',
    subtitle: 'Certified organic seasonal produce',
    serves: 'Family of 3-4 · 5-6 days',
    price: 699,
    code: 'VEG-ORG-M',
    emoji: '🌱',
    description: 'Pesticide-free, certified organic vegetables. Rotates with the season for maximum freshness.',
    badge: { label: '🌿 Certified Organic', type: 'green' },
    items: [
      'Organic Tomato 1 kg', 'Organic Spinach 500 g', 'Organic Potato 1 kg',
      'Organic Carrot 500 g', 'Organic Beans 500 g', 'Organic Beetroot 3 pcs',
      'Organic Capsicum 3 pcs', 'Organic Cucumber 3 pcs', 'Seasonal special ×2',
    ],
  },
  {
    id: 'biryani-special',
    name: 'Biryani Special Box',
    subtitle: 'All you need for the perfect biryani',
    serves: 'Party of 6-8',
    price: 399,
    code: 'VEG-BIR-SP',
    emoji: '🧅',
    description: 'Every vegetable, herb and spice accompaniment needed for an unforgettable biryani night.',
    badge: { label: '🍛 Party Pack', type: 'gold' },
    items: [
      'Onion 3 kg', 'Tomato 1.5 kg', 'Mint Leaves 200 g', 'Coriander 150 g',
      'Green Chilli 300 g', 'Ginger 200 g', 'Garlic 200 g', 'Lemon 6 pcs',
      'Capsicum 4 pcs',
    ],
  },
  {
    id: 'juice-salad',
    name: 'Juice & Salad Box',
    subtitle: 'Fresh, clean & colourful produce',
    serves: 'Couple · 5 days',
    price: 349,
    code: 'VEG-JSB-M',
    emoji: '🥗',
    description: 'Vibrant, clean vegetables ideal for salads, smoothies and fresh juices.',
    items: [
      'Cucumber 4 pcs', 'Carrot 500 g', 'Beetroot 3 pcs', 'Celery 1 bunch',
      'Capsicum 4 pcs', 'Lettuce 1 head', 'Radish 5 pcs', 'Cherry Tomato 250 g',
    ],
  },
];
