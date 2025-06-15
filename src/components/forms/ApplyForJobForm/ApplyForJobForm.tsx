'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { candidateProfileSchema, CandidateProfileFormValues } from './schema';
import { InputControl, TextareaControl, UploadCvControl } from '@/components';
import { InputType } from '@/types';
import { Button } from '@/components/ui';
import { toast } from 'sonner';

export const ApplyForJobForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<CandidateProfileFormValues>({
    resolver: zodResolver(candidateProfileSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      linkedin: '',
      github: '',
      portfolio: '',
      cv: undefined,
    },
  });

  const onSubmit = async (data: CandidateProfileFormValues) => {
    const file = data.cv[0];
    toast.success(`CV wysłane: ${file.name}`);
  };

  return (
    <form className='mb-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto text-foreground mb-4'>
        <InputControl
          name='firstName'
          control={control}
          label='Imię'
          placeholder='Jan'
          isRequired
          type={InputType.Text}
        />
        <InputControl
          name='lastName'
          control={control}
          label='Nazwisko'
          isRequired
          placeholder='Kowalski'
          type={InputType.Text}
        />
        <InputControl
          name='email'
          control={control}
          label='Email'
          isRequired
          placeholder='jan.kowalski@example.com'
          type={InputType.Email}
        />
        <TextareaControl
          name='description'
          control={control}
          label='O mnie (opcjonalnie)'
          placeholder='Napisz kilka słów o sobie...'
        />
        <InputControl
          name='linkedin'
          control={control}
          label='LinkedIn'
          placeholder='https://linkedin.com/in/username'
          type={InputType.Url}
        />
        <InputControl
          name='github'
          control={control}
          label='GitHub'
          placeholder='https://github.com/username'
          type={InputType.Url}
        />
        <InputControl
          name='portfolio'
          control={control}
          label='Portfolio'
          placeholder='https://my-portfolio.com'
          type={InputType.Url}
        />
        <UploadCvControl isRequired control={control} name='cv' />
      </div>
      <div className='flex justify-center items-center'>
        <Button
          type='submit'
          className='w-[300px] bg-gradient-to-r from-purple-600 to-blue-400 text-white mt-2 rounded-full hover:opacity-90 hover:scale-105 transition-all'
          disabled={!isValid || isSubmitting}
        >
          Aplikuj
        </Button>
      </div>
    </form>
  );
};
