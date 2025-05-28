'use client';
import { MainPageLayout } from '@/components';

export default function Home() {
  return (
    <div className=' bg-white dark:bg-neutral-900'>
      <div
        className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(147,51,234,0.2),transparent_60%),radial-gradient(ellipse_at_70%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(ellipse_at_50%_80%,rgba(236,72,153,0.15),transparent_60%),radial-gradient(ellipse_at_90%_60%,rgba(16,185,129,0.15),transparent_60%)]'
        aria-hidden='true'
      />
      <div className='relative z-10'>
        <MainPageLayout />
      </div>
    </div>
  );
}
