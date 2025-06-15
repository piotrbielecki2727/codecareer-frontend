'use client';

import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/components/Dropdown/base';
import { Button } from '@/components/ui';
import { ChevronDown, Globe, LogOut, SquareUser, User2 } from 'lucide-react';
import { logout } from '@/lib/api/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth, useAuthStore } from '@/hooks';
import { ROUTES } from '@/routes';
import { useTranslation } from 'react-i18next';
import { Role } from '@/types';
import Link from 'next/link';

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthStore();
  const router = useRouter();
  const { setUser } = useAuth();
  const { t } = useTranslation();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      setUser(null);
      router.refresh();
      router.push(ROUTES.GENERAL.HOME);
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          type='button'
          variant='outline'
          className='rounded-full px-4 py-2 flex items-center gap-2'
        >
          <User2 className='w-5 h-5' />
          <span>{t('yourProfile.title')}</span>
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[220px] p-2'>
        <div className='flex items-center gap-2 px-2 py-2 text-sm '>
          {t('menu')}
        </div>
        <div className='bg-neutral-300 dark:bg-neutral-600 h-[1px]'></div>
        <Link
          href={ROUTES.CANDIDATE.YOUR_PROFILE}
          className='flex items-center gap-2 px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded align-middle mt-1'
        >
          <SquareUser className='w-5 h-5' />
          <span className='mt-0.5'>{t('profileDetails')}</span>
        </Link>
        {/* <div className='bg-neutral-300 dark:bg-neutral-600 h-[1px]'></div> */}
        <Button
          onClick={handleLogout}
          variant={'ghost'}
          className='w-full  items-center gap-2 mt-1 text-start flex justify-start'
        >
          <LogOut className='w-4 h-4' />
          {t('logout')}
        </Button>
        {/* <div className='bg-gray-100 h-[1px]'></div>
        <div className='flex items-center gap-2 px-2 py-2 mt-3 text-sm text-muted-foreground'>
          xddd
        </div>
        ffff */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
