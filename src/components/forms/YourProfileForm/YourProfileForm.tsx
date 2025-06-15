'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui';
import { InputType, Role } from '@/types';
import { toast } from 'sonner';
import { UserProfileFormValues, userProfileSchema } from './userProfileSchema';
import { DropdownControl, InputControl } from '@/components/controlled';
import {
  Calendar,
  Hotel,
  IdCard,
  Mail,
  MapPin,
  Phone,
  User,
  UploadCloud,
} from 'lucide-react';
import { useAuthStore } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const YourProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  const companyName = 'TechNova';
  const { t } = useTranslation();

  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('/images/profile.png');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<UserProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: 'Marcin',
      lastName: 'Kowalski',
      email: 'marcin.kowalski@gmail.com',
      birthDate: '1990-01-01',
      phone: '666888777',
      country: 'PL',
      city: 'Kielce',
    },
  });

  const isSaveDisabled = !isValid || isSubmitting || !isDirty;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
      toast.success(t('yourProfile.photoChanged'));
    }
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
    toast.info(t('yourProfile.cancelled'));
  };

  const onSubmit = async (data: UserProfileFormValues) => {
    console.log('Submit user profile', data);
    toast.success(t('yourProfile.saved'));
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-[1250px] mx-auto mt-10 p-6 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white relative mb-2'
    >
      <div className='absolute top-6 right-6 flex gap-2'>
        {isEditing ? (
          <>
            <Button
              type='submit'
              disabled={isSaveDisabled}
              className='bg-gradient-to-r from-purple-600 to-blue-400 text-white hover:opacity-90 hover:scale-102 transition-all'
            >
              {t('yourProfile.save')}
            </Button>
            <Button
              type='button'
              variant='ghost'
              onClick={handleCancel}
              className='border border-neutral-400 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition'
            >
              {t('yourProfile.cancel')}
            </Button>
          </>
        ) : (
          <Button
            type='button'
            onClick={() => setIsEditing(true)}
            className='bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white hover:opacity-90 hover:scale-102 transition-all'
          >
            {t('yourProfile.edit')}
          </Button>
        )}
      </div>

      <h1 className='text-2xl font-bold mb-6'>
        {t('yourProfile.profileDetails')}
      </h1>

      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl p-2'>
          <div className='relative w-54 h-54 rounded-full overflow-hidden border-4 border-white shadow-lg'>
            <Image
              src={profilePhoto}
              alt='Profile photo'
              fill
              className='object-cover'
            />
          </div>
          {isEditing && (
            <>
              <button
                type='button'
                className='mt-3 flex items-center gap-1 text-sm text-white hover:underline'
                onClick={() => fileInputRef.current?.click()}
              >
                <UploadCloud size={16} />
                {t('yourProfile.changePhoto')}
              </button>
              <input
                type='file'
                accept='image/png, image/jpeg'
                ref={fileInputRef}
                onChange={handlePhotoChange}
                className='hidden'
              />
            </>
          )}
        </div>

        <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <InputControl
            name='firstName'
            control={control}
            label={t('yourProfile.firstName')}
            placeholder={t('exampleNamePlaceholder')}
            isRequired={isEditing}
            icon={<User size={18} />}
            type={InputType.Text}
            disabled={!isEditing}
          />
          <InputControl
            name='lastName'
            control={control}
            label={t('yourProfile.lastName')}
            placeholder={t('exampleLastNamePlaceholder')}
            isRequired={isEditing}
            icon={<IdCard size={18} />}
            type={InputType.Text}
            disabled={!isEditing}
          />
          <InputControl
            name='email'
            control={control}
            label={t('yourProfile.email')}
            placeholder={t('emailPlaceholder')}
            isRequired={isEditing}
            icon={<Mail size={18} />}
            type={InputType.Email}
            disabled={true}
          />
          <InputControl
            name='birthDate'
            control={control}
            label={t('yourProfile.birthDate')}
            icon={<Calendar size={18} />}
            disabled={!isEditing}
          />
          <InputControl
            name='phone'
            control={control}
            label={t('yourProfile.phoneNumber')}
            placeholder='123456789'
            isRequired={isEditing}
            icon={<Phone size={18} />}
            type={InputType.Tel}
            disabled={!isEditing}
          />
          <DropdownControl
            name='country'
            control={control}
            icon={<MapPin size={18} />}
            label={t('yourProfile.country')}
            disabled={!isEditing}
            options={[
              { label: 'Polska', value: 'PL' },
              { label: 'Anglia', value: 'EN' },
              { label: 'Niemcy', value: 'DE' },
              { label: 'Francja', value: 'FR' },
              { label: 'Hiszpania', value: 'ES' },
              { label: 'Włochy', value: 'IT' },
              { label: 'USA', value: 'US' },
              { label: 'Kanada', value: 'CA' },
              { label: 'Australia', value: 'AU' },
            ]}
          />
          <InputControl
            icon={<Hotel size={18} />}
            name='city'
            control={control}
            label={t('yourProfile.city')}
            placeholder='Warszawa'
            isRequired={isEditing}
            disabled={!isEditing}
          />
          {user?.role === Role.EMPLOYER && (
            <div className='flex mt-2 gap-4 items-center'>
              <div className='relative w-16 h-16 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow'>
                <Image
                  src='https://res.cloudinary.com/diur3hroj/image/upload/v1749847636/w1wugbe0eet0kmbu3hpd.jpg'
                  alt='Company logo'
                  fill
                  className='object-contain p-2 rounded-full'
                />
              </div>
              <div>
                <p className='text-sm text-muted-foreground'>
                  {t('yourProfile.company')}
                </p>
                <p className='font-semibold text-purple-400'>{companyName}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
