import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}

export type { Product, Category, Brand }; // Exporting types for use in the application

export default {}; // Default export to satisfy module requirements