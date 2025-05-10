import React from 'react';
import Image from 'next/image';

interface DotNetSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const DotNetSVG: React.FC<DotNetSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/dotnett.svg'
      alt='.NET'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};