export interface GallerySlide {
  id: number;
  name: string;
  image: string;
  customClass: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  desc: string;
}

export interface Review {
  id: number;
  name: string;
  photo: string;
  rating?: number;
  text: string;
  customClass?: string;
}
