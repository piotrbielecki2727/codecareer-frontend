'use client';

import React from 'react';
import { FiltersSidebar, SearchBar, SpecializationFilter } from './components';

export const MainPageLayout = () => {
  return (
    <div className='flex flex-col p-2'>
      <div className='p-2 flex items-center justify-center mt-4'>
        <SearchBar />
      </div>
      <div className='p-2 flex items-center justify-center'>
        <SpecializationFilter />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-6'>
        <div className='col-span-1 rounded-l-lg bg-neutral-100 dark:bg-neutral-900 p-4'>
          <FiltersSidebar />
        </div>
        <div className='bg-blue-400 col-span-4'>
          <p className='text-lg font-semibold'>
            Tutaj będą wyświetlane oferty pracy
          </p>
        </div>
      </div>
    </div>
  );
};
