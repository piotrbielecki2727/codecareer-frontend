import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const TypeScriptSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/typescript-icon.svg'
      alt='TypeScript'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
