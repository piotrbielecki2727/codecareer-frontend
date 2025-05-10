import React from 'react';
import Image from 'next/image';

interface AnsibleSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const AnsibleSVG: React.FC<AnsibleSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/ansible.svg'
      alt='Ansible'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};