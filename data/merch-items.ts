import { MerchItem } from '@types/index';

export const merchItems: MerchItem[] = [
  {
    id: 'merch-001',
    name: 'Oversized Logo Tee',
    description: 'Comfortable oversized t-shirt with restaurant logo',
    price: 29.99,
    imageUrl: '/images/oversized-tee.jpg',
    category: 'clothing',
    isInStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
  },
  {
    id: 'merch-002',
    name: 'Canvas Tote Bag',
    description: 'Eco-friendly canvas tote bag with minimalist design',
    price: 24.99,
    imageUrl: '/images/tote-bag.jpg',
    category: 'accessories',
    isInStock: true,
    colors: ['Natural', 'Black'],
  },
  {
    id: 'merch-003',
    name: 'Artisan Chopsticks Set',
    description: 'Handcrafted wooden chopsticks with case',
    price: 34.99,
    imageUrl: '/images/chopsticks-set.jpg',
    category: 'kitchenware',
    isInStock: true,
  },
  {
    id: 'merch-004',
    name: 'Ceramic Mug',
    description: 'Premium ceramic mug with Japanese fusion design',
    price: 19.99,
    imageUrl: '/images/ceramic-mug.jpg',
    category: 'kitchenware',
    isInStock: true,
    colors: ['White', 'Black'],
  },
  {
    id: 'merch-005',
    name: 'Tea Towel & Apron Set',
    description: 'Matching tea towel and apron set',
    price: 39.99,
    imageUrl: '/images/tea-towel-apron.jpg',
    category: 'kitchenware',
    isInStock: false, // Out of stock
  },
];

export const getMerchItemById = (id: string): MerchItem | undefined => {
  return merchItems.find(item => item.id === id);
};

export const getInStockMerchItems = (): MerchItem[] => {
  return merchItems.filter(item => item.isInStock);
};

export const getMerchItemsByCategory = (category: string): MerchItem[] => {
  return merchItems.filter(item => item.category === category);
};
