import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type ISignInForm = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ISignUpForm = z.infer<typeof signUpSchema>;

export const signInDefaultValues: ISignInForm = {
  email: '',
  password: '',
};

export const signUpDefaultValues: ISignUpForm = {
  email: '',
  password: '',
  confirmPassword: '',
};
