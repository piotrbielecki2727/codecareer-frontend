import React from 'react';
import Image from 'next/image';

interface PythonSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const PythonSVG: React.FC<PythonSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/python.svg'
      alt='Python'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
