import React from 'react';
import Image from 'next/image';

interface SqlDatabaseSVGProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const SqlDatabaseSVG: React.FC<SqlDatabaseSVGProps> = ({
  className = '',
  width = 24,
  height = 24,
}) => {
  return (
    <Image
      src='/svgs/Sql_data_base_with_logo.svg'
      alt='SQL Database'
      className={className}
      width={Number(width)}
      height={Number(height)}
      priority
    />
  );
};