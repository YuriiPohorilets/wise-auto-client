import * as Yup from 'yup';
import { emailPattern, passwordPattern, namePattern, phonePattern } from 'helpers/patterns';

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

  name: Yup.string('')
    .min(2, 'Name should be of minimum 2 characters length')
    .max(24, 'Name should be of maximum 24 characters length')
    .matches(namePattern, 'Enter a valid name')
    .required('Name is required'),

  city: Yup.string('')
    .min(3, 'City should be of minimum 3 characters length')
    .max(64, 'City should be of maximum 64 characters length')
    .required('City is required'),

  phone: Yup.string('')
    .matches(phonePattern, 'Enter a valid phone (380998887766)')
    .required('Phone is required'),
});
