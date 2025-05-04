import { cn } from '@/lib/utils';
import { ShadcnLabel } from './base';

type BasicLabelProps = React.ComponentProps<'label'> & {
  required?: boolean;
};

export const Label = ({
  children,
  className,
  required,
  ...props
}: BasicLabelProps) => {
  return (
    <ShadcnLabel className={cn(className)} {...props}>
      {children}
      {required && <span className='text-red-500 ml-0.5'>*</span>}
    </ShadcnLabel>
  );
};
