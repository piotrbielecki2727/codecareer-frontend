import { Eye, EyeOff, Search, X } from 'lucide-react';
import { ShadcnInput } from './base';
import { Label } from '../Label';
import { Button } from '../Button';
import { cn } from '@/lib/utils';
import { InputType } from '@/types';
import { useState } from 'react';

interface IInput {
  id?: string;
  label?: React.ReactNode;
  type?: InputType;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isSearchBar?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  isDeleteButton?: boolean; // NEW
}

export const Input = ({
  id,
  label,
  type = InputType.Text,
  placeholder,
  value,
  isRequired,
  onChange,
  className,
  isSearchBar = false,
  icon,
  disabled,
  isDeleteButton = false,
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const showLeftIcon = isSearchBar || icon;
  const showClearButton = isDeleteButton && value && value.length > 0;

  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label required={isRequired} htmlFor={id} className='text-sm font-medium'>
        {label}
      </Label>
      <div className='relative'>
        {icon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none'>
            {icon}
          </div>
        )}
        {isSearchBar && !icon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground'>
            <Search size={18} />
          </div>
        )}

        <ShadcnInput
          id={id}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            'bg-white dark:bg-neutral-900 transition-colors duration-400 ease-in-out',
            !disabled && 'hover:bg-muted dark:hover:bg-neutral-800',
            (isPassword || showClearButton) && 'pr-10',
            showLeftIcon && 'pl-10',
            disabled && 'opacity-60 cursor-not-allowed'
          )}
        />

        {isPassword && (
          <Button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            variant='ghost'
            size='icon'
            className='absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-muted-foreground'
            disabled={disabled}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        )}

        {showClearButton && (
          <Button
            type='button'
            onClick={handleClear}
            variant='ghost'
            size='icon'
            className='absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-muted-foreground'
            disabled={disabled}
          >
            <X size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};
