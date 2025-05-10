import { ROUTES } from '@/routes';
import { Briefcase, User } from 'lucide-react';

import { TFunctionKeys } from '@/types/i18n.types';

export type SignInLink = {
  href: string;
  label: TFunctionKeys;
};

export type SignInSection = {
  title: TFunctionKeys;
  icon: React.ElementType;
  links: SignInLink[];
};

export const signInSections: SignInSection[] = [
  {
    title: 'candidateZone',
    icon: User,
    links: [
      {
        href: ROUTES.AUTH.CANDIDATE_SIGN_IN.PATH,
        label: 'signInCandidate',
      },
      {
        href: ROUTES.AUTH.CANDIDATE_SIGN_UP.PATH,
        label: 'signUpCandidate',
      },
    ],
  },
  {
    title: 'employerZone',
    icon: Briefcase,
    links: [
      {
        href: ROUTES.AUTH.EMPLOYER_SIGN_IN.PATH,
        label: 'signInEmployer',
      },
      {
        href: ROUTES.AUTH.EMPLOYER_SIGN_UP.PATH,
        label: 'signUpEmployer',
      },
    ],
  },
];
