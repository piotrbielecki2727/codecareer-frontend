import { useTranslation } from 'react-i18next';
import { IOption } from '@/types/interfaces';
import {
  getEmploymentTypes,
  getForeignLanguagesOptions,
  getLanguageProfficiencyLevels,
  getSalaryPeriods,
  getWorkModes,
  specializations,
} from '@/lib';
import { levels } from '@/lib/data/levels';
import { technologies } from '@/lib/data/technologies';
import { CandidateData } from './CandidateCard';

export interface CandidateLabels {
  specializationLabel: string[];
  contractTypeLabel: string[];
  workModeLabel: string[];
  levelLabel: string[];
  salaryPeriodLabel: string;
  languageLabels: string[];
  languageLevelLabels: { language: string; level: string }[];
  technologyLabels: string[];
  technologiesLevelsLabels: { technology: string; level: string }[];
}

export const useCandidateLabels = (
  candidate: CandidateData
): CandidateLabels => {
  const { t } = useTranslation();

  const findLabel = (value: string, options: IOption[]): string =>
    options.find((opt) => opt.value === value)?.label ?? value;

  const mapArrayLabels = (values: string[], options: IOption[]): string[] =>
    values.map((val) => findLabel(val, options));

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

  const specializationLabel = mapArrayLabels(
    candidate.specialization,
    specializations
  );
  const contractTypeLabel = mapArrayLabels(
    candidate.contractType,
    getEmploymentTypes(t)
  );
  const workModeLabel = mapArrayLabels(candidate.workMode, getWorkModes(t));
  const levelLabel = mapArrayLabels(candidate.level, levels);

  const salaryPeriodLabel = findLabel(
    candidate.salaryPeriod,
    getSalaryPeriods(t)
  );

  const languageLabels = mapArrayLabels(
    candidate.languages,
    getForeignLanguagesOptions(t)
  );

  const languageLevelLabels = Object.entries(candidate.languageLevels).map(
    ([lang, level]) => ({
      language: findLabel(lang, getForeignLanguagesOptions(t)),
      level: findLabel(level, getLanguageProfficiencyLevels(t)),
    })
  );

  const technologyLabels = mapArrayLabels(
    candidate.technologies,
    technologies()
  );

  const technologiesLevelsLabels = Object.entries(
    candidate.technologiesLevels
  ).map(([tech, level]) => ({
    technology: findLabel(tech, technologies()),
    level: mapTechLevelToLabel(level),
  }));

  return {
    specializationLabel,
    contractTypeLabel,
    workModeLabel,
    levelLabel,
    salaryPeriodLabel,
    languageLabels,
    languageLevelLabels,
    technologyLabels,
    technologiesLevelsLabels,
  };
};
