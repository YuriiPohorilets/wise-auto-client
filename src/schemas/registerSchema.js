import * as Yup from 'yup';
import { emailPattern, passwordPattern } from 'helpers/patterns';

export const registerSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(emailPattern, 'Enter a valid email')
    .required('Email is required'),

  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .matches(passwordPattern, 'Enter a valid password')
    .required('Password is required'),

  confirmPassword: Yup.string('Confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});
