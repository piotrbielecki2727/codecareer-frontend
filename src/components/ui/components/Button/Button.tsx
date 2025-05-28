import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants, ShadcnButton } from './base';

type BasicButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

export const Button = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: BasicButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      className={cn('cursor-pointer', className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};
