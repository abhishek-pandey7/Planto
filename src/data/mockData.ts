import { GallerySlide, Product, Review } from '../types';

export const gallerySlides: GallerySlide[] = [
  {
    id: 0,
    name: "Calathea plant",
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (2).png",
    customClass: ""
  },
  {
    id: 1,
    name: "Monstera plant",
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (3).png",
    customClass: ""
  },
  {
    id: 2,
    name: "Aloe Vera plant",
    image: "/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png",
    customClass: "-translate-y-8 md:-translate-y-12"
  }
];

export const products: Product[] = [
  { id: 1, name: 'Monstera Deliciosa', price: 'Rs. 499/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (2).png', desc: "Known for its iconic split leaves, the Monstera brings instant tropical vibes." },
  { id: 2, name: 'Snake Plant', price: 'Rs. 259/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (3).png', desc: "Incredibly hardy and highly effective at filtering indoor air toxins." },
  { id: 3, name: 'Fiddle Leaf Fig', price: 'Rs. 899/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png', desc: "A popular statement piece with large, heavily veined leaves." },
  { id: 4, name: 'ZZ Plant', price: 'Rs. 359/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png', desc: "Practically indestructible. Adds a modern touch to any low-light corner." },
  { id: 5, name: 'Pothos Ivy', price: 'Rs. 199/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png', desc: "A versatile trailing plant that grows quickly. Perfect for high shelves." },
  { id: 6, name: 'Peace Lily', price: 'Rs. 399/-', image: '/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png', desc: "Features elegant white blooms and is an excellent air purifier." },
];

export const reviews: Review[] = [
  { id: 1, name: 'Maxn Raval', photo: '/unsplash__7LbC5J-jw4.png', customClass: 'scale-[3] origin-top translate-y-1', text: "Absolutely thrilled with my purchase! The packaging was eco-friendly and my Monstera arrived without a single damaged leaf." },
  { id: 2, name: 'venely k', photo: '/unsplash_3TLl_97HNJo.png', customClass: '', text: "Planto is my go-to for indoor greenery. Their selection is unmatched, and the included care cards make it impossible to fail." },
  { id: 3, name: 'Lii thakur', photo: '/unsplash__7LbC5J-jw4 (1).png', customClass: 'scale-[3] origin-top translate-y-1', text: "I bought a Fiddle Leaf Fig as a housewarming gift and it was perfect. The customer service team even helped me pick out a pot." },
];
