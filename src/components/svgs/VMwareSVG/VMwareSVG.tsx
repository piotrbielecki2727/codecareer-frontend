import React from 'react';
import Image from 'next/image';

interface VMwareSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const VMwareSVG: React.FC<VMwareSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/vmware.svg'
      alt='VMware'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};