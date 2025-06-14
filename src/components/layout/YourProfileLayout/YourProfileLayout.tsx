'use client';

import Image from 'next/image';
import { Role } from '@/types';

export const YourProfileLayout = () => {
  const user = {
    role: Role.EMPLOYER,
    firstName: 'Marcin',
    lastName: 'Kowalski',
    email: 'marcin.kowalski@cloudspark.io',
    companyName: 'CloudSpark',
    companyLogo: '/images/cloudspark-logo.png',
    profilePhoto: '/images/profile.png',
  };

  return (
    <div className='max-w-5xl mx-auto mt-10 p-6 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white'>
      <h1 className='text-2xl font-bold mb-6'>Twój profil</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        {/* Zdjęcie profilowe */}
        <div className='flex flex-col items-center'>
          <div className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-md'>
            <Image
              src={user.profilePhoto}
              alt='Profile photo'
              fill
              className='object-cover'
            />
          </div>
          <p className='mt-3 text-sm text-muted-foreground text-center'>
            Możesz przesłać zdjęcie PNG lub JPG.
          </p>
          <button className='mt-2 text-sm font-medium text-purple-500 hover:underline'>
            Zmień zdjęcie
          </button>
        </div>

        {/* Dane użytkownika */}
        <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <p className='text-sm text-muted-foreground'>Imię</p>
            <p className='font-semibold'>{user.firstName}</p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>Nazwisko</p>
            <p className='font-semibold'>{user.lastName}</p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>Email</p>
            <p className='font-semibold'>{user.email}</p>
          </div>
          {user.role === Role.EMPLOYER && (
            <div className='col-span-2 flex items-center gap-4'>
              <div className='relative w-16 h-16 rounded-full bg-amber-300'>
                <Image
                  src='https://res.cloudinary.com/diur3hroj/image/upload/v1749847636/w1wugbe0eet0kmbu3hpd.jpg'
                  alt='Company logo'
                  className='object-contain rounded-full'
                  width={76}
                  height={76}
                />
              </div>
              <div>
                <p className='text-sm text-muted-foreground'>Firma</p>
                <p className='font-semibold text-purple-400'>
                  {user.companyName}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
