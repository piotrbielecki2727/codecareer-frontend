'use client';
//components
import { CandidateAuthForm, AuthLayout } from '@/components';
//other
import { AuthPageMode, FormMode } from '@/types';

export default function SignUpPage() {
  return (
    <AuthLayout mode={AuthPageMode.Candidate}>
      <CandidateAuthForm mode={FormMode.SignUp} />
    </AuthLayout>
  );
}
