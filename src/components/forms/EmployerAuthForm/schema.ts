import { z } from 'zod';

export const employerSignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type IEmployerSignInForm = z.infer<typeof employerSignInSchema>;

export const employerSignInDefaultValues: IEmployerSignInForm = {
  email: '',
  password: '',
};

export const employerSignUpSchema = z
  .object({
    name: z.string().min(2, { message: 'Name is required' }),
    lastName: z.string().min(2, { message: 'Last name is required' }),
    companyName: z.string().min(2, { message: 'Company name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z
      .string()
      .min(5, { message: 'Phone number is required' })
      .regex(/^\+?\d{5,}$/, { message: 'Invalid phone number' }),
    password: z
      .string()
      .min(8, { message: 'Minimum 8 characters' })
      .regex(/[A-Z]/, { message: 'Must contain 1 uppercase letter' })
      .regex(/[0-9]/, { message: 'Must contain 1 number' })
      .regex(/[^A-Za-z0-9]/, { message: 'Must contain 1 special character' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type IEmployerSignUpForm = z.infer<typeof employerSignUpSchema>;

export const employerSignUpDefaultValues: IEmployerSignUpForm = {
  name: '',
  lastName: '',
  companyName: '',
  email: '',
  phone: '+48',
  password: '',
  confirmPassword: '',
};
