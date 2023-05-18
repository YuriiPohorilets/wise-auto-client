import * as Yup from 'yup';
import { passwordPattern } from 'helpers/patterns';

export const registerSchema = Yup.object().shape({
  // username: Yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordPattern, {
      message: 'Please create a stronger password',
    })
    .required('Required'),
});
