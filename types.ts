// FIX: Import React to resolve the 'React' namespace error on line 21.
import React from 'react';

export interface PriceOption {
  name: string;
  price: string;
  imageUrl?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bannerUrl: string;
  longDescription: string;
  prices: PriceOption[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  bannerUrl: string;
  longDescription: string;
  prices: PriceOption[];
}