export interface Product {
  id: string;
  name: string;
  category: 'sofas' | 'beds' | 'desks' | 'tables';
  price: number;
  description: string;
  features: string[];
  images: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegance Sectional Sofa',
    category: 'sofas',
    price: 32487, // ~2499 USD to KSH
    description: 'A sophisticated sectional sofa with plush cushions and premium upholstery.',
    features: ['Premium fabric', 'Modular design', 'Stain-resistant', 'Memory foam cushions'],
    images: [
      'https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'Luxe Platform Bed',
    category: 'beds',
    price: 24687, // ~1899 USD to KSH
    description: 'A modern platform bed with integrated lighting and storage.',
    features: ['Integrated LED lighting', 'Under-bed storage', 'Premium wood frame', 'Customizable headboard'],
    images: [
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg',
    ],
  },
  {
    id: '3',
    name: 'Executive Work Desk',
    category: 'desks',
    price: 16887, // ~1299 USD to KSH
    description: 'A sophisticated desk with ample workspace and integrated cable management.',
    features: ['Cable management system', 'Adjustable height', 'Premium wood finish', 'Drawer storage'],
    images: [
      'https://images.pexels.com/photos/5089178/pexels-photo-5089178.jpeg',
      'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg',
    ],
  },
  {
    id: '4',
    name: 'Marble Top Coffee Table',
    category: 'tables',
    price: 11687, // ~899 USD to KSH
    description: 'A stunning coffee table with genuine marble top and brass accents.',
    features: ['Genuine marble top', 'Brass-finished legs', 'Spacious surface', 'Anti-scratch coating'],
    images: [
      'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg',
      'https://images.pexels.com/photos/6186581/pexels-photo-6186581.jpeg',
    ],
  },
  {
    id: '5',
    name: 'Mid-Century Lounge Sofa',
    category: 'sofas',
    price: 23387, // ~1799 USD to KSH
    description: 'A stylish mid-century inspired sofa with tapered legs and tufted upholstery.',
    features: ['Tufted back cushions', 'Solid wood legs', 'High-resilience foam', 'Easy-clean fabric'],
    images: [
      'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg',
    ],
  },
  {
    id: '6',
    name: 'Canopy Queen Bed',
    category: 'beds',
    price: 28000, // ~2199 USD to KSH
    description: 'An elegant canopy bed with a minimalist frame and premium mattress support.',
    features: ['Metal canopy frame', 'Adjustable height', 'Premium slat support', 'No box spring needed'],
    images: [
      'https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg',
      'https://images.pexels.com/photos/3773575/pexels-photo-3773575.png',
    ],
  },
  {
    id: '7',
    name: 'Standing Desk Converter',
    category: 'desks',
    price: 45300, // ~349 USD to KSH
    description: 'A versatile desk converter that transforms any surface into a standing workstation.',
    features: ['Height adjustable', 'Spacious keyboard tray', 'Ergonomic design', 'Easy assembly'],
    images: [
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      'https://images.pexels.com/photos/7054751/pexels-photo-7054751.jpeg',
    ],
  },
  {
    id: '8',
    name: 'Round Dining Table',
    category: 'tables',
    price: 14287, // ~1099 USD to KSH
    description: 'A beautiful round dining table perfect for intimate gatherings and family meals.',
    features: ['Solid wood construction', 'Seats 4-6 people', 'Reinforced base', 'Scratch-resistant finish'],
    images: [
      'https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    role: 'Interior Designer',
    comment: 'The quality of furniture from this store is exceptional. My clients are always impressed with the pieces I source from here.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Homeowner',
    comment: 'We furnished our entire living room with pieces from this store. The quality and comfort are unmatched.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: '3',
    name: 'Sophia Chen',
    role: 'Architect',
    comment: 'I appreciate the attention to detail and craftsmanship in every piece. The Executive Work Desk is a centerpiece in my home office.',
    rating: 4,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: '4',
    name: 'Michael Rodriguez',
    role: 'Business Owner',
    comment: 'The delivery was prompt and the assembly service was excellent. Our new sectional sofa is exactly what we wanted.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
];