import { create } from 'zustand';
import { Role } from '../types/enum';

export type User = {
  sub: string;
  email: string;
  role: Role;
  firstLogin: boolean;
  firstName: string;
};

type AuthState = {
  user?: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  setUser: (user) => set({ user }),
}));
