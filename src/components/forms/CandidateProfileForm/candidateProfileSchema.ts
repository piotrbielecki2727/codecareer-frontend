import { z } from 'zod';

export const candidateProfileSchema = z.object({
  cvFile: z.any().optional(),

  portfolioUrl: z
    .string()
    .url({ message: 'Nieprawidłowy link do portfolio' })
    .optional()
    .or(z.literal('')),

  githubUrl: z
    .string()
    .url({ message: 'Nieprawidłowy link do GitHub' })
    .optional()
    .or(z.literal('')),

  linkedinUrl: z
    .string()
    .url({ message: 'Nieprawidłowy link do LinkedIn' })
    .optional()
    .or(z.literal('')),

  specializations: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jedną specjalizację' }),

  technologies: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jedną technologię' }),

  salaryFrom: z
    .number({ invalid_type_error: 'Podaj liczbę' })
    .min(0, { message: 'Minimalna kwota wynagrodzenia to 0' }),

  salaryPeriod: z.enum(['perHour', 'perDay', 'perMonth', 'perOrder']),

  languages: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jeden język' }),

  contractTypes: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jeden typ umowy' }),

  workModes: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jeden tryb pracy' }),

  experienceLevel: z
    .array(z.string())
    .min(1, { message: 'Wybierz przynajmniej jeden poziom doświadczenia' }),

  isVisible: z.boolean().default(false),
});

export type CandidateProfileFormValues = z.infer<typeof candidateProfileSchema>;
