'use client';

import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type Props<T extends FieldValues> = UseControllerProps<T> & {
  label?: string;
  isRequired?: boolean;
};

export const UploadCvControl = <T extends FieldValues>({
  control,
  name,
  rules,
  isRequired,
  label = 'CV (PDF)',
}: Props<T>) => {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className='flex flex-col space-y-2 mt-1.5'>
      <label className='text-sm font-medium mb-1.5'>
        {label}
        {isRequired && <span className='text-red-500 ml-0.5'>*</span>}
        <span className='ml-2'>
          {'(Oczekiwany format: PDF, max. rozmiar: 5 MB)'}
        </span>
      </label>
      <input
        type='file'
        accept='application/pdf'
        onChange={(e) => onChange(e.target.files)}
        className='block w-full text-sm text-gray-900 dark:text-gray-100
          file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-white file:text-gray-700
          hover:file:bg-gray-100
          dark:file:bg-neutral-700 dark:file:text-gray-200
          dark:hover:file:bg-neutral-600'
      />

      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};
