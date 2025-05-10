import React from 'react';
import Image from 'next/image';

interface VueSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const VueSVG: React.FC<VueSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/vue.svg'
      alt='Vue'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
