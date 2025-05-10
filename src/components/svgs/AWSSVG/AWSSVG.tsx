import React from 'react';
import Image from 'next/image';

interface AWSSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const AWSSVG: React.FC<AWSSVGProps> = ({ 
  className = '', 
  width = 24, 
  height = 24 
}) => {
  return (
    <Image 
      src="/svgs/aws.svg" 
      alt="AWS" 
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};