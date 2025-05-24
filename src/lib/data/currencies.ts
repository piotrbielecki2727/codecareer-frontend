export interface Currency {
  label: string;
  value: string;
}

export const currencies: Currency[] = [
  { label: 'PLN', value: 'pln' },
  { label: 'EUR', value: 'eur' },
  { label: 'USD', value: 'usd' },
];
