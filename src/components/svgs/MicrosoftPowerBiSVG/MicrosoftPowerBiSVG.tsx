import React from 'react';
import Image from 'next/image';

interface MicrosoftPowerBiSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const MicrosoftPowerBiSVG: React.FC<MicrosoftPowerBiSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/microsoft-power-bi.svg'
      alt='Microsoft Power BI'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};