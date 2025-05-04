'use client';
import { AuthPageMode } from '@/types';
import Image from 'next/image';
import { ReactNode } from 'react';

interface IAuthLayout {
  children: ReactNode;
  mode: AuthPageMode;
}

const imageMap: Record<AuthPageMode, string> = {
  [AuthPageMode.Candidate]: '/images/signInCandidate.png',
  [AuthPageMode.Employer]: '/images/signInEmployer.png',
};

export const AuthLayout = ({ children, mode }: IAuthLayout) => {
  const imageSrc = imageMap[mode];
  const isCandidate = mode === AuthPageMode.Candidate;
  const isEmployer = mode === AuthPageMode.Employer;

  const wrapperClass = 'w-2/5 flex flex-col justify-center p-10 relative';
  const scrollContainerClass = isEmployer
    ? 'overflow-y-auto max-h-[490px] pr-2'
    : '';

  return (
    <div className='h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 dark:bg-zinc-950'>
      <div className='flex rounded-3xl shadow-2xl dark:bg-zinc-900 max-w-[1450px] w-full overflow-hidden'>
        {isCandidate ? (
          <>
            <div className={wrapperClass}>
              <div className={scrollContainerClass}>{children}</div>
            </div>
            <div className='w-3/5'>
              <Image
                src={imageSrc}
                alt='Candidate Sign In'
                width={1400}
                height={900}
                className='rounded-r-3xl object-cover'
              />
            </div>
          </>
        ) : (
          <>
            <div className='w-3/5'>
              <Image
                src={imageSrc}
                alt='Employer Sign In'
                width={1300}
                height={900}
                className='rounded-l-3xl object-cover'
              />
            </div>
            <div className={wrapperClass}>
              <div className={scrollContainerClass}>{children}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
