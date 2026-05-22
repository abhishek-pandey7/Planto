'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag } from '@phosphor-icons/react';

export default function TrendyPlants() {
  return (
    <section className="py-20 relative z-10" id="plants-type">
      <div className="section-container max-w-6xl">
        <div className="text-center mb-32 relative flex items-center justify-center">
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-l-2 border-white/60 left-1/2 -translate-x-[160px] md:-translate-x-[200px]" />
          <h2 className="text-[32px] md:text-[45px] font-bold text-white tracking-wide">Our Trendy plants</h2>
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-r-2 border-white/60 right-1/2 translate-x-[160px] md:translate-x-[200px]" />
        </div>

        <div className="flex flex-col gap-40 md:gap-32">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[20px] border border-white/20 rounded-[40px] md:rounded-[60px] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch min-h-[250px]"
          >
            {/* Image overflowing on left */}
            <div className="relative md:absolute md:-left-32 md:-bottom-12 w-48 md:w-[550px] h-48 md:h-[550px] -mt-16 md:mt-0 mx-auto md:mx-0 z-10 pointer-events-none">
              <Image 
                src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png" 
                alt="For Small Decs Ai Plat" 
                fill 
                className="object-contain drop-shadow-2xl scale-100 md:scale-110" 
              />
            </div>
            
            <div className="md:ml-[420px] flex flex-col justify-center text-left w-full mt-8 md:mt-0 z-20">
              <h3 className="text-[26px] md:text-[30px] font-bold text-white mb-3">For Small Decs Ai Plat</h3>
              <p className="text-[13px] md:text-[14px] text-white/80 mb-5 leading-relaxed max-w-md">
                The Calathea is renowned for its stunning, patterned foliage. It thrives in indirect light and helps purify the air in your living space.
              </p>
              <div className="text-[20px] md:text-[24px] font-medium text-white mb-6">Rs. 599/-</div>
              
              <div className="flex items-center gap-4">
                <button className="px-8 py-2 rounded-lg bg-transparent border border-white/60 text-white text-[14px] font-medium hover:bg-white hover:text-black transition-all">
                  Explore
                </button>
                <button className="w-[42px] h-[42px] rounded-lg border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ShoppingBag size={20} weight="regular" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[20px] border border-white/20 rounded-[40px] md:rounded-[60px] p-8 md:p-12 flex flex-col-reverse md:flex-row items-center md:items-stretch min-h-[250px]"
          >
            <div className="md:mr-[420px] flex flex-col justify-center text-left w-full mt-8 md:mt-0 z-20">
              <h3 className="text-[26px] md:text-[30px] font-bold text-white mb-3">For Fresh Decs Ai Plat</h3>
              <p className="text-[13px] md:text-[14px] text-white/80 mb-5 leading-relaxed max-w-md">
                An excellent choice for beginners. This hardy plant thrives on neglect and adds a modern, structured look to any low-light corner.
              </p>
              <div className="text-[20px] md:text-[24px] font-medium text-white mb-6">Rs. 579/-</div>
              
              <div className="flex items-center gap-4">
                <button className="px-8 py-2 rounded-lg bg-transparent border border-white/60 text-white text-[14px] font-medium hover:bg-white hover:text-black transition-all">
                  Explore
                </button>
                <button className="w-[42px] h-[42px] rounded-lg border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ShoppingBag size={20} weight="regular" />
                </button>
              </div>
            </div>

            {/* Image overflowing on right */}
            <div className="relative md:absolute md:-right-24 md:-bottom-24 w-48 md:w-[500px] h-48 md:h-[550px] -mb-10 md:mb-0 mx-auto md:mx-0 z-10 pointer-events-none">
              <Image 
                src="/Rose Gold Feminine Calligraphy Monogram Logo(15) 2 (1).png" 
                alt="For Fresh Decs Ai Plat" 
                fill 
                className="object-contain drop-shadow-2xl scale-100 md:scale-125" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
