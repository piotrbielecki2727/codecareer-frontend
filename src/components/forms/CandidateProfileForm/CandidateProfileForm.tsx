'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DropdownControl,
  InputControl,
  SwitchControl,
} from '@/components/controlled';
import { ComboboxControl } from '@/components/controlled/ComboboxControl';
import { Button } from '@/components/ui';
import {
  candidateProfileSchema,
  CandidateProfileFormValues,
} from './candidateProfileSchema';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { technologies } from '@/lib/data/technologies';
import {
  getEmploymentTypes,
  getForeignLanguagesOptions,
  getSalaryPeriods,
  getWorkModes,
  specializations,
} from '@/lib';
import { levels } from '@/lib/data/levels';
import { InputType } from '@/types';
import { UploadCloud, X } from 'lucide-react';

const initialMockData: CandidateProfileFormValues = {
  cvFile: 'Marcin_Kowalski_CV.pdf',
  portfolioUrl: 'https://myportfolio.com',
  githubUrl: 'https://github.com/myhandle',
  linkedinUrl: 'https://linkedin.com/in/myhandle',
  specializations: ['frontend'],
  technologies: ['typescript', 'react'],
  salaryFrom: 10000,
  salaryPeriod: 'perMonth',
  languages: ['english'],
  contractTypes: ['b2b'],
  workModes: ['remote'],
  experienceLevel: ['junior', 'mid'],
  isVisible: true,
};

export const CandidateProfileForm = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<CandidateProfileFormValues>({
    resolver: zodResolver(candidateProfileSchema),
    defaultValues: initialMockData,
    mode: 'onChange',
  });

  const isSaveDisabled = isSubmitting || !isDirty;

  const onSubmit = (data: CandidateProfileFormValues) => {
    console.log('Save candidate profile', data);
    toast.success(t('candidateProfile.saved'));
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
    toast.info(t('candidateProfile.cancelled'));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
      toast.success(t('candidateProfile.cvUploaded'));
    } else {
      toast.error(t('candidateProfile.cvInvalid'));
    }
  };

  const handleFileRemove = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-[1250px] mx-auto mt-10 p-6 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white relative'
    >
      <div className='absolute top-5 right-6 flex gap-2'>
        {isEditing ? (
          <>
            <Button
              type='submit'
              disabled={isSaveDisabled}
              className='bg-gradient-to-r from-purple-600 to-blue-400 text-white'
            >
              {t('candidateProfile.save')}
            </Button>
            <Button type='button' variant='ghost' onClick={handleCancel}>
              {t('candidateProfile.cancel')}
            </Button>
          </>
        ) : (
          <Button type='button' onClick={() => setIsEditing(true)}>
            {t('candidateProfile.edit')}
          </Button>
        )}
      </div>

      <div className='flex justify-between items-start mb-6'>
        <div>
          <div className='flex gap-4 items-center'>
            <h2 className='text-xl font-bold mr-6'>
              {t('candidateProfile.title')}
            </h2>
            <div className='flex items-center  gap-4'>
              <span className='text-sm'>
                {t('candidateProfile.visibilityLabel')}
              </span>
              <SwitchControl
                wrapperClassName='mt-2'
                name='isVisible'
                control={control}
              />
            </div>
          </div>
          <p className='text-sm text-muted-foreground mt-3'>
            {t('candidateProfile.visibilityNote')}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <InputControl
          name='portfolioUrl'
          control={control}
          label={t('candidateProfile.portfolioUrl')}
          disabled={!isEditing}
        />
        <InputControl
          name='githubUrl'
          control={control}
          label={t('candidateProfile.githubUrl')}
          disabled={!isEditing}
        />
        <InputControl
          name='linkedinUrl'
          control={control}
          label={t('candidateProfile.linkedinUrl')}
          disabled={!isEditing}
        />
        <ComboboxControl
          name='specializations'
          control={control}
          label={t('candidateProfile.specializations')}
          options={specializations}
          multiSelect
          disabled={!isEditing}
        />
        <ComboboxControl
          name='technologies'
          control={control}
          label={t('candidateProfile.technologies')}
          options={technologies()}
          multiSelect
          disabled={!isEditing}
        />
        <ComboboxControl
          name='languages'
          control={control}
          label={t('candidateProfile.languages')}
          options={getForeignLanguagesOptions(t)}
          multiSelect
          disabled={!isEditing}
        />
        <ComboboxControl
          name='contractTypes'
          control={control}
          label={t('candidateProfile.contractTypes')}
          options={getEmploymentTypes(t)}
          multiSelect
          disabled={!isEditing}
        />
        <ComboboxControl
          name='workModes'
          control={control}
          label={t('candidateProfile.workModes')}
          options={getWorkModes(t)}
          multiSelect
          disabled={!isEditing}
        />
        <DropdownControl
          name='experienceLevel'
          control={control}
          label={t('candidateProfile.experienceLevel')}
          options={levels}
          disabled={!isEditing}
        />
        <div className='flex gap-6 text-center'>
          <InputControl
            name='salaryFrom'
            control={control}
            label={t('candidateProfile.salaryFrom')}
            type={InputType.Number}
            disabled={!isEditing}
          />
          <DropdownControl
            name='salaryPeriod'
            control={control}
            label={t('candidateProfile.salaryPeriod')}
            options={getSalaryPeriods(t)}
            disabled={!isEditing}
          />
        </div>
        <div className='col-span-1 md:col-span-2'>
          <label className='text-sm font-medium block mb-2'>
            {t('candidateProfile.cvFile')}
          </label>
          <div className='flex items-center gap-4'>
            <Button
              type='button'
              disabled={!isEditing}
              onClick={() => fileInputRef.current?.click()}
              className='flex items-center gap-2'
            >
              <UploadCloud className='w-4 h-4' />
              {t('candidateProfile.upload')}
            </Button>

            {cvFile && (
              <div className='flex items-center gap-2 text-sm bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded'>
                {cvFile.name}
                <button
                  type='button'
                  onClick={handleFileRemove}
                  className='text-red-500 hover:text-red-700'
                >
                  <X className='w-4 h-4' />
                </button>
              </div>
            )}
          </div>

          <input
            type='file'
            ref={fileInputRef}
            accept='application/pdf'
            onChange={handleFileChange}
            className='hidden'
          />
        </div>
      </div>
    </form>
  );
};
