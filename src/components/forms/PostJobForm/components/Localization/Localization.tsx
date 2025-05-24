'use client';

import { InputControl } from '@/components';
import { useTranslation } from 'react-i18next';
import { Control, useFormContext } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { PostJobFormFields } from '../../types';
import { useEffect, useState } from 'react';
import { GeoMap } from '@/components/GeoMap';

type Props = {
  control: Control<JobFormValues>;
};

const DEFAULT_COORDS = { lat: 52.2319581, lon: 21.0057316 };

export const Localization = ({ control }: Props) => {
  const { t } = useTranslation();
  const { setValue, watch } = useFormContext<JobFormValues>();

  const address = watch(PostJobFormFields.address);

  const [coords, setCoords] = useState<{ lat: number; lon: number }>(
    DEFAULT_COORDS
  );

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if ((address?.length ?? 0) > 5) {
        fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
            address || ''
          )}&lang=pl&limit=1&apiKey=6503889e85f243749b939746a94f2f74`
        )
          .then((res) => res.json())
          .then((data) => {
            const feature = data?.features?.[0];
            if (feature) {
              const [lon, lat] = feature.geometry.coordinates;
              setCoords({ lat, lon });
              setValue(PostJobFormFields.addressLat, lat);
              setValue(PostJobFormFields.addressLon, lon);
            }
          })
          .catch((error) => {
            console.error('Geocoding error:', error);
          });
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [address, setValue]);

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.localizationOfOffice')}
      </h2>
      <InputControl
        name={PostJobFormFields.address}
        control={control}
        label={t('postJob.address')}
        placeholder={t('postJob.exampleAddress')}
      />
      <GeoMap
        lat={coords.lat}
        lon={coords.lon}
        key={`${coords.lat}-${coords.lon}`}
      />
    </section>
  );
};
