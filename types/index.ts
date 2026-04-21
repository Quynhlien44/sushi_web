// Core data interfaces from design document
export type MenuCategory = 
  | 'recommended'
  | 'maki'
  | 'uramaki'
  | 'terimaki'
  | 'sashimi'
  | 'gunkan'
  | 'taco-sushi';

export type MerchCategory = 'clothing' | 'accessories' | 'kitchenware';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: MenuCategory;
  tags: string[];
  isAvailable: boolean;
  isFeatured?: boolean;
  preparationTime?: number;
  calories?: number;
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: MerchCategory;
  isInStock: boolean;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'menu' | 'merch';
  imageUrl?: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  lastUpdated: Date;
}

export interface RestaurantInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  openingHours: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  deliveryZones: {
    zone: string;
    estimatedTime: string;
    minimumOrder?: number;
  }[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// Checkout and Order data structures
export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  deliveryAddress?: string;
  pickupTime?: string;
  specialInstructions?: string;
}

export interface PaymentInfo {
  method: 'card' | 'cash' | 'online';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  amount: number;
  timestamp: Date;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  taxAmount: number;
  deliveryFee?: number;
  total: number;
  fulfillmentMethod: 'pickup' | 'delivery';
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  payment: PaymentInfo;
  createdAt: Date;
  estimatedReadyTime?: Date;
  notes?: string;
}

export interface CheckoutSession {
  cart: CartState;
  customer: CustomerInfo;
  step: 'customer-info' | 'delivery-address' | 'payment' | 'confirmation';
  errors: Record<string, string>;
  isLoading: boolean;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph?: {
    title: string;
    description: string;
    image: string;
    type: 'website' | 'article';
  };
}

export interface UIState {
  isMobileMenuOpen: boolean;
  isCartOpen: boolean;
  currentPage: string;
  isLoading: boolean;
  error: string | null;
}