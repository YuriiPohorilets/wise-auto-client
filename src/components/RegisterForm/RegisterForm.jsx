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
import { containedBtn } from 'shared/commonStyles';

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const maxSteps = 2;

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleNextStep = () => {
    if (step < maxSteps) {
      setStep(prevStep => prevStep + 1);
    }

    return;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        m: '0 auto',
        p: { xs: '24px 24px', md: '24px 72px' },

        maxWidth: '750px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        bgcolor: 'neutral.accent',
        border: '1px solid #78938A',
        borderRadius: '16px',
      }}
    >
      <Typography sx={{ fontSize: '32px', mb: '24px' }}>
        Step {step}/{maxSteps}
      </Typography>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '36px', width: '100%', mb: '40px' }}
      >
        <FormControl sx={{ width: '100%', color: 'primary.main' }} variant="outlined">
          <InputLabel htmlFor="Email" sx={{ color: 'primary.main' }}>
            Email
          </InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            required
            label="Email"
            sx={{ borderRadius: '8px', bgcolor: 'neutral.accent', color: 'primary.main' }}
          />
        </FormControl>

        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            label="Password"
            sx={{ borderRadius: '8px', bgcolor: 'neutral.accent', color: 'primary.main' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
          <OutlinedInput
            id="confirm-password"
            type={showPassword ? 'text' : 'password'}
            required
            label="Confirm [assword"
            sx={{ borderRadius: '8px', bgcolor: 'neutral.accent', color: 'primary.main' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Button type="button" onClick={handleNextStep} sx={{ ...containedBtn, flex: '1 1 auto' }}>
            Next step
          </Button>
        </Box>
      </Box>

      <Typography>
        Already have an account?{' '}
        <Typography
          component={NavLink}
          to={'/login'}
          sx={{ '&:hover': { color: 'primary.darker' }, color: 'primary.accent' }}
        >
          Sign in
        </Typography>{' '}
        now
      </Typography>
    </Box>
  );
};
