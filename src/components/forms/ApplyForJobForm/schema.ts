import { z } from 'zod';

export const candidateProfileSchema = z.object({
  firstName: z.string().min(2, { message: 'Imię jest wymagane' }),
  lastName: z.string().min(2, { message: 'Nazwisko jest wymagane' }),
  email: z.string().email({ message: 'Niepoprawny adres email' }),
  description: z.string().optional(),
  linkedin: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: 'Niepoprawny adres URL',
    }),
  github: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: 'Niepoprawny adres URL',
    }),
  portfolio: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: 'Niepoprawny adres URL',
    }),
  cv: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: 'Dołącz plik CV',
      }
    )
    .refine(
      (files) => files[0]?.type === 'application/pdf',
      'Plik musi być w formacie PDF'
    )
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      'Plik nie może przekraczać 5MB'
    ),
});

export type CandidateProfileFormValues = z.infer<typeof candidateProfileSchema>;
