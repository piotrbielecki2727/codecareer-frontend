'use client';

import { useFormContext } from 'react-hook-form';
import { CollapsibleSection } from '@/components/ui';
import { useMemo } from 'react';
import { JobFormValues } from '../../schema';

export const JobPreview = () => {
  const { getValues } = useFormContext<JobFormValues>();
  const values = getValues();

  const previewContent = useMemo(
    () => (
      <div className='space-y-2'>
        <p>
          <strong>Nazwa ogłoszenia:</strong> {values.jobTitle}
        </p>
        <p>
          <strong>Nazwa firmy:</strong> {values.companyName}
        </p>
        <p>
          <strong>Opis firmy:</strong> {values.companyDescription}
        </p>
        <p>
          <strong>Liczba wakatów:</strong> {values.vacancies}
        </p>
        <p>
          <strong>Poziom stanowiska:</strong> {values.level}
        </p>
        <p>
          <strong>Specjalizacja:</strong> {values.specialization}
        </p>
        <p>
          <strong>Rodzaj umowy:</strong> {values.contractType}
        </p>
        <p>
          <strong>Tryb pracy:</strong> {values.workMode}
        </p>
        <p>
          <strong>Technologie:</strong> {values.technologies.join(', ')}
        </p>
        <p>
          <strong>Języki:</strong>{' '}
          {values.languages
            .map((lang) => {
              const level = values.languageLevels?.[lang];
              return `${lang}${level ? ` (${level})` : ''}`;
            })
            .join(', ')}
        </p>
        <p>
          <strong>Wynagrodzenie:</strong>{' '}
          {values.isSalaryShown
            ? values.isSalaryRange
              ? `${values.minSalary} - ${values.maxSalary} ${values.currency} (${values.salaryPeriod})`
              : `${values.salary} ${values.currency} (${values.salaryPeriod})`
            : 'Nie pokazano'}
        </p>
        <p>
          <strong>Opis stanowiska:</strong> {values.positionDescription}
        </p>
        <p>
          <strong>Adres:</strong> {values.address || 'Brak'}
        </p>
        <p>
          <strong>Współrzędne:</strong>{' '}
          {values.addressLat && values.addressLon
            ? `${values.addressLat}, ${values.addressLon}`
            : 'Brak'}
        </p>
      </div>
    ),
    [values]
  );

  return (
    <CollapsibleSection
      label='Podgląd ogłoszenia'
      content={previewContent}
      defaultOpen={false}
    />
  );
};
