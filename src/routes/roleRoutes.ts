import { Role } from '@/types';
import { ROUTES } from './routes';

export const roleRoutes: Record<Role, string[]> = {
  EMPLOYER: [
    ROUTES.GENERAL.HOME,
    ROUTES.GENERAL.WELCOME,
    ROUTES.EMPLOYER.POST_A_JOB,
    '/employer', // This allows access to all routes starting with /employer
  ],
  CANDIDATE: [
    ROUTES.GENERAL.HOME,
    ROUTES.GENERAL.WELCOME,
    ROUTES.CANDIDATE.APPLY_FOR_JOB,
    '/candidate', // This allows access to all routes starting with /candidate
  ],
  ADMIN: [
    ROUTES.GENERAL.HOME,
    ROUTES.GENERAL.WELCOME,
    ROUTES.ADMIN.USER_MANAGEMENT,
    '/admin', // This allows access to all routes starting with /admin
  ],
};
