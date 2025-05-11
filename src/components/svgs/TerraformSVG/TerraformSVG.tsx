import React from 'react';
import Image from 'next/image';

interface SVGIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const TerraformSVG: React.FC<SVGIconProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/terraform-icon.svg'
      alt='Terraform'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};