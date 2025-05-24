import { z } from 'zod';

export const jobFormSchema = z.object({
  jobTitle: z.string().min(3, { message: 'Podaj nazwę ogłoszenia' }),
  companyName: z.string().min(2, { message: 'Podaj nazwę firmy' }),
  companyDescription: z
    .string()
    .min(10, { message: 'Opis firmy jest za krótki' }),
  level: z.string().nonempty({ message: 'Wybierz poziom' }),
  specialization: z.string().nonempty({ message: 'Wybierz specjalizację' }),
  contractType: z.string().nonempty({ message: 'Wybierz rodzaj umowy' }),
  workMode: z.string().nonempty({ message: 'Wybierz tryb pracy' }),
  vacancies: z
    .string()
    .refine((val) => Number(val) > 0, { message: 'Wpisz poprawną liczbę' }),
  technologies: z
    .array(z.string())
    .min(1, { message: 'Wybierz conajmniej jedną technologię' }),
  isSalaryRange: z.boolean().optional(),
  salary: z
    .number()
    .min(0, { message: 'Wpisz poprawną wartość' })
    .max(1000000, { message: 'Wartość nie może przekraczać 1 000 000' })
    .optional(),
  minSalary: z
    .number()
    .min(0, { message: 'Wpisz poprawną wartość' })
    .max(1000000, { message: 'Wartość nie może przekraczać 1 000 000' })
    .optional(),
  maxSalary: z
    .number()
    .min(0, { message: 'Wpisz poprawną wartość' })
    .max(1000000, { message: 'Wartość nie może przekraczać 1 000 000' })
    .optional(),
  currency: z.string().nonempty({ message: 'Wybierz walutę' }),
  isSalaryShown: z.boolean(),
  salaryPeriod: z.string().nonempty({ message: 'Wybierz okres wynagrodzenia' }),
  languages: z.array(z.string()),
  languageLevels: z.record(z.string(), z.string()).optional(),
  positionDescription: z.string().optional(),
  address: z.string().optional(),
  addressLat: z.number().optional(),
  addressLon: z.number().optional(),
});

export type JobFormValues = z.infer<typeof jobFormSchema>;

export const jobFormDefaultValues: JobFormValues = {
  jobTitle: '',
  companyName: '',
  companyDescription: '',
  level: '',
  specialization: '',
  contractType: '',
  workMode: '',
  vacancies: '',
  technologies: [],
  isSalaryRange: false,
  salary: undefined,
  minSalary: undefined,
  maxSalary: undefined,
  currency: '',
  isSalaryShown: false,
  salaryPeriod: '',
  languages: [],
  languageLevels: {},
  positionDescription: '',
  address: '',
  addressLat: undefined,
  addressLon: undefined,
};
