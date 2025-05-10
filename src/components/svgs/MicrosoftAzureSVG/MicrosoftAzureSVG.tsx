import React from 'react';
import Image from 'next/image';

interface MicrosoftAzureSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const MicrosoftAzureSVG: React.FC<MicrosoftAzureSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/microsoft-azure.svg'
      alt='Microsoft Azure'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};