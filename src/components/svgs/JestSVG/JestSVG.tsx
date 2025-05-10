import React from 'react';
import Image from 'next/image';

interface JestSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const JestSVG: React.FC<JestSVGProps> = ({ 
  className = '', 
  width = 24, 
  height = 24 
}) => {
  return (
    <Image 
      src="/svgs/jest.svg" 
      alt="Jest" 
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};