import { create } from 'zustand';

type User = {
  sub: string;
  email: string;
  role: 'CANDIDATE' | 'EMPLOYER';
  firstLogin: boolean;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
