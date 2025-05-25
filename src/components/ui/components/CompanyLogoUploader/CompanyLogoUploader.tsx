'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { uploadToCloudinary } from '@/lib';
import { Label } from '../Label';
import { useTranslation } from 'next-i18next';

type Props = {
  onUpload: (url: string) => void;
};

export const CompanyLogoUploader = ({ onUpload }: Props) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setError(t('postJob.companyLogo.errorFormat'));
      return;
    }
    if (file.size > 1_000_000) {
      setError(t('postJob.companyLogo.errorSize'));
      return;
    }

    const url = URL.createObjectURL(file);
    const img = document.createElement('img');

    img.onload = async () => {
      if (img.width > 500 || img.height > 500) {
        setError(t('postJob.companyLogo.errorDimensions'));
        URL.revokeObjectURL(url);
        return;
      }

      try {
        setIsUploading(true);
        const uploadedUrl = await uploadToCloudinary(file);
        setPreview(uploadedUrl);
        onUpload(uploadedUrl);
      } catch {
        setError(t('postJob.companyLogo.errorUpload'));
      } finally {
        setIsUploading(false);
        URL.revokeObjectURL(url);
      }
    };

    img.onerror = () => {
      setError(t('postJob.companyLogo.errorLoading'));
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className='space-y-2'>
      <Label className='text-sm font-medium'>
        {t('postJob.companyLogo.label')}
      </Label>
      <div
        className={cn(
          'border rounded-md p-4 flex flex-col items-center justify-center space-y-2 bg-white dark:bg-neutral-900',
          isUploading && 'opacity-50 pointer-events-none'
        )}
      >
        {preview ? (
          <Image
            src={preview}
            alt={t('postJob.companyLogo.preview')}
            width={100}
            height={100}
            className='rounded-md'
          />
        ) : (
          <p className='text-sm text-muted-foreground text-center'>
            {t('postJob.companyLogo.instructions')}
          </p>
        )}
        <input
          type='file'
          accept='image/png, image/jpeg'
          className='hidden'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button
          type='button'
          onClick={() => fileInputRef.current?.click()}
          className='px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-400 text-white text-sm rounded hover:opacity-75 transition cursor-pointer'
        >
          {isUploading
            ? t('postJob.companyLogo.uploading')
            : t('postJob.companyLogo.selectFile')}
        </button>

        {error && <p className='text-sm text-red-500'>{error}</p>}
      </div>
    </div>
  );
};
