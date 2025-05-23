export const PostJobFormFields = {
  jobTitle: 'jobTitle',
  companyName: 'companyName',
  companyDescription: 'companyDescription',
  level: 'level',
  specialization: 'specialization',
  contractType: 'contractType',
  workMode: 'workMode',
  vacancies: 'vacancies',
  technologies: 'technologies',
  isSalaryRange: 'isSalaryRange',
  minSalary: 'minSalary',
  maxSalary: 'maxSalary',
  salary: 'salary',
  currency: 'currency',
  isSalaryShown: 'isSalaryShown',
  salaryPeriod: 'salaryPeriod',
  languageLevels: 'languageLevels',
  languages: 'languages',
  positionDescription: 'positionDescription',
  locationMode: 'locationMode',
  city: 'city',
  address: 'address',
  addressLat: 'addressLat',
  addressLon: 'addressLon',
} as const;

export type PostJobFormField =
  (typeof PostJobFormFields)[keyof typeof PostJobFormFields];
