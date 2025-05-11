import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const KotlinSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 12,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/kotlin-icon.svg'
      alt='Kotlin'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
