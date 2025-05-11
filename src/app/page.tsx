'use client';
import { Combobox } from '@/components';
import { useAuth } from '@/hooks';
import { technologies } from '@/lib/data/technologies';
import { useState } from 'react';

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [multi, setMulti] = useState<string[]>([]);

  const handleMultiChange = (values: (string | number)[]) => {
    setMulti(values.map((value) => String(value)));
  };

  console.log(user?.firstLogin);
  console.log(user?.role);

  return (
    <div>
      <h1>{user?.role}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.sub}</h1>
      <h2>{isAuthenticated}</h2>
      <Combobox
        className='w-[700px]'
        popoverClassName='w-[700px]'
        multiSelect
        selected={multi}
        onChange={handleMultiChange}
        options={technologies({ width: 12, height: 12 })}
      />
    </div>
  );
}
