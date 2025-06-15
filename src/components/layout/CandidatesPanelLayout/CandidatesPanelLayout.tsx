'use client';

import React, { useMemo, useState } from 'react';
import {
  Badge,
  CandidateCard,
  EmploymentTypeFilter,
  LevelsFilter,
  SalaryFilter,
  SearchBar,
  SpecializationFilter,
  TechnologiesFilter,
  WorkModeFilter,
} from './components';
import { getSortingTypes } from '@/lib';
import { useTranslation } from 'react-i18next';
import { candidatesConfig } from './candidatesConfig';
import { getTranslatedLabel } from './components/CandidateCard/getTranslatedLabel';

export const CandidatesPanelLayout = () => {
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
  const [loading] = useState(false);

  const sortingOptions = useMemo(() => getSortingTypes(t), [t]);

  const adjustedSortingOptions = useMemo(
    () => [
      ...sortingOptions.filter((option) => option.value !== 'latest'),
      { label: t('mainPage.alphabetical'), value: 'alphabetical' },
    ],
    [sortingOptions, t]
  );

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

  const filteredAndSortedCandidates = useMemo(() => {
    let candidates = [...candidatesConfig];

    if (searchTerm.trim() !== '') {
      candidates = candidates.filter((c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpecialization) {
      candidates = candidates.filter((c) =>
        c.specialization.includes(selectedSpecialization)
      );
    }

    if (selectedTechnologies.length > 0) {
      candidates = candidates.filter((c) =>
        selectedTechnologies.every((tech) => c.technologies.includes(tech))
      );
    }

    if (selectedLevels.length > 0) {
      candidates = candidates.filter((c) =>
        c.level.some((lvl) => selectedLevels.includes(lvl))
      );
    }

    if (selectedWorkModes.length > 0) {
      candidates = candidates.filter((c) =>
        c.workMode.some((wm) => selectedWorkModes.includes(wm))
      );
    }

    if (selectedEmploymentTypes.length > 0) {
      candidates = candidates.filter((c) =>
        c.contractType.some((ct) => selectedEmploymentTypes.includes(ct))
      );
    }

    if (onlyWithRange) {
      candidates = candidates.filter((c) => c.minSalary && c.minSalary > 0);
    }

    if (minSalary) {
      const min = parseInt(minSalary);
      if (!isNaN(min)) {
        candidates = candidates.filter((c) => (c.minSalary ?? 0) >= min);
      }
    }

    switch (selectedSort) {
      case 'highestSalary':
        candidates.sort((a, b) => (b.minSalary ?? 0) - (a.minSalary ?? 0));
        break;
      case 'lowestSalary':
        candidates.sort((a, b) => (a.minSalary ?? 0) - (b.minSalary ?? 0));
        break;
      case 'alphabetical':
        candidates.sort((a, b) => a.fullName.localeCompare(b.fullName));
        break;
      default:
        break;
    }

    return candidates;
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
      <div className='mt-6'>
        <h1 className='text-2xl font-bold mb-4'>
          {t('candidatesPanelTitle')}
        </h1>
        <p className='text-sm text-muted-foreground'>
          {t('candidatesPanelDescription')}
        </p>
      </div>

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
                minSalary={minSalary}
                onMinSalaryChange={(value) => {
                  setMinSalary(value);
                  if (value.trim() !== '') setOnlyWithRange(true);
                }}
              />
            </div>
          </div>

          <div className='col-span-4 flex flex-col gap-2 border-l px-4'>
            <div className='flex gap-2 border-b py-2'>
              {adjustedSortingOptions.map((option) => (
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
                {t('candidates')}
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
              <span>{`${t('results')}: ${
                filteredAndSortedCandidates.length
              } ${t('candidates').toLowerCase()}`}</span>
            ) : null}

            {loading ? (
              <div className='py-10 flex justify-center animate-pulse'>
                <span className='text-muted-foreground'>{t('loading')}...</span>
              </div>
            ) : (
              filteredAndSortedCandidates.map((candidate, idx) => (
                <div
                  key={idx}
                  className='rounded-md bg-neutral-100 mb-2 dark:bg-neutral-900'
                >
                  <CandidateCard candidate={candidate} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
