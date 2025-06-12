
import type { Award, Chef, MenuItem, Review, BlogPost, SocialLink } from './types';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const APP_NAME = "Culinary Canvas";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/order", label: "Order Online" },
  { href: "/blog", label: "Blog" },
  { href: "/feedback", label: "Feedback" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Facebook", Icon: Facebook, href: "https://facebook.com/culinarycanvas" },
  { name: "Instagram", Icon: Instagram, href: "https://instagram.com/culinarycanvas" },
  { name: "Twitter", Icon: Twitter, href: "https://twitter.com/culinarycanvas" },
  { name: "Youtube", Icon: Youtube, href: "https://youtube.com/culinarycanvas"},
];

export const SWIGGY_LINK = "https://swiggy.com/placeholder-culinarycanvas";
export const ZOMATO_LINK = "https://zomato.com/placeholder-culinarycanvas";


export const MOCK_AWARDS: Award[] = [
  { id: "1", name: "Best Ambiance 2023", year: "2023", icon: "Award" },
  { id: "2", name: "Michelin Star", year: "2024", icon: "Star" },
  { id: "3", name: "Top 10 Restaurants", year: "2023", icon: "Trophy" },
];

export const MOCK_CHEFS: Chef[] = [
  {
    id: "1",
    name: "Chef Julianne",
    photoUrl: "https://source.unsplash.com/random/300x300?female,chef,portrait,kitchen",
    bio: "Classically trained in French cuisine, Chef Julianne brings a modern twist to timeless dishes.",
    specialty: "Coq au Vin Revisited",
  },
  {
    id: "2",
    name: "Chef Ricardo",
    photoUrl: "https://source.unsplash.com/random/300x300?male,chef,portrait,culinary",
    bio: "With a passion for sustainable ingredients, Chef Ricardo crafts flavorful Italian-inspired creations.",
    specialty: "Wild Mushroom Risotto",
  },
];

export const MOCK_MENU_ITEMS: { [category: string]: MenuItem[] } = {
  Starters: [
    { id: "s1", name: "Bruschetta al Pomodoro", description: "Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.", price: 12.99, imageUrl: "https://source.unsplash.com/random/400x300?bruschetta,italian,appetizer", type: "veg" },
    { id: "s2", name: "Crispy Calamari", description: "Lightly battered and fried calamari served with a zesty marinara sauce.", price: 15.99, imageUrl: "https://source.unsplash.com/random/400x300?calamari,seafood,appetizer", type: "non-veg" },
  ],
  Mains: [
    { id: "m1", name: "Filet Mignon", description: "8oz prime cut filet, grilled to perfection, served with potato gratin and asparagus.", price: 38.99, imageUrl: "https://source.unsplash.com/random/400x300?filet,mignon,steak", type: "non-veg" },
    { id: "m2", name: "Pasta Primavera", description: "Fresh pasta tossed with seasonal vegetables in a light cream sauce.", price: 22.99, imageUrl: "https://source.unsplash.com/random/400x300?pasta,primavera,vegetarian", type: "veg" },
    { id: "m3", name: "Grilled Salmon", description: "Atlantic salmon fillet with a lemon-dill sauce, served with roasted vegetables.", price: 29.99, imageUrl: "https://source.unsplash.com/random/400x300?grilled,salmon,seafood", type: "non-veg" },
  ],
  Desserts: [
    { id: "d1", name: "Tiramisu", description: "Classic Italian dessert made with mascarpone, coffee-soaked ladyfingers, and cocoa.", price: 10.99, imageUrl: "https://source.unsplash.com/random/400x300?tiramisu,dessert,italian", type: "veg" },
    { id: "d2", name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.", price: 11.99, imageUrl: "https://source.unsplash.com/random/400x300?chocolate,lava,cake,dessert", type: "veg" },
  ],
  Beverages: [
    { id: "b1", name: "Fresh Lemonade", description: "House-made with fresh lemons.", price: 5.99, type: "veg" },
    { id: "b2", name: "Imported Red Wine", description: "Selection of fine red wines.", price: 12.99, type: "veg" },
  ],
};

export const MOCK_REVIEWS: Review[] = [
  { id: "r1", name: "Alice B.", rating: 5, comment: "Absolutely wonderful experience! The food was divine and the service impeccable." },
  { id: "r2", name: "John D.", rating: 4, comment: "Great ambiance and delicious mains. Starters could be a bit more generous." },
  { id: "r3", name: "Anonymous", rating: 5, comment: "Best Italian food in town! Highly recommend the Pasta Primavera." },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: "journey-through-flavors",
    title: "A Journey Through Flavors: Our New Seasonal Menu",
    excerpt: "Discover the inspiration behind our latest seasonal dishes, crafted with the freshest local ingredients.",
    date: "2024-07-15",
    imageUrl: "https://source.unsplash.com/random/600x400?seasonal,ingredients,fresh,food",
    content: "Our chefs have been working tirelessly to bring you a menu that celebrates the best of the current season. From farm-fresh vegetables to sustainably sourced seafood, every dish tells a story of quality and passion. Join us to experience these new culinary delights.\n\nWe believe in the farm-to-table philosophy, ensuring that every ingredient is at its peak freshness. This not only enhances the flavor but also supports our local farmers and producers. Come taste the difference that fresh, seasonal ingredients make!"
  },
  {
    slug: "meet-our-head-chefs",
    title: "Meet the Artisans: An Evening with Our Head Chefs",
    excerpt: "Get to know the culinary masterminds behind Culinary Canvas and their passion for gastronomy.",
    date: "2024-06-28",
    imageUrl: "https://source.unsplash.com/random/600x400?chefs,cooking,kitchen,team",
    content: "Join us for an exclusive event where you can meet Chef Julianne and Chef Ricardo. They will share their culinary journeys, inspirations, and the philosophy that guides their creations at Culinary Canvas. This is a unique opportunity to connect with the artists who make your dining experience unforgettable.\n\nThey will also be demonstrating some of their signature techniques and offering a tasting menu featuring some of their most beloved dishes. Don't miss this chance to delve deeper into the world of Culinary Canvas."
  },
];
