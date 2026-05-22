'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-20 md:py-32 bg-[#222C1D]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-[38px] md:text-[55px] font-bold text-white mb-10 leading-tight">
            Subscribe For Every Update.
          </h2>
          <form className="relative max-w-2xl mx-auto flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-[#1B2316] text-white text-[17px] placeholder-white/40 px-8 py-5 rounded-[50px] outline-none border border-white/10 focus:border-[#FFF84E]/50 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 px-8 py-3 rounded-[40px] bg-white text-[#1B2316] font-semibold text-[17px] hover:bg-[#FFF84E] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
