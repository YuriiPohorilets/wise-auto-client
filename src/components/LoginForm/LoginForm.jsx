import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Box, Typography, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginSchema } from 'schemas/loginSchema';
import { useLoginMutation } from 'services/wiseAutoApi';
import { containedBtn } from 'shared/commonStyles';
import {
  formWrapper,
  inputWrapper,
  inputText,
  footerContent,
  footerLink,
} from 'shared/commonStyles';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const [loginUser, { error, isError, isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, handleChange, resetForm, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      try {
        await loginUser({ email, password }).unwrap();
      } catch (error) {
        console.log(error.message);
      }
      resetForm();
    },
  });

  const handleShowPassword = () => setShowPassword(show => !show);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={formWrapper}>
      <Box sx={inputWrapper}>
        <TextField
          id="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={inputText}
        />

        <TextField
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          sx={inputText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" sx={containedBtn}>
          Login
        </Button>
      </Box>

      <Typography sx={footerContent}>
        Not a member?{' '}
        <Typography component={NavLink} to={'/register'} sx={footerLink}>
          Sign up
        </Typography>{' '}
        now
      </Typography>
    </Box>
  );
};
