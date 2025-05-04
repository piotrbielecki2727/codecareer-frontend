'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/shadcnComponents/dropdown-menu';
import { Button } from '@/components/ui';
import { LogOut, User2 } from 'lucide-react';
import { logout } from '@/lib/api/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks';

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      setUser(null);
      router.refresh();
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className='rounded-full px-4 py-2 flex items-center gap-2'
        >
          <User2 className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-56 mt-2 p-4 rounded-xl shadow-xl'
      >
        <Button
          variant='destructive'
          onClick={handleLogout}
          className='w-full flex items-center gap-2'
        >
          <LogOut className='w-4 h-4' />
          Wyloguj
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
