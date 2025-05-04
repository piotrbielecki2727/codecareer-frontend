'use client';

import { Moon, Sun, Laptop2, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/shadcnComponents/dropdown-menu';
import { Button } from '@/components/ui';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const items = [
    { label: 'Light', value: 'light', icon: Sun },
    { label: 'Dark', value: 'dark', icon: Moon },
    { label: 'System', value: 'system', icon: Laptop2 },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-muted rounded-md'
        >
          <Sun className='h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-1' align='end'>
        {items.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-2 p-2 ${
              theme === value ? 'bg-muted font-semibold' : ''
            }`}
          >
            <Icon className='w-4 h-4' />
            {label}
            {theme === value && (
              <Check className='ml-auto w-4 h-4 opacity-70' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
