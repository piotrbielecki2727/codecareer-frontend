import { CandidateData } from '@/components/layout/CandidatesPanelLayout/components';
import { CandidateLabels } from '@/components/layout/CandidatesPanelLayout/components/CandidateCard/useCandidateLabels';
import { create } from 'zustand';

export interface Candidate {
  candidate: CandidateData;
  candidateLabels: CandidateLabels;
}

type CandidateStore = {
  selectedCandidate: Candidate | null;
  setSelectedCandidate: (candidate: Candidate) => void;
};

export const useCandidateStore = create<CandidateStore>((set) => ({
  selectedCandidate: null,
  setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate }),
}));
