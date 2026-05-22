import React from 'react';

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
  size?: number;
  color?: string;
}

export default function StarRating({ 
  rating = 5, 
  maxStars = 5, 
  size = 12, 
  color = "#FFF84E" 
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => (
        <svg 
          key={index} 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill={index < rating ? color : "none"} 
          stroke={color}
          strokeWidth="1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}
