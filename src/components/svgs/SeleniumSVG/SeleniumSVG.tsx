import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const SeleniumSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/selenium.svg'
      alt='Selenium'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};