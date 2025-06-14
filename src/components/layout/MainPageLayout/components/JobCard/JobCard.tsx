import Image from 'next/image';
import { Bookmark, BuildingIcon, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/shadcnComponents/badge';
import { useTranslation } from 'react-i18next';
import { JobPostLabels, useJobPostLabels } from './useJobPostLabels';
import Link from 'next/link';
import { ROUTES } from '@/routes';
import { JobOffer, useJobStore } from '@/hooks';

export interface JobPostFormData {
  id: string;
  companyId: string;
  jobTitle: string;
  companyName: string;
  companyDescription: string;
  companyLogoUrl?: string;
  level: 'intern' | 'junior' | 'mid' | 'senior' | 'lead' | 'manager';
  specialization: string;
  contractType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'b2b';
  workMode: 'remote' | 'hybrid' | 'office';
  vacancies: string;
  technologies: string[];
  technologiesLevels: Record<string, number>;
  isSalaryRange: boolean;
  salary?: number;
  minSalary?: number;
  maxSalary?: number;
  currency: 'pln' | 'eur' | 'usd';
  isSalaryShown: boolean;
  salaryPeriod: 'perHour' | 'perDay' | 'perMonth' | 'perOrder';
  languages: string[];
  languageLevels: Record<string, 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'>;
  positionDescription: string;
  address: string;
  addressLat: number;
  addressLon: number;
  endDate: string;
  createdAt: string;
  isNew: boolean;
}

type JobCardProps = {
  jobOffer: JobPostFormData;
};

export const JobCard = ({ jobOffer }: JobCardProps) => {
  const { t } = useTranslation();
  const setSelectedJob = useJobStore((state) => state.setSelectedJob);

  const {
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
  } = useJobPostLabels(jobOffer);

  const jobOfferLabels: JobPostLabels = {
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

  const handleClick = () => {
    const fullJobOffer: JobOffer = {
      job: jobOffer,
      jobOfferLabels,
    };
    setSelectedJob(fullJobOffer);
  };

  return (
    <Link href={ROUTES.GENERAL.JOB_OFFER} onClick={handleClick}>
      <div className='relative rounded-md bg-neutral-100 dark:bg-neutral-900 cursor-pointer hover:scale-101 transition-transform duration-200 shadow-sm hover:shadow-md'>
        <div
          className='grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center p-3
        bg-neutral-200 dark:bg-neutral-800 rounded-md w-full'
        >
          <div className='flex gap-4 items-center overflow-hidden'>
            <div className='p-2 bg-white rounded-md shrink-0'>
              <Image
                src={jobOffer.companyLogoUrl as string}
                alt={`${jobOffer.companyName} logo`}
                width={42}
                height={42}
                className='object-contain'
              />
            </div>
            <div className='flex flex-col justify-start gap-2 overflow-hidden'>
              <div className='flex items-center gap-2 truncate'>
                <span className='text-md font-bold leading-tight truncate'>
                  {jobOffer.jobTitle}
                </span>
                {jobOffer.isNew && (
                  <Badge className='text-xs px-2 py-0.5 '>{t('new')}</Badge>
                )}
              </div>
              <div className='flex items-center gap-4 text-sm text-muted-foreground flex-wrap'>
                <div className='flex items-center gap-2'>
                  <BuildingIcon size={18} />
                  <span className='text-xs'>{jobOffer.companyName}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Navigation size={18} />
                  <span className='text-xs'>{jobOffer.address}</span>
                </div>
                {workModeLabel && (
                  <Badge className='text-xs px-2 py-0.5 bg-neutral-900 text-white'>
                    {workModeLabel}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-2 mr-6'>
            {technologyLabels.map((technology) => (
              <Badge
                key={technology}
                className='text-xs px-2 py-0.5 text-white bg-gradient-to-r from-purple-600 to-blue-400 border-none'
              >
                {technology}
              </Badge>
            ))}
          </div>

          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='font-semibold text-black dark:text-white whitespace-nowrap'>
              {jobOffer.minSalary} - {jobOffer.maxSalary} {currencyLabel}
            </span>
            <span className='text-xs text-muted-foreground'>
              brutto / {salaryPeriodLabel.toLocaleLowerCase()}
            </span>
            <span className='text-xs text-muted-foreground'>
              {contractTypeLabel}
            </span>
          </div>
          <Bookmark className='mt-1' size={20} />
        </div>
      </div>
    </Link>
  );
};
