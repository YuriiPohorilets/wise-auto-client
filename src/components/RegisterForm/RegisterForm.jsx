import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import { registerSchema } from 'schemas/registerSchema';
import { useRegisterMutation } from 'services/wiseAutoApi';
import { containedBtn, outlinedBtn } from 'shared/commonStyles';
import {
  formWrapper,
  formTitle,
  inputWrapper,
  inputText,
  footerLink,
  btnFormWrapper,
} from 'shared/commonStyles';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

export const RegisterForm = () => {
  const [registerUser, { error, isError, isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const maxSteps = 2;

  const { handleSubmit, handleChange, resetForm, handleBlur, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: registerSchema,

    onSubmit: async ({ email, password, name, city, phone }) => {
      try {
        await registerUser({ email, password, name, city, phone }).unwrap();
      } catch (error) {
        console.log(error.message);
      }
      resetForm();
    },
  });

  const handleShowPassword = () => setShowPassword(show => !show);

  const handleNextStep = () => {
    if (step < maxSteps) setStep(prevStep => prevStep + 1);
    return;
  };

  const handlePrevStep = () => {
    if (step >= maxSteps) setStep(prevStep => prevStep - 1);
    return;
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={formWrapper}>
      <Typography sx={formTitle}>
        Step {step}/{maxSteps}
      </Typography>

      {isLoading && (
        <Box sx={{ width: '100%', mb: '24px' }}>
          <LinearProgress />
        </Box>
      )}

      {isError && (
        <Box sx={{ width: '100%', mb: '24px' }}>
          <Typography sx={{ textAlign: 'center', color: 'secondary.error' }}>
            {error.message}
          </Typography>
        </Box>
      )}

      {step === 1 ? (
        <Box sx={inputWrapper}>
          <TextField
            id="email"
            type="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            onBlur={handleBlur('email')}
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
            onBlur={handleBlur('password')}
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

          <TextField
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            label="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            error={touched.confirmPassword && !!errors.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
            onBlur={handleBlur('confirmPassword')}
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

          <Box sx={btnFormWrapper}>
            <Button
              type="button"
              disabled={!!values || !!errors}
              onClick={handleNextStep}
              sx={{
                ...containedBtn,
                flex: '1 1 auto',
              }}
            >
              Next step
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={inputWrapper}>
          <TextField
            id="name"
            type="text"
            variant="outlined"
            label="Name"
            value={values.name}
            onChange={handleChange}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
            sx={inputText}
          />

          <TextField
            id="city"
            type="text"
            label="City"
            value={values.city}
            onChange={handleChange}
            error={touched.city && !!errors.city}
            helperText={touched.city && errors.city}
            sx={inputText}
          />

          <TextField
            id="phone"
            type="text"
            label="Phone"
            value={values.phone}
            onChange={handleChange}
            error={touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
            sx={inputText}
          />

          <Box sx={btnFormWrapper}>
            <Button
              type="submit"
              sx={{
                ...containedBtn,
                flex: '1 1 auto',
              }}
            >
              Register
            </Button>

            <Button type="button" onClick={handlePrevStep} sx={outlinedBtn}>
              Back
            </Button>
          </Box>
        </Box>
      )}

      <Typography>
        Already have an account?{' '}
        <Typography component={NavLink} to={'/login'} sx={footerLink}>
          Sign in
        </Typography>{' '}
        now
      </Typography>
    </Box>
  );
};
