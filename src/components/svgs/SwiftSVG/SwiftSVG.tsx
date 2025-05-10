import React from 'react';
import Image from 'next/image';

interface SwiftSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const SwiftSVG: React.FC<SwiftSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/swift.svg'
      alt='Swift'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
