import { Role } from '@/types';
import { ROUTES } from './routes';

export const roleRoutes: Record<Role, string[]> = {
  EMPLOYER: [
    ROUTES.GENERAL.HOME,
    ROUTES.EMPLOYER.POST_A_JOB,
    ROUTES.EMPLOYER.YOUR_PROFILE,
    '/employer',
  ],
  CANDIDATE: [
    ROUTES.GENERAL.HOME,
    ROUTES.CANDIDATE.APPLY_FOR_JOB,
    ROUTES.CANDIDATE.YOUR_PROFILE,
    '/candidate',
  ],
  ADMIN: [ROUTES.GENERAL.HOME, ROUTES.ADMIN.USER_MANAGEMENT, '/admin'],
};
