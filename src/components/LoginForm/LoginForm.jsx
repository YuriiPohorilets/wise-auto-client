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

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

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

        <Button type="submit" sx={containedBtn}>
          Login
        </Button>
      </Box>

      <Typography>
        Not a member?{' '}
        <Typography
          component={NavLink}
          to={'/register'}
          sx={{ '&:hover': { color: 'primary.darker' }, color: 'primary.accent' }}
        >
          Sign up
        </Typography>{' '}
        now
      </Typography>
    </Box>
  );
};
