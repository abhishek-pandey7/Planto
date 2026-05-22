'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PlayCircle, CaretRight } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import StarRating from '../ui/StarRating';

import { gallerySlides } from '../../data/mockData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center" id="home">
      <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Text and Review */}
        <div className="flex flex-col justify-center max-w-xl relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[80px] lg:text-[96px] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Breath Natural
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[14px] md:text-[15px] text-white/70 max-w-md mb-10 leading-relaxed font-light"
          >
            Transform your living space with our curated collection of indoor plants. Breathe easier, sleep better, and bring a touch of the outdoors right into your home.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 mb-12"
          >
            <button className="px-8 py-3 rounded-[30px] bg-transparent border border-white/60 text-white font-medium text-[15px] hover:bg-white hover:text-black transition-all">
              Explore
            </button>
            <button className="flex items-center gap-3 text-white/80 text-[14px] font-medium hover:text-white transition-colors">
              <PlayCircle size={36} weight="light" />
              Live Demo...
            </button>
          </motion.div>

          {/* Floating Review Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-[24px] p-5 max-w-[280px] ml-0 md:ml-4"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src="/unsplash__7LbC5J-jw4.png" alt="alena Patel" fill className="object-cover scale-[3] origin-top translate-y-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-white">alena Patel</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <StarRating size={12} />
                </div>
              </div>
            </div>
            <p className="text-[12px] text-white/60 leading-relaxed">
              I've never been able to keep plants alive, but Planto's care guides made it so easy. My apartment looks amazing!
            </p>
          </motion.div>
        </div>

        {/* Right Column: Plant Card Gallery */}
        <div className="flex justify-end items-center relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-[340px] md:max-w-none md:w-[380px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[20px] border border-white/20 rounded-[40px] p-8 pt-56 flex flex-col mt-40 lg:mt-0 mx-auto lg:mx-0"
          >
            {/* Pop-out Image Gallery */}
            <div className="absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 w-[260px] md:w-[450px] h-[350px] md:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={gallerySlides[currentSlide].image} 
                    alt={gallerySlides[currentSlide].name} 
                    fill 
                    className={`object-contain drop-shadow-2xl scale-125 transition-transform duration-700 ${gallerySlides[currentSlide].customClass || ''}`}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 relative z-10">
              <h4 className="text-[13px] text-white/60 mb-2 font-medium">Trendy House Plant</h4>
              <div className="flex items-center justify-between mb-8">
                <AnimatePresence mode="wait">
                  <motion.h3 
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[28px] font-semibold text-white tracking-wide"
                  >
                    {gallerySlides[currentSlide].name}
                  </motion.h3>
                </AnimatePresence>
                <CaretRight size={20} className="text-white/60" />
              </div>
              
              <button className="px-8 py-2.5 rounded-[30px] bg-transparent border border-white/60 text-white text-[14px] font-medium hover:bg-white hover:text-black transition-all mb-8">
                Buy Now
              </button>

              {/* Dynamic Pagination Dots */}
              <div className="flex items-center justify-center gap-2">
                {gallerySlides.map((slide, idx) => (
                  <button 
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
