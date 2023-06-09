import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  TextField,
  Box,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login } from 'redux/auth/operations';
import { loginSchema } from 'schemas/loginSchema';
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
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, resetForm, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: loginSchema,

    onSubmit: ({ email, password }) => {
      try {
        dispatch(login({ email, password }));

        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const isValidForm = !values.email || !values.password || !!errors.email || !!errors.password;

  const handleShowPassword = () => setShowPassword(show => !show);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={formWrapper}>
      {/* {isLoading && (
        <Box sx={{ width: '100%', mb: '24px' }}>
          <LinearProgress />
        </Box>
      )} */}

      {/* {isError && (
        <Box sx={{ width: '100%', mb: '24px' }}>
          <Typography sx={{ textAlign: 'center', color: 'secondary.error' }}>
            {error.message}
          </Typography>
        </Box>
      )} */}

      <Box sx={inputWrapper}>
        <TextField
          id="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={inputText}
        />

        <TextField
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && !!errors.password}
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

        <Button type="submit" disabled={isValidForm} sx={containedBtn}>
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
