import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const CppSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/c-plusplus.svg'
      alt='C++'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};