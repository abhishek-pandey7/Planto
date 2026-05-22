'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const o2Slides = [
  { id: 0, image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png" },
  { id: 1, image: "/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png" },
  { id: 2, image: "/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png" },
  { id: 3, image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png" },
];

export default function BestO2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % o2Slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? o2Slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % o2Slides.length);
  };

  return (
    <section className="h-screen min-h-[800px] flex flex-col justify-center relative overflow-hidden">
      <div className="section-container max-w-6xl w-full mx-auto flex flex-col h-full py-12 justify-center">
        
        {/* Title */}
        <div className="text-center mb-16 relative flex items-center justify-center shrink-0">
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-l-2 border-white/60 left-1/2 -translate-x-[140px] md:-translate-x-[170px]" />
          <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-wide">Our Best o2</h2>
          <div className="absolute w-6 h-10 border-t-2 border-b-2 border-r-2 border-white/60 right-1/2 translate-x-[140px] md:translate-x-[170px]" />
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[20px] border border-white/20 rounded-[40px] md:rounded-[60px] p-8 md:p-14 flex flex-col md:flex-row items-center md:items-stretch min-h-[350px] shrink-0"
        >
          {/* Pop-out Image Gallery on Left */}
          <div className="relative md:absolute md:left-4 md:-top-16 md:-bottom-16 w-full md:w-[450px] h-[300px] md:h-auto z-10 pointer-events-none flex items-center justify-center -mt-20 md:mt-0 mb-8 md:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: 20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                <Image
                  src={o2Slides[currentSlide].image}
                  alt={`Best o2 Plant ${currentSlide + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl scale-125 md:scale-110"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Text Content on Right */}
          <div className="md:ml-[480px] flex flex-col justify-center text-left w-full z-20">
            <h3 className="text-[28px] md:text-[34px] font-bold text-white mb-6 leading-snug max-w-sm">
              We Have The Best Air Purifying Plant Collections
            </h3>
            
            <p className="text-[14px] md:text-[15px] text-white/70 mb-4 leading-relaxed max-w-md">
              Indoor air can be surprisingly polluted. Our specialized collection of O2-boosting plants is scientifically proven to remove toxins like formaldehyde and benzene from your environment.
            </p>
            <p className="text-[14px] md:text-[15px] text-white/70 mb-8 leading-relaxed max-w-md">
              From sturdy Snake Plants to elegant Peace Lilies, our selections not only look beautiful but actively work 24/7 to help you breathe cleaner, healthier air at home.
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <button className="px-8 py-2 rounded-lg bg-transparent border border-white/60 text-white text-[14px] font-medium hover:bg-white hover:text-black transition-all">
                Explore
              </button>
              
              <div className="flex items-center gap-4 text-white/80 text-[13px] font-medium tracking-widest">
                <button onClick={handlePrev} className="hover:text-white transition-colors">&lt;</button>
                <span>0{currentSlide + 1}/0{o2Slides.length}</span>
                <button onClick={handleNext} className="hover:text-white transition-colors">&gt;</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
