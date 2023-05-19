import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),

  password: Yup.string('Enter your password').required('Password is required'),
});
