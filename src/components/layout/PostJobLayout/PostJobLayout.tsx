'use client';

import { PostJobForm } from '@/components/forms';
import { Separator } from '@/components/ui/shadcnComponents/separator';
import { useTranslation } from 'react-i18next';

export const PostJobLayout = () => {
  const { t } = useTranslation();

  return (
    <div className='max-w-4xl mx-auto px-6 py-10 space-y-10'>
      <header className='text-center space-y-2'>
        <h1 className='text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
          {t('postJob.newJobOffer')}
        </h1>
        <p className='text-muted-foreground text-sm md:text-base max-w-xl mx-auto'>
          {t('postJob.formDescription')}
        </p>
      </header>
      <Separator className='bg-white' />
      <section>
        <PostJobForm />
      </section>
    </div>
  );
};
