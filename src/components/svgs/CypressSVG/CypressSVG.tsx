import React from 'react';
import Image from 'next/image';

interface CypressSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const CypressSVG: React.FC<CypressSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/cypress-icon.svg'
      alt='Cypress'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};