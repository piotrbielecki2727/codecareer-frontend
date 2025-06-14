'use client';

import React, { useMemo, useState } from 'react';
import {
  Badge,
  EmploymentTypeFilter,
  JobCard,
  LevelsFilter,
  SalaryFilter,
  SearchBar,
  SpecializationFilter,
  TechnologiesFilter,
  WorkModeFilter,
} from './components';
import { getSortingTypes } from '@/lib';
import { useTranslation } from 'react-i18next';
import { jobCardsConfig } from './jobCardsConfig';
import { getTranslatedLabel } from './components/JobCard/getTranslatedLabel';

export const MainPageLayout = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedWorkModes, setSelectedWorkModes] = useState<string[]>([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<
    string[]
  >([]);
  const [onlyWithRange, setOnlyWithRange] = useState(false);
  const [minSalary, setMinSalary] = useState('');
  const [selectedSort, setSelectedSort] = useState<string>('default');
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);

  const [loading, setLoading] = useState(false);

  const sortingOptions = useMemo(() => getSortingTypes(t), [t]);

  const toggle = (
    state: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearAll = () => {
    setSelectedTechnologies([]);
    setSelectedLevels([]);
    setSelectedWorkModes([]);
    setSelectedEmploymentTypes([]);
    setOnlyWithRange(false);
    setMinSalary('');
    setSearchTerm('');
  };

  const getActiveFilters = () => {
    const filters: { label: string; onRemove: () => void }[] = [];

    selectedTechnologies.forEach((value) =>
      filters.push({
        label: getTranslatedLabel(value, t),
        onRemove: () =>
          setSelectedTechnologies((prev) => prev.filter((v) => v !== value)),
      })
    );

    selectedLevels.forEach((value) =>
      filters.push({
        label: getTranslatedLabel(value, t),
        onRemove: () =>
          setSelectedLevels((prev) => prev.filter((v) => v !== value)),
      })
    );

    selectedWorkModes.forEach((value) =>
      filters.push({
        label: getTranslatedLabel(value, t),
        onRemove: () =>
          setSelectedWorkModes((prev) => prev.filter((v) => v !== value)),
      })
    );

    selectedEmploymentTypes.forEach((value) =>
      filters.push({
        label: getTranslatedLabel(value, t),
        onRemove: () =>
          setSelectedEmploymentTypes((prev) => prev.filter((v) => v !== value)),
      })
    );

    if (minSalary) {
      filters.push({
        label: `min. ${minSalary} zł`,
        onRemove: () => {
          setMinSalary('');
          setOnlyWithRange(false);
        },
      });
    }

    return filters;
  };

  const filteredAndSortedJobs = useMemo(() => {
    let jobs = [...jobCardsConfig];

    if (searchTerm.trim() !== '') {
      jobs = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpecialization) {
      jobs = jobs.filter(
        (job) => job.specialization === selectedSpecialization
      );
    }

    if (selectedTechnologies.length > 0) {
      jobs = jobs.filter((job) =>
        selectedTechnologies.every((tech) => job.technologies.includes(tech))
      );
    }

    if (selectedLevels.length > 0) {
      jobs = jobs.filter((job) => selectedLevels.includes(job.level));
    }

    if (selectedWorkModes.length > 0) {
      jobs = jobs.filter((job) => selectedWorkModes.includes(job.workMode));
    }

    if (selectedEmploymentTypes.length > 0) {
      jobs = jobs.filter((job) =>
        selectedEmploymentTypes.includes(job.contractType)
      );
    }

    if (onlyWithRange) {
      jobs = jobs.filter((job) => job.minSalary && job.maxSalary);
    }

    if (minSalary) {
      const min = parseInt(minSalary);
      if (!isNaN(min)) {
        jobs = jobs.filter((job) => (job.minSalary ?? 0) >= min);
      }
    }

    switch (selectedSort) {
      case 'latest':
        jobs.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'highestSalary':
        jobs.sort((a, b) => (b.maxSalary ?? 0) - (a.maxSalary ?? 0));
        break;
      case 'lowestSalary':
        jobs.sort((a, b) => (a.minSalary ?? 0) - (b.minSalary ?? 0));
        break;
      default:
        break;
    }

    return jobs;
  }, [
    searchTerm,
    selectedTechnologies,
    selectedLevels,
    selectedWorkModes,
    selectedEmploymentTypes,
    onlyWithRange,
    minSalary,
    selectedSort,
    selectedSpecialization,
  ]);

  return (
    <div className='flex flex-col p-2 max-w-[1250px] mx-auto'>
      <div className='p-2 flex items-center justify-center mt-4'>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className='p-2 flex items-center justify-center align-middle'>
        <SpecializationFilter
          selected={selectedSpecialization}
          onChange={setSelectedSpecialization}
        />
      </div>

      <div className='flex flex-col'>
        <div className='mt-6 rounded-md bg-neutral-100 p-2 dark:bg-neutral-900 grid grid-cols-5 gap-2'>
          <div className='col-span-1 px-2'>
            <div className='flex justify-between items-center border-b py-2'>
              <span className='text-md font-semibold'>{t('filters')}</span>
              <span
                onClick={clearAll}
                className='text-xs text-muted-foreground cursor-pointer hover:underline'
              >
                {t('clearAll')}
              </span>
            </div>
            <div className='flex flex-col gap-4 py-2 mt-2'>
              <TechnologiesFilter
                selected={selectedTechnologies}
                onToggle={(v) =>
                  toggle(selectedTechnologies, setSelectedTechnologies, v)
                }
              />
              <LevelsFilter
                selected={selectedLevels}
                onToggle={(v) => toggle(selectedLevels, setSelectedLevels, v)}
              />
              <WorkModeFilter
                selected={selectedWorkModes}
                onToggle={(v) =>
                  toggle(selectedWorkModes, setSelectedWorkModes, v)
                }
              />
              <EmploymentTypeFilter
                selected={selectedEmploymentTypes}
                onToggle={(v) =>
                  toggle(selectedEmploymentTypes, setSelectedEmploymentTypes, v)
                }
              />
              <SalaryFilter
                onlyWithRange={onlyWithRange}
                minSalary={minSalary}
                onOnlyWithRangeToggle={() => setOnlyWithRange((prev) => !prev)}
                onMinSalaryChange={(value) => {
                  setMinSalary(value);
                  if (value.trim() !== '') setOnlyWithRange(true);
                }}
              />
            </div>
          </div>

          <div className='col-span-4 flex flex-col gap-2 border-l px-4'>
            <div className='flex gap-2 border-b py-2'>
              {sortingOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => setSelectedSort(option.value)}
                  className={`px-3 h-7 flex items-center rounded-full text-sm border transition-colors cursor-pointer ${
                    selectedSort === option.value
                      ? 'bg-gradient-to-r from-purple-600 to-blue-400 text-white border-none'
                      : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>

            <div className='flex justify-between'>
              <span className='text-sm text-muted-foreground min-w-[100px]'>
                {t('jobOffers')}
              </span>
              <div className='flex flex-wrap justify-center gap-2 mr-6'>
                {getActiveFilters().map(({ label, onRemove }) => (
                  <Badge
                    key={label}
                    label={label}
                    removable
                    onClick={onRemove}
                    className='text-xs px-2 py-0.5 text-white bg-gradient-to-r from-purple-600 to-blue-400 border-none'
                  />
                ))}
              </div>
            </div>
            {getActiveFilters().length > 0 ? (
              <span>{`${t('results')}: ${filteredAndSortedJobs.length} ${t(
                'offers'
              ).toLowerCase()}`}</span>
            ) : (
              <></>
            )}

            {loading ? (
              <div className='py-10 flex justify-center animate-pulse'>
                <span className='text-muted-foreground'>{t('loading')}...</span>
              </div>
            ) : (
              filteredAndSortedJobs.map((jobOffer, idx) => (
                <div
                  key={idx}
                  className='rounded-md bg-neutral-100 mb-2 dark:bg-neutral-900'
                >
                  <JobCard jobOffer={jobOffer} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
