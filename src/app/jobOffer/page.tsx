'use client';

import { JobCard } from '@/components/layout/MainPageLayout/components';
import { useJobStore } from '@/hooks';
import { notFound } from 'next/navigation';

export default function JobOfferDetails() {
  const job = useJobStore((state) => state.selectedJob);

  if (!job) {
    return notFound();
  }

  return (
    <div className='p-4 max-w-3xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>{job.jobTitle}</h1>
      <JobCard jobOffer={job} />
    </div>
  );
}
