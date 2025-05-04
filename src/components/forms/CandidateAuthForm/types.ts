export const AuthFormFields = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirmPassword',
} as const;

export type AuthFormField =
  (typeof AuthFormFields)[keyof typeof AuthFormFields];
