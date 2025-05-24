'use client';
import { useAuth } from '@/hooks';

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  console.log(user?.firstLogin);
  console.log(user?.role);

  return (
    <div>
      <h1>{user?.role}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.sub}</h1>
      <h2>{isAuthenticated}</h2>
    </div>
  );
}
