import { z } from 'zod';

export const userProfileSchema = z.object({
  firstName: z.string().min(2, { message: 'Imię jest wymagane' }),
  lastName: z.string().min(2, { message: 'Nazwisko jest wymagane' }),
  email: z.string().email({ message: 'Niepoprawny adres email' }),
  birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Niepoprawna data',
  }),
  phone: z
    .string()
    .min(6, { message: 'Numer jest za krótki' })
    .regex(/^\+?\d+$/, { message: 'Nieprawidłowy numer telefonu' }),
  country: z.string().min(2, { message: 'Wybierz kraj' }),
  city: z.string().min(2, { message: 'Miasto jest wymagane' }),
});

export type UserProfileFormValues = z.infer<typeof userProfileSchema>;
