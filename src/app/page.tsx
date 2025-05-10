'use client';
import { WelcomeDialog } from '@/components';
import { useAuth } from '@/hooks';
import { useEffect, useState } from 'react';

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [showDialog, setShowDialog] = useState(false);

  console.log(user?.firstLogin);
  console.log(user?.role);

  useEffect(() => {
    if (user?.firstLogin) {
      setShowDialog(true);
    }
  }, [user]);
  return (
    <div>
      <h1>{user?.role}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.sub}</h1>
      <h2>{isAuthenticated}</h2>
      <WelcomeDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </div>
  );
}
