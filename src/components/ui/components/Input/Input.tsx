//core
import { Eye, EyeOff, Search } from 'lucide-react';
//components
import { ShadcnInput } from './base';
import { Label } from '../Label';
import { Button } from '../Button';
//other
import { cn } from '@/lib/utils';
import { InputType } from '@/types';
import { useState } from 'react';

interface IInput {
  id?: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isSearchBar?: boolean; // nowy prop
}

export const Input = ({
  id,
  label,
  type = InputType.Text,
  placeholder,
  value,
  className,
  onChange,
  isSearchBar = false, // domyślnie false
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className='text-sm font-medium'>
        {label}
      </Label>
      <div className='relative'>
        {isSearchBar && (
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
          className={cn(
            'bg-white dark:bg-neutral-900 hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out',
            isPassword && 'pr-10',
            isSearchBar && 'pl-10' // przesunięcie tekstu w prawo, aby nie nachodził na ikonę
          )}
        />
        {isPassword && (
          <Button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            variant='ghost'
            size='icon'
            className='absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-muted-foreground'
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        )}
      </div>
    </div>
  );
};
