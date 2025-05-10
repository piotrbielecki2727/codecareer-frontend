import React from 'react';
import Image from 'next/image';

interface TableauSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const TableauSVG: React.FC<TableauSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/tableau-icon.svg'
      alt='Tableau'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};