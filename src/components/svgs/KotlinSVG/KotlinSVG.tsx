import React from 'react';
import Image from 'next/image';

interface KotlinSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const KotlinSVG: React.FC<KotlinSVGProps> = ({
  className = '',
  width = 24,
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
