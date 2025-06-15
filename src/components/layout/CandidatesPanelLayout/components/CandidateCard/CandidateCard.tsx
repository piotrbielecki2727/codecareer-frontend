import Image from 'next/image';
import { Bookmark, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/shadcnComponents/badge';
import { useTranslation } from 'react-i18next';
import { CandidateLabels, useCandidateLabels } from './useCandidateLabels';
import Link from 'next/link';
import { ROUTES } from '@/routes';
import { Candidate, useCandidateStore } from '@/hooks';

export interface CandidateData {
  id: string;
  fullName: string;
  title: string;
  photoUrl: string;
  level: string[];
  specialization: string[];
  contractType: string[];
  workMode: string[];
  technologies: string[];
  technologiesLevels: Record<string, number>;
  minSalary?: number;
  isSalaryShown: boolean;
  salaryPeriod: 'perHour' | 'perDay' | 'perMonth' | 'perOrder';
  languages: string[];
  languageLevels: Record<string, 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'>;
  candidateDescription: string;
  city: string;
  country: string;
}

type CandidateCardProps = {
  candidate: CandidateData;
};

export const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const { t } = useTranslation();
  const setSelectedCandidate = useCandidateStore(
    (state) => state.setSelectedCandidate
  );

  const {
    specializationLabel,
    contractTypeLabel,
    workModeLabel,
    levelLabel,
    salaryPeriodLabel,
    languageLabels,
    languageLevelLabels,
    technologyLabels,
    technologiesLevelsLabels,
  } = useCandidateLabels(candidate);

  const candidateLabels: CandidateLabels = {
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

  const handleClick = () => {
    const fullCandidate: Candidate = {
      candidate: candidate,
      candidateLabels,
    };
    setSelectedCandidate(fullCandidate);
  };

  return (
    <Link href={ROUTES.EMPLOYER.CANDIDATE_PROFILE} onClick={handleClick}>
      <div className='relative rounded-md bg-neutral-100 dark:bg-neutral-900 cursor-pointer hover:scale-101 transition-transform duration-200 shadow-sm hover:shadow-md'>
        <div
          className='grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center p-3
        bg-neutral-200 dark:bg-neutral-800 rounded-md w-full'
        >
          <div className='flex gap-4 items-center overflow-hidden '>
            <div className=' shrink-0 w-[88px] h-[88px] flex items-center justify-center rounded-full '>
              <Image
                src={candidate.photoUrl as string}
                alt={`${candidate.photoUrl} logo`}
                width={88}
                height={88}
                className='object-cover w-[88px] h-[88px] rounded-full'
              />
            </div>
            <div className='flex flex-col justify-start gap-2 overflow-hidden'>
              <div className='flex items-center gap-2 truncate'>
                <span className='text-md font-bold leading-tight truncate'>
                  {candidate.fullName}
                </span>
              </div>
              <div className='flex items-center gap-2 truncate'>
                <span className='text-sm font-medium leading-tight truncate'>
                  {candidate.title}
                </span>
              </div>
              <div className='flex items-center gap-4 text-sm text-muted-foreground flex-wrap'>
                <div className='flex items-center gap-2'>
                  <Navigation size={18} />
                  <span className='text-xs'>
                    {candidate.city}, {candidate.country}
                  </span>
                </div>
                {Array.isArray(workModeLabel) &&
                  workModeLabel.map((mode) => (
                    <Badge
                      key={mode}
                      className='text-xs px-2 py-0.5 bg-neutral-300 dark:bg-neutral-900 text-accent-foreground '
                    >
                      {mode}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-wrap justify-center gap-2 mr-6'>
              {specializationLabel.map((specialization) => (
                <Badge
                  key={specialization}
                  className='text-sm px-2 py-0.5 text-accent-foreground bg-neutral-300 dark:bg-neutral-900 '
                >
                  {specialization}
                </Badge>
              ))}
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
          </div>
          <div className='flex flex-col justify-center items-end gap-1'>
            <span className='font-semibold text-black dark:text-white whitespace-nowrap'>
              {t('min')} {candidate.minSalary} PLN
            </span>
            <span className='text-xs text-muted-foreground'>
              {t('brutto')} / {salaryPeriodLabel.toLocaleLowerCase()}
            </span>
            {contractTypeLabel.map((type) => (
              <span key={type} className='text-xs text-muted-foreground'>
                {type}
              </span>
            ))}
          </div>
          <Bookmark className='mt-1' size={20} />
        </div>
      </div>
    </Link>
  );
};
