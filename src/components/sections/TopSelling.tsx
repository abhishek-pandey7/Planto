'use client';

import { products } from '../../data/mockData';
import ProductCard from '../ui/ProductCard';

export default function TopSelling() {
  return (
    <section className="relative py-20 lg:py-0 lg:h-screen lg:min-h-[900px] flex flex-col justify-center overflow-hidden">
      <div className="section-container max-w-6xl w-full mx-auto flex flex-col justify-center h-full pt-12">
        <div className="text-center mb-24 relative flex items-center justify-center shrink-0">
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-l-2 border-white/60 left-1/2 -translate-x-[150px] md:-translate-x-[180px]" />
          <h2 className="text-[32px] md:text-[45px] font-bold text-white tracking-wide">Our Top Selling</h2>
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-r-2 border-white/60 right-1/2 translate-x-[150px] md:translate-x-[180px]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
