import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const ReactSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/react.svg'
      alt='React'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
