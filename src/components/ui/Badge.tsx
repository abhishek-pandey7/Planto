import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'cream' | 'dark';
  className?: string;
}

export default function Badge({ children, variant = 'green', className = '' }: BadgeProps) {
  const variants = {
    green: 'bg-[#1d3d1a] text-[#f5f0e8] border border-[#2d5a27]/50',
    cream: 'bg-[#f5f0e8] text-[#1d3d1a] border border-[rgba(29,61,26,0.2)]',
    dark: 'bg-[#141414] text-[#f5f0e8] border border-[rgba(255,255,255,0.1)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
