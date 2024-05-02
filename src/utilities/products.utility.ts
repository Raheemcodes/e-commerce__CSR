import image_product_1 from '../assets/images/products/image-product-1.jpg';
import image_product_2 from '../assets/images/products/image-product-2.jpg';
import image_product_3 from '../assets/images/products/image-product-3.jpg';
import image_product_4 from '../assets/images/products/image-product-4.jpg';
import thumbnail_product_1 from '../assets/images/products/image-product-1-thumbnail.jpg';
import thumbnail_product_2 from '../assets/images/products/image-product-2-thumbnail.jpg';
import thumbnail_product_3 from '../assets/images/products/image-product-3-thumbnail.jpg';
import thumbnail_product_4 from '../assets/images/products/image-product-4-thumbnail.jpg';

export interface Product {
  images: string[];
  thumbnails: string[];
  title: string;
  desc: string;
  price: number;
  discount: number;
}

export const product: Product = {
  images: [image_product_1, image_product_2, image_product_3, image_product_4],
  thumbnails: [
    thumbnail_product_1,
    thumbnail_product_2,
    thumbnail_product_3,
    thumbnail_product_4,
  ],
  title: 'Fall Limited Edition Sneakers',
  desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250,
  discount: 0.5,
};
