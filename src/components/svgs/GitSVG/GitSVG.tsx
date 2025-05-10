import React from 'react';
import Image from 'next/image';

interface GitSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const GitSVG: React.FC<GitSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/git-icon.svg'
      alt='Git'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};
