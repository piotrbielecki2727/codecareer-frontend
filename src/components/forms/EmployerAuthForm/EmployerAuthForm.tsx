'use client';

// core
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// components
import { Button } from '@/components/ui';
import { InputControl } from '@/components';
import { toast } from 'sonner';
// other
import { FormMode, InputType } from '@/types';
import { ROUTES } from '@/routes';
import { EmployerFormFields } from './types';
import {
  employerSignInDefaultValues,
  employerSignInSchema,
  employerSignUpDefaultValues,
  employerSignUpSchema,
  IEmployerSignInForm,
  IEmployerSignUpForm,
} from './schema';
import { login, registerEmployer } from '@/lib';
import { useAuth } from '@/hooks';
import { useTranslation } from 'react-i18next';

type Props = {
  mode: FormMode;
};

export const EmployerAuthForm = ({ mode }: Props) => {
  const isLogin = mode === FormMode.SignIn;
  const router = useRouter();
  const { setUser } = useAuth();
  const { t } = useTranslation();

  const schema = isLogin ? employerSignInSchema : employerSignUpSchema;
  const defaultValues = isLogin
    ? employerSignInDefaultValues
    : employerSignUpDefaultValues;

  const onSubmit = async (data: IEmployerSignInForm | IEmployerSignUpForm) => {
    try {
      if (isLogin) {
        const res = await login(data as IEmployerSignInForm);
        toast.success(t('signedInSuccessfully'));
        setUser(res.user);
        router.push(ROUTES.GENERAL.HOME);
      } else {
        await registerEmployer(data as IEmployerSignUpForm);
        toast.success(t('accountCreated'));
        router.push(ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN);
      }
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: { message?: string } } };
      const message =
        axiosError?.response?.data?.message || t('somethingWentWrong');
      toast.error(message);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IEmployerSignInForm | IEmployerSignUpForm>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const title = isLogin ? t('signIn') : t('signUp');
  const subtitle = isLogin ? t('toDashboard') : t('toStartHiring');
  const submitText = isLogin ? t('signIn') : t('createAccount');

  const footerText = isLogin
    ? {
        question: t('dontHaveAccount'),
        action: t('signUp'),
        href: ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_UP,
      }
    : {
        question: t('alreadyHaveAccount'),
        action: t('signIn'),
        href: ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN,
      };

  return (
    <>
      <div className='text-2xl font-semibold text-center mb-6 dark:text-white flex flex-wrap justify-center gap-2 text-balance'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
          {title}
        </span>
        <span>{subtitle}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>
        {!isLogin && (
          <>
            <InputControl
              name={EmployerFormFields.Name}
              control={control}
              label={t('name')}
              placeholder={t('exampleNamePlaceholder')}
              type={InputType.Text}
            />
            <InputControl
              name={EmployerFormFields.LastName}
              control={control}
              label={t('lastName')}
              placeholder={t('exampleLastNamePlaceholder')}
              type={InputType.Text}
            />
            <InputControl
              name={EmployerFormFields.CompanyName}
              control={control}
              label={t('companyName')}
              placeholder={t('exampleCompanyPlaceholder')}
              type={InputType.Text}
            />
          </>
        )}

        <InputControl
          name={EmployerFormFields.Email}
          control={control}
          label={t('workEmail')}
          placeholder={t('workEmailPlaceholder')}
          type={InputType.Email}
        />
        <InputControl
          name={EmployerFormFields.Password}
          control={control}
          label={t('password')}
          placeholder={t('atLeastCharacters')}
          type={InputType.Password}
        />

        {!isLogin && (
          <>
            <InputControl
              name={EmployerFormFields.ConfirmPassword}
              control={control}
              label={t('repeatPassword')}
              placeholder={t('repeatPassword')}
              type={InputType.Password}
            />
            <InputControl
              name={EmployerFormFields.Phone}
              control={control}
              label={t('workPhone')}
              placeholder='+48'
              type={InputType.Tel}
            />
          </>
        )}

        <Button
          type='submit'
          className='w-full bg-gradient-to-r from-purple-600 to-blue-400 text-white mt-2'
          disabled={!isDirty}
        >
          {submitText}
        </Button>
      </form>

      <div className='text-center text-sm text-muted-foreground mt-4 dark:text-zinc-400 gap-1 flex justify-center'>
        <span>{footerText.question}</span>
        <Link
          href={footerText.href}
          className='text-md font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'
        >
          {footerText.action}
        </Link>
      </div>
    </>
  );
};
