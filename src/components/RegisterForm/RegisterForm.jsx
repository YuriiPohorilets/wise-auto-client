import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { OutlinedInput, Box, Typography, Button, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { registerSchema } from 'schemas/registerSchema';
import { containedBtn, outlinedBtn } from 'shared/commonStyles';
import {
  formWrapper,
  formTitle,
  inputWrapper,
  formControl,
  inputLabel,
  inputText,
  footerLink,
  btnFormWrapper,
} from 'shared/commonStyles';

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const maxSteps = 2;

  const handleShowPassword = () => setShowPassword(show => !show);

  const handleNextStep = () => {
    if (step < maxSteps) setStep(prevStep => prevStep + 1);
    return;
  };

  const handlePrevStep = () => {
    if (step >= maxSteps) setStep(prevStep => prevStep - 1);
    return;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={formWrapper} noValidate>
      <Typography sx={formTitle}>
        Step {step}/{maxSteps}
      </Typography>

      {step === 1 ? (
        <Box sx={inputWrapper}>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            sx={inputText}
          />

          <TextField
            components={OutlinedInput}
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            sx={inputText}
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="toggle password visibility"
            //       edge="end"
            //       onClick={handleShowPassword}
            //     >
            //       {showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.currentTarget.value)}
            sx={inputText}
            //   endAdornment={
            //     <InputAdornment position="end">
            //       <IconButton
            //         aria-label="toggle password visibility"
            //         edge="end"
            //         onClick={handleShowPassword}
            //       >
            //         {showPassword ? <VisibilityOff /> : <Visibility />}
            //       </IconButton>
            //     </InputAdornment>
            //   }
          />

          <Box sx={btnFormWrapper}>
            <Button
              type="button"
              onClick={handleNextStep}
              sx={{ ...containedBtn, flex: '1 1 auto' }}
            >
              Next step
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={inputWrapper}>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            sx={inputText}
          />

          <TextField
            type="text"
            label="City"
            value={city}
            onChange={e => setCity(e.currentTarget.value)}
            sx={inputText}
          />

          <TextField
            type="text"
            label="Phone"
            value={phone}
            onChange={e => setPhone(e.currentTarget.value)}
            sx={inputText}
          />

          <Box sx={btnFormWrapper}>
            <Button type="submit" sx={{ ...containedBtn, flex: '1 1 auto' }}>
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
