import { JobPostFormData } from '@/components/layout/MainPageLayout/components';
import { JobPostLabels } from '@/components/layout/MainPageLayout/components/JobCard/useJobPostLabels';
import { create } from 'zustand';

export interface JobOffer {
  job: JobPostFormData;
  jobOfferLabels: JobPostLabels;
}

type JobStore = {
  selectedJob: JobOffer | null;
  setSelectedJob: (jobOffer: JobOffer) => void;
};

export const useJobStore = create<JobStore>((set) => ({
  selectedJob: null,
  setSelectedJob: (jobOffer) => set({ selectedJob: jobOffer }),
}));
