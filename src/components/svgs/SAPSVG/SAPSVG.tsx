import React from 'react';
import Image from 'next/image';

interface SAPSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const SAPSVG: React.FC<SAPSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/sap.svg'
      alt='SAP'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};