import { useTranslation } from 'react-i18next';
import { JobPostFormData } from './JobCard';
import { IOption } from '@/types/interfaces';
import {
  currencies,
  getEmploymentTypes,
  getForeignLanguagesOptions,
  getLanguageProfficiencyLevels,
  getSalaryPeriods,
  getWorkModes,
  specializations,
} from '@/lib';
import { levels } from '@/lib/data/levels';
import { technologies } from '@/lib/data/technologies';

export const useJobPostLabels = (job: JobPostFormData) => {
  const { t } = useTranslation();

  const findLabel = (value: string, options: IOption[]): string =>
    options.find((opt) => opt.value === value)?.label ?? value;

  const mapTechLevelToLabel = (value: number): string => {
    const techLevelLabels = [
      t('postJob.technologiesLevels.niceToHave'),
      t('postJob.technologiesLevels.junior'),
      t('postJob.technologiesLevels.regular'),
      t('postJob.technologiesLevels.advanced'),
      t('postJob.technologiesLevels.senior'),
    ];
    return techLevelLabels[value - 1] ?? String(value);
  };

  const specializationLabel = findLabel(job.specialization, specializations);
  const contractTypeLabel = findLabel(job.contractType, getEmploymentTypes(t));
  const workModeLabel = findLabel(job.workMode, getWorkModes(t));
  const levelLabel = findLabel(job.level, levels);
  const salaryPeriodLabel = findLabel(job.salaryPeriod, getSalaryPeriods(t));
  const currencyLabel = findLabel(job.currency, currencies);

  const languageLabels = job.languages.map((lang) =>
    findLabel(lang, getForeignLanguagesOptions(t))
  );

  const languageLevelLabels = Object.entries(job.languageLevels).map(
    ([lang, level]) => ({
      language: findLabel(lang, getForeignLanguagesOptions(t)),
      level: findLabel(level, getLanguageProfficiencyLevels(t)),
    })
  );

  const technologyLabels = job.technologies.map((tech) =>
    findLabel(tech, technologies())
  );

  const technologiesLevelsLabels = Object.entries(job.technologiesLevels).map(
    ([tech, level]) => ({
      technology: findLabel(tech, technologies()),
      level: mapTechLevelToLabel(level),
    })
  );

  return {
    specializationLabel,
    contractTypeLabel,
    workModeLabel,
    levelLabel,
    salaryPeriodLabel,
    currencyLabel,
    languageLabels,
    languageLevelLabels,
    technologyLabels,
    technologiesLevelsLabels,
  };
};
