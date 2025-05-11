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
        href: ROUTES.GENERAL.AUTH_CANDIDATE_SIGN_IN,
        label: 'signInCandidate',
      },
      {
        href: ROUTES.GENERAL.AUTH_CANDIDATE_SIGN_UP,
        label: 'signUpCandidate',
      },
    ],
  },
  {
    title: 'employerZone',
    icon: Briefcase,
    links: [
      {
        href: ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_IN,
        label: 'signInEmployer',
      },
      {
        href: ROUTES.GENERAL.AUTH_EMPLOYER_SIGN_UP,
        label: 'signUpEmployer',
      },
    ],
  },
];
