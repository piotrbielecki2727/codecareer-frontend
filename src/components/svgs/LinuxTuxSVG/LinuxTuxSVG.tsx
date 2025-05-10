import React from 'react';
import Image from 'next/image';

interface LinuxTuxSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const LinuxTuxSVG: React.FC<LinuxTuxSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/linux-tux.svg'
      alt='Linux'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};