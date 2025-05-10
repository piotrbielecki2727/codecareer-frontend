'use client';
//core
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
//components
import { Button } from '@/components/ui';
import { InputControl } from '@/components';
import { toast } from 'sonner';
//other
import { FormMode, InputType } from '@/types';
import { ROUTES } from '@/routes';
import {
  signInSchema,
  signUpSchema,
  signInDefaultValues,
  signUpDefaultValues,
  ISignInForm,
  ISignUpForm,
} from './schema';
import { AuthFormFields } from './types';
import { login, registerCandidate } from '@/lib';
import { useAuth } from '@/hooks';
import { useTranslation } from 'react-i18next';

type Props = {
  mode: FormMode;
};

export const CandidateAuthForm = ({ mode }: Props) => {
  const isLogin = mode === FormMode.SignIn;
  const router = useRouter();
  const { setUser } = useAuth();
  const { t } = useTranslation();

  const schema = isLogin ? signInSchema : signUpSchema;
  const defaultValues = isLogin ? signInDefaultValues : signUpDefaultValues;

  const onSubmit = async (data: ISignInForm | ISignUpForm) => {
    try {
      if (isLogin) {
        const res = await login(data as ISignInForm);
        toast.success(t('signedInSuccessfully'));
        console.log(res.user);
        setUser(res.user);
        router.push(ROUTES.HOME);
      } else {
        const res = await registerCandidate(data as ISignUpForm);
        console.log(res);
        toast.success(t('accountCreated'));
        router.push(ROUTES.AUTH.CANDIDATE_SIGN_IN.PATH);
      }
    } catch (err: any) {
      const message = err?.response?.data?.message || t('somethingWentWrong');
      toast.error(message);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ISignInForm | ISignUpForm>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const title = isLogin ? t('signIn') : t('signUp');
  const subtitle = isLogin ? t('toYourAccount') : t('toGetStarted');
  const submitText = isLogin ? t('signIn') : t('createAccount');
  const footerText = isLogin
    ? {
        question: t('dontHaveAccount'),
        action: t('signUp'),
        href: ROUTES.AUTH.CANDIDATE_SIGN_UP.PATH,
      }
    : {
        question: t('alreadyHaveAccount'),
        action: t('signIn'),
        href: ROUTES.AUTH.CANDIDATE_SIGN_IN.PATH,
      };

  return (
    <>
      <h1 className='text-2xl font-semibold text-center mb-6 dark:text-white flex gap-2 justify-center'>
        <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
          {title}
        </span>
        <span>{subtitle}</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>
        <InputControl
          name={AuthFormFields.Email}
          control={control}
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          type={InputType.Email}
        />
        <InputControl
          name={AuthFormFields.Password}
          control={control}
          label={t('password')}
          placeholder={t('atLeastCharacters')}
          type={InputType.Password}
        />
        {!isLogin && (
          <InputControl
            name={AuthFormFields.ConfirmPassword}
            control={control}
            label={t('confirmPassword')}
            placeholder={t('repeatPassword')}
            type={InputType.Password}
          />
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
