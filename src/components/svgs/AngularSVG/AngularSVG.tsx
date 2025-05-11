import React from 'react';
import Image from 'next/image';

export interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const AngularSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/angular-icon.svg'
      alt='Angular'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
