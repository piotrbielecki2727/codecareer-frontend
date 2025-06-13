// app/store/useJobStore.ts
import { JobPostFormData } from '@/components/layout/MainPageLayout/components';
import { create } from 'zustand';

type JobStore = {
  selectedJob: JobPostFormData | null;
  setSelectedJob: (job: JobPostFormData) => void;
};

export const useJobStore = create<JobStore>((set) => ({
  selectedJob: null,
  setSelectedJob: (job) => set({ selectedJob: job }),
}));
