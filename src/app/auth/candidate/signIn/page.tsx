'use client';
//components
import { CandidateAuthForm, AuthLayout } from '@/components';
//other
import { AuthPageMode, FormMode } from '@/types';

export default function SignInPage() {
  return (
    <AuthLayout mode={AuthPageMode.Candidate}>
      <CandidateAuthForm mode={FormMode.SignIn} />
    </AuthLayout>
  );
}
