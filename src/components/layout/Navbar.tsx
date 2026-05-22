'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { MagnifyingGlass, ShoppingCart, User, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Plants Type', href: '#plants-type' },
  { label: 'More', href: '#more' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide navbar if scrolling down and scrolled past 100px
    if (previous !== undefined && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: hidden ? '-100%' : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 py-6"
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-[26px] font-bold text-white tracking-wide">
            <div className="relative w-12 h-12">
              <Image src="/plant1.png" alt="Planto Logo" fill className="object-contain drop-shadow-md scale-[3] origin-top translate-y-1 translate-x-1" />
            </div>
            Planto.
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-[#FFF84E] transition-colors" aria-label="Search">
              <MagnifyingGlass size={22} weight="bold" />
            </button>
            <button className="text-white hover:text-[#FFF84E] transition-colors" aria-label="Cart">
              <ShoppingCart size={22} weight="bold" />
            </button>
            <button className="text-white hover:text-[#FFF84E] transition-colors" aria-label="User profile">
              <User size={22} weight="bold" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <List size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[#1B2316] flex flex-col p-6"
          >
            <div className="flex justify-end mb-10">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <ul className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-8 mt-12">
              <button className="text-white"><MagnifyingGlass size={28} /></button>
              <button className="text-white"><ShoppingCart size={28} /></button>
              <button className="text-white"><User size={28} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
