'use client';

import { CandidateProfileForm, YourProfileForm } from '@/components/forms';
import { useAuthStore } from '@/hooks';
import { Role } from '@/types';

export const YourProfileLayout = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <YourProfileForm />
      {user && user.role === Role.CANDIDATE && <CandidateProfileForm />}
    </>
  );
};
