'use client';

import { ApplyForJobForm, Button, DotsLevel } from '@/components';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { JobOffer, User } from '@/hooks';
import {
  Building2,
  Wallet,
  Languages,
  BriefcaseBusiness,
  Building,
  NotepadText,
  Star,
  Gem,
  Pin,
  Code,
  Heart,
  NotebookPen,
  ArrowBigRightDash,
} from 'lucide-react';
import { Badge } from '@/components/ui/shadcnComponents/badge';
import { useEffect } from 'react';
import { Role } from '@/types';
import Link from 'next/link';
import { ROUTES } from '@/routes';

interface IJobOfferLayout {
  selectedJob: JobOffer;
  user: User;
}

export const JobOfferLayout = ({ selectedJob, user }: IJobOfferLayout) => {
  const { job, jobOfferLabels } = selectedJob;
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className='bg-neutral-100 dark:bg-neutral-900 text-white min-h-screen px-4 md:px-6 py-10 max-w-[1250px] mx-auto space-y-10 mt-6 rounded-md'>
      {/* === HEADER === */}
      <section className='relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-6 rounded-xl shadow-xl overflow-hidden'>
        {/* === TOP RIGHT CORNER === */}
        <div className='absolute top-4 right-4 flex items-center gap-2 z-20'>
          {!job.isNew && (
            <Badge className='bg-white/20  text-white px-4 py-2 rounded-full text-sm font-semibold'>
              New
            </Badge>
          )}
          <button
            type='button'
            className='bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all'
            title='Dodaj do ulubionych'
          >
            <Heart className='w-5 h-5' />
          </button>
        </div>

        <div className='absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-700 via-blue-500 to-indigo-500 rounded-xl blur-2xl' />

        <div className='relative z-10 grid md:grid-cols-2 items-center gap-8'>
          {/* LEFT */}
          <div className='flex flex-col items-start gap-5'>
            <div className='flex items-center gap-4'>
              <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden'>
                {job.companyLogoUrl && (
                  <Image
                    src={job.companyLogoUrl}
                    alt={`${job.companyName} logo`}
                    width={70}
                    height={70}
                    className='object-contain'
                  />
                )}
              </div>
              <div>
                <h1 className='text-3xl font-extrabold'>{job.jobTitle}</h1>
                <p className='text-md text-white/90 '>{job.companyName}</p>
              </div>
            </div>
            <div className='flex flex-wrap items-center gap-2 text-sm text-white/90'>
              <Building size={18} />
              <span>{job.address}</span>
            </div>
          </div>
          {/* RIGHT */}
          <div className='flex flex-col items-end justify-center text-right gap-2'>
            <div className='flex items-center gap-2 text-2xl font-bold'>
              <Wallet size={22} />
              <span>
                {job.minSalary} - {job.maxSalary} {jobOfferLabels.currencyLabel}{' '}
                (brutto)
              </span>
            </div>
            <p className='text-sm text-white/80'>
              {jobOfferLabels.salaryPeriodLabel}
            </p>
          </div>
        </div>

        {/* === INFO CARDS === */}
        <div className='relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='flex items-center gap-3 bg-pink-800/20 rounded-lg p-4'>
            <div className='bg-pink-500 text-white p-2 rounded-md'>
              <span className='text-xl'>
                <NotepadText />
              </span>
            </div>
            <div>
              <p className='text-xs text-white/60'>Typ zatrudnienia</p>
              <p className='text-sm font-semibold text-white'>
                {jobOfferLabels.contractTypeLabel}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 bg-purple-800/20 rounded-lg p-4'>
            <div className='bg-purple-600 text-white p-2 rounded-md'>
              <span className='text-xl'>
                <Star />
              </span>
            </div>
            <div>
              <p className='text-xs text-white/60'>Doświadczenie</p>
              <p className='text-sm font-semibold text-white'>
                {jobOfferLabels.levelLabel}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 bg-sky-700/20 rounded-lg p-4'>
            <div className='bg-sky-500 text-white p-2 rounded-md'>
              <span className='text-xl'>
                <Gem />
              </span>
            </div>
            <div>
              <p className='text-xs text-white/60'>Specjalizacja</p>
              <p className='text-sm font-semibold text-white'>
                {jobOfferLabels.specializationLabel}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3 bg-blue-800/20 rounded-lg p-4'>
            <div className='bg-blue-600 text-white p-2 rounded-md'>
              <span className='text-xl'>
                <Pin />
              </span>
            </div>
            <div>
              <p className='text-xs text-white/60'>Tryb pracy</p>
              <p className='text-sm font-semibold text-white'>
                {jobOfferLabels.workModeLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPANY DESCRIPTION === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md'>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2 text-foreground'>
          <Building2 size={20} /> O firmie
        </h2>
        <p className='text-sm text-muted-foreground leading-relaxed'>
          TechNova to dynamiczny software house specjalizujący się w tworzeniu
          aplikacji mobilnych i webowych dla klientów na całym świecie.
          Oferujemy elastyczne podejście, zwinne metodyki pracy oraz nowoczesny
          stack technologiczny. Wierzymy w ludzi, kulturę feedbacku i rozwój
          przez praktykę.
        </p>
      </section>

      {/* === TECH STACK === */}
      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-foreground'>
        <h2 className='text-lg font-semibold mb-5 flex items-center gap-2'>
          <Code size={20} /> Stack technologiczny
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {jobOfferLabels.technologiesLevelsLabels.map(
            ({ technology }, idx) => {
              const level = job.technologiesLevels[technology.toLowerCase()];
              return (
                <DotsLevel
                  className='bg-neutral-400/10 dark:bg-neutral-600/20'
                  key={idx}
                  label={technology}
                  value={level}
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

      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-foreground'>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2'>
          <Languages size={20} /> Języki obce
        </h2>
        <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
          {jobOfferLabels.languageLevelLabels.map(
            ({ language, level }, idx) => (
              <li key={idx}>
                <strong>{language}</strong>: {level}
              </li>
            )
          )}
        </ul>
      </section>

      <section className='bg-neutral-200 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-foreground '>
        <h2 className='text-lg font-semibold mb-3 flex items-center gap-2'>
          <BriefcaseBusiness size={20} /> Opis stanowiska
        </h2>
        <p className='text-sm text-muted-foreground leading-relaxed mb-3'>
          W roli <strong>{job.jobTitle}</strong> będziesz odpowiedzialny/a za
          rozwój i utrzymanie nowoczesnych systemów opartych o mikroserwisy i
          konteneryzację. Oczekujemy samodzielności, inicjatywy oraz dobrej
          komunikacji w zespole projektowym.
        </p>
        <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
          <li>Projektowanie architektury rozproszonych systemów</li>
          <li>Wdrażanie aplikacji w środowiskach chmurowych</li>
          <li>Ścisła współpraca z zespołem UX/UI i QA</li>
          <li>Tworzenie dokumentacji technicznej</li>
        </ul>
      </section>
      {user ? (
        user.role === Role.CANDIDATE && (
          <section className='relative z-10 mt-10 bg-neutral-200 dark:bg-neutral-800 rounded-xl shadow-lg px-6 py-6'>
            <div className='text-start mb-4 space-y-1'>
              <div className='text-lg font-bold text-neutral-900 dark:text-white flex justify-start items-center gap-2'>
                <NotebookPen size={20} />
                Aplikuj na to stanowisko
              </div>
              <p className='text-sm text-muted-foreground'>
                Wypełnij formularz, aby dołączyć do rekrutacji.
              </p>
            </div>
            <ApplyForJobForm />
          </section>
        )
      ) : (
        <section className='relative z-10 mt-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow-lg px-6 py-6 flex justify-between'>
          <div className='flex align-middle items-center text-center space-y-2'>
            <div className='text-lg font-bold text-white  flex items-center gap-2'>
              Aby aplikować na oferty pracy, musisz być zalogowany w CodeCareer!
            </div>
          </div>
          <Link
            className='rounded-full flex items-center justify-center transition-colors px-4 gap-2  bg-neutral-100 dark:bg-neutral-800 text-foreground shadow-2xl py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            href={ROUTES.GENERAL.AUTH_CANDIDATE_SIGN_IN}
          >
            {t('signIn')}
            <ArrowBigRightDash />
          </Link>
        </section>
      )}
    </div>
  );
};
