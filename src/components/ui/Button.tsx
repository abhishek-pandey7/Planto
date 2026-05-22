'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  type = 'button',
  className = '',
  id,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer select-none rounded-full';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-[#1d3d1a] text-[#f5f0e8] hover:bg-[#2d5a27] shadow-[0_4px_20px_rgba(29,61,26,0.4)] hover:shadow-[0_6px_28px_rgba(29,61,26,0.55)]',
    secondary:
      'bg-[#f5f0e8] text-[#1d3d1a] hover:bg-white shadow-[0_4px_20px_rgba(245,240,232,0.2)]',
    ghost:
      'bg-transparent text-[#f5f0e8] border border-[rgba(245,240,232,0.35)] hover:bg-[rgba(245,240,232,0.08)] hover:border-[rgba(245,240,232,0.6)]',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a href={href} id={id} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button id={id} type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
