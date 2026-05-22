'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import StarRating from '../ui/StarRating';

import { reviews } from '../../data/mockData';

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="text-center md:text-left mb-20">
          <h2 className="text-[38px] md:text-[55px] font-bold text-white mb-6">Customer Review</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1B2316] p-10 rounded-[30px]"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                  <Image src={review.photo} alt={review.name} fill className={`object-cover ${review.customClass || ''}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] font-semibold text-white">{review.name}</span>
                  <div className="flex items-center gap-1 mt-1">
                    <StarRating size={16} />
                  </div>
                </div>
              </div>
              <p className="text-[16px] text-white/60 leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
