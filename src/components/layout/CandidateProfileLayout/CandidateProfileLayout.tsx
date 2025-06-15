import { useCandidateStore } from '@/hooks';
import { DotsLevel } from '@/components';
import { useTranslation } from 'react-i18next';
import {
  Code,
  Languages,
  MapPin,
  Wallet,
  Star,
  User,
  BriefcaseBusiness,
  Flag,
} from 'lucide-react';
import Image from 'next/image';
import { levels } from '@/lib/data/levels';
import { specializations } from '@/lib';
import { technologies } from '@/lib/data/technologies';

export const CandidateProfileLayout = () => {
  const candidate = useCandidateStore((state) => state.selectedCandidate);
  const { t } = useTranslation();

  if (!candidate) return null;

  const getLabel = (
    arr: string[],
    options: { label: string; value: string }[]
  ) => arr.map((val) => options.find((opt) => opt.value === val)?.label || val);

  return (
    <div className='bg-neutral-100 dark:bg-neutral-900 text-white min-h-screen px-4 md:px-6 py-10 max-w-[1250px] mx-auto space-y-10 mt-6 rounded-md'>
      {/* === HEADER === */}
      <section className='relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-6 rounded-xl shadow-xl overflow-hidden'>
        <div className='absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-700 via-blue-500 to-indigo-500 rounded-xl blur-2xl' />
        <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
          <div className='flex items-center gap-6'>
            {candidate.candidate.photoUrl && (
              <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg'>
                <Image
                  src={candidate.candidate.photoUrl}
                  alt={candidate.candidate.fullName}
                  width={96}
                  height={96}
                />
              </div>
            )}
            <div>
              <h1 className='text-3xl font-bold'>
                {candidate.candidate.fullName}
              </h1>
              <p className='text-white/90'>{candidate.candidate.title}</p>
            </div>
          </div>
          <div className='flex flex-col items-end text-right gap-2'>
            {candidate.candidate.isSalaryShown && (
              <div className='flex items-center gap-2 text-2xl font-bold'>
                <Wallet size={20} />
                {candidate.candidate.minSalary} PLN{' '}
                {candidate.candidateLabels.salaryPeriodLabel.toLocaleLowerCase()}
              </div>
            )}
          </div>
        </div>

        {/* === INFO CARDS === */}
        <div className='relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <InfoCard
            icon={<Star />}
            label='Doświadczenie'
            value={getLabel(candidate.candidate.level, levels).join(', ')}
          />
          <InfoCard
            icon={<BriefcaseBusiness />}
            label='Specjalizacja'
            value={getLabel(
              candidate.candidate.specialization,
              specializations
            ).join(', ')}
          />
          <InfoCard
            icon={<Code />}
            label='Forma zatrudnienia'
            value={candidate.candidateLabels.contractTypeLabel.join(', ')}
          />
          <InfoCard
            icon={<MapPin />}
            label='Tryb pracy'
            value={candidate.candidateLabels.workModeLabel.join(', ')}
          />
        </div>
      </section>

      {/* === TECHNOLOGIE === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-5 flex items-center gap-2 text-foreground'>
          <Code size={20} /> Technologie
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {Object.entries(candidate.candidate.technologiesLevels).map(
            ([tech, level]) => {
              const techLabel =
                technologies().find((t) => t.value === tech)?.label || tech;
              return (
                <DotsLevel
                  key={tech}
                  label={techLabel}
                  value={level}
                  className='bg-neutral-400/10 dark:bg-neutral-600/20 text-accent-foreground'
                  levelsLabels={[
                    t('postJob.technologiesLevels.niceToHave'),
                    t('postJob.technologiesLevels.junior'),
                    t('postJob.technologiesLevels.regular'),
                    t('postJob.technologiesLevels.advanced'),
                    t('postJob.technologiesLevels.senior'),
                  ]}
                />
              );
            }
          )}
        </div>
      </section>

      {/* === JĘZYKI OBCE === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-foreground'>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2'>
          <Languages size={20} /> {t('jobOffer.foreignLanguages')}
        </h2>
        <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
          {candidate.candidateLabels.languageLevelLabels.map(
            ({ language, level }, idx) => (
              <li key={idx}>
                <strong>{language}</strong>: {level}
              </li>
            )
          )}
        </ul>
      </section>

      {/* === LOKALIZACJA === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2 text-accent-foreground'>
          <Flag size={20} /> Lokalizacja
        </h2>
        <p className='text-sm text-muted-foreground'>
          {candidate.candidate.city}, {candidate.candidate.country}
        </p>
      </section>

      {/* === OPIS === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2 text-accent-foreground'>
          <User size={20} /> O kandydacie
        </h2>
        <p className='text-sm text-muted-foreground leading-relaxed whitespace-pre-line'>
          {candidate.candidate.candidateDescription}
        </p>
      </section>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className='flex items-center gap-3 bg-white/10 dark:bg-white/10 rounded-lg p-4 backdrop-blur-sm'>
    <div className='bg-white/20 text-white p-2 rounded-md'>{icon}</div>
    <div>
      <p className='text-xs text-white/70'>{label}</p>
      <p className='text-sm font-semibold text-white'>{value}</p>
    </div>
  </div>
);
