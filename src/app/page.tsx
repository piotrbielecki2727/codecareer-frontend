'use client';
import { MainPageLayout } from '@/components';

export default function Home() {
  return (
    <div
      className='min-h-screen w-full bg-white dark:bg-neutral-900'
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.2), transparent 60%),
          radial-gradient(ellipse at 70% 20%, rgba(37, 99, 235, 0.25), transparent 60%),
          radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.15), transparent 60%),
          radial-gradient(ellipse at 90% 60%, rgba(16, 185, 129, 0.15), transparent 60%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <MainPageLayout />
    </div>
  );
}
