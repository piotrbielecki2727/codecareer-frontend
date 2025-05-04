'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from './useAuthStore';

export const useAuth = () => {
  const { user, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [setUser]);

  return {
    user,
    isAuthenticated: !!user,
    loading,
    setUser,
  };
};
