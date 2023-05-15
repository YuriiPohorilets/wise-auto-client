import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
    <Box component="form" onSubmit={handleSubmit} sx={formWrapper}>
      <Typography sx={formTitle}>
        Step {step}/{maxSteps}
      </Typography>

      {step === 1 ? (
        <Box sx={inputWrapper}>
          <FormControl sx={formControl} variant="outlined">
            <InputLabel htmlFor="Email" sx={inputLabel}>
              Email
            </InputLabel>

            <OutlinedInput
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              required
              sx={inputText}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>

            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              required
              sx={inputText}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>

            <OutlinedInput
              id="confirm-password"
              type={showPassword ? 'text' : 'password'}
              label="Confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.currentTarget.value)}
              required
              sx={inputText}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

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
          <FormControl sx={formControl} variant="outlined">
            <InputLabel htmlFor="Name" sx={inputLabel}>
              Name
            </InputLabel>

            <OutlinedInput
              id="name"
              type="text"
              label="Name"
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              required
              sx={inputText}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="city">City</InputLabel>

            <OutlinedInput
              id="city"
              type="text"
              label="City"
              value={city}
              onChange={e => setCity(e.currentTarget.value)}
              required
              sx={inputText}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="phone">Phone</InputLabel>

            <OutlinedInput
              id="phone"
              type="text"
              label="Phone"
              value={phone}
              onChange={e => setPhone(e.currentTarget.value)}
              required
              sx={inputText}
            />
          </FormControl>

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
