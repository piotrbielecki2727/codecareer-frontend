//core
import { Eye, EyeOff } from 'lucide-react';
//components
import { ShadcnInput } from './base';
import { Label } from '../Label';
import { Button } from '../Button';
//other
import { cn } from '@/lib/utils';
import { InputType } from '@/types';
import { useState } from 'react';

interface IInput {
  id: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  label,
  type = InputType.Text,
  placeholder,
  value,
  onChange,
}: IInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className='space-y-2'>
      <Label htmlFor={id} className='text-sm font-medium'>
        {label}
      </Label>
      <div className='relative'>
        <ShadcnInput
          id={id}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            'bg-white dark:bg-neutral-900 hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out',
            isPassword && 'pr-10'
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
