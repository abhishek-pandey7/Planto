import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from '@phosphor-icons/react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[20px] border border-white/20 rounded-[30px] md:rounded-[40px] p-6 pt-24 md:p-8 md:pt-28 flex flex-col items-center relative h-full"
    >
      <div className="absolute -top-16 md:-top-20 w-[180px] md:w-[220px] h-[200px] md:h-[240px]">
        <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-xl" />
      </div>

      <div className="w-full text-left relative z-20 flex flex-col flex-grow">
        <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-[13px] text-white/60 mb-5 leading-relaxed flex-grow">
          {product.desc}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[20px] md:text-[22px] font-medium text-white">{product.price}</span>
          <button className="w-[36px] h-[36px] rounded-lg border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <ShoppingBag size={18} weight="regular" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
