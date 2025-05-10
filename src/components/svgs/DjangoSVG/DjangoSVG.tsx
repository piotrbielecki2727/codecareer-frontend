import React from 'react';
import Image from 'next/image';

interface DjangoSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const DjangoSVG: React.FC<DjangoSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/django-icon.svg'
      alt='Django'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};