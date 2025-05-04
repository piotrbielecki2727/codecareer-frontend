'use client';
//components
import { EmployerAuthForm, AuthLayout } from '@/components';
//other
import { AuthPageMode, FormMode } from '@/types';

export default function SignInPage() {
  return (
    <AuthLayout mode={AuthPageMode.Employer}>
      <EmployerAuthForm mode={FormMode.SignIn} />
    </AuthLayout>
  );
}
