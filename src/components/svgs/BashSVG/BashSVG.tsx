import React from 'react';
import Image from 'next/image';

interface BashSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const BashSVG: React.FC<BashSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/bash-icon.svg'
      alt='Bash'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};