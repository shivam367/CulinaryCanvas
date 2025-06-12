
import type { LucideIcon } from 'lucide-react';

export type Award = {
  id: string;
  name: string;
  year: string;
  icon?: string; // Corresponds to Lucide icon names or custom SVG identifier
};

export type Chef = {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  specialty: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  type: "veg" | "non-veg" | "vegan" | "gluten-free"; // Example types
  category?: "Starters" | "Mains" | "Desserts" | "Beverages";
};

export type Review = {
  id: string;
  name?: string;
  rating: number; // 1-5
  comment: string;
  date?: string; // Optional date for review
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  content: string; // Full content for the blog post page
  author?: string; // Optional
};

export type SocialLink = {
  name: string;
  Icon: LucideIcon;
  href: string;
};

export type CartItem = MenuItem & {
  quantity: number;
};
