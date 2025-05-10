'use client';

import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/shadcnComponents/dialog';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WelcomeDialogProps {
  open: boolean;
  onClose: () => void;
}

export const WelcomeDialog = ({ open, onClose }: WelcomeDialogProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const markFirstLoginComplete = async () => {
    await fetch('/api/auth/disable-first-login', {
      method: 'POST',
      credentials: 'include',
    });
  };

  const handleGoToProfile = async () => {
    setLoading(true);
    await markFirstLoginComplete();
    onClose();
    router.push('/candidate/profile/create');
  };

  const handleBrowse = async () => {
    setLoading(true);
    await markFirstLoginComplete();
    onClose();
    router.push('/');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='max-w-md backdrop-blur'>
        <DialogHeader>
          <DialogTitle className='text-2xl text-center'>
            Witamy w CodeCarrer!
          </DialogTitle>
        </DialogHeader>
        <div className='text-gray-700 mt-2 text-center text-sm'>
          <p>
            Cieszymy się, że dołączyłeś! Stwórz swój profil kandydata, aby dać
            się odnaleźć pracodawcom.
          </p>
          <p className='mt-2'>Dzięki temu:</p>
          <ul className='list-disc list-inside text-left text-sm mt-1'>
            <li>Wgrasz swoje CV i zdjęcie</li>
            <li>Opiszesz swoje umiejętności</li>
            <li>Pracodawcy będą mogli Cię znaleźć i zaprosić na rozmowę</li>
          </ul>
        </div>
        <div className='mt-4 space-y-2'>
          <Button
            className='w-full text-white bg-gradient-to-r from-purple-600 to-blue-400'
            onClick={handleGoToProfile}
            disabled={loading}
          >
            Stwórz profil kandydata
          </Button>
          <Button
            variant='outline'
            className='w-full'
            onClick={handleBrowse}
            disabled={loading}
          >
            Przeglądaj oferty pracy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
