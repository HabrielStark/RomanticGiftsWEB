export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'flowers' | 'chocolates' | 'jewelry' | 'plushies' | 'cards';
  imageUrl: string;
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Flower {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  color: string;
}

export interface CustomBouquet {
  flowers: { flower: Flower; quantity: number }[];
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}