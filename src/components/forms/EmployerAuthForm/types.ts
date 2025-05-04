export const EmployerFormFields = {
  Name: 'name',
  LastName: 'lastName',
  CompanyName: 'companyName',
  Email: 'email',
  Phone: 'phone',
  Password: 'password',
  ConfirmPassword: 'confirmPassword',
} as const;

export type EmployerFormField =
  (typeof EmployerFormFields)[keyof typeof EmployerFormFields];
