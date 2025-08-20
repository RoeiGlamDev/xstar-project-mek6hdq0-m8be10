import { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export interface Theme {
  primaryColor: string; // e.g., pink
  secondaryColor: string; // e.g., white
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ProductCardProps {
  product: Product;
}

export interface CartProps {
  items: CartItem[];
  total: number;
} 

export default {}; // Default export for module completeness