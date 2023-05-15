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
import {
  formWrapper,
  inputWrapper,
  formControl,
  inputLabel,
  inputText,
  footerLink,
} from 'shared/commonStyles';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formWrapper}>
      <Box sx={inputWrapper}>
        <FormControl variant="outlined" sx={formControl}>
          <InputLabel htmlFor="Email" sx={inputLabel}>
            Email
          </InputLabel>

          <OutlinedInput id="email" type="email" label="Email" required sx={inputText} />
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="password" sx={inputLabel}>
            Password
          </InputLabel>

          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
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

        <Button type="submit" sx={containedBtn}>
          Login
        </Button>
      </Box>

      <Typography>
        Not a member?{' '}
        <Typography component={NavLink} to={'/register'} sx={footerLink}>
          Sign up
        </Typography>{' '}
        now
      </Typography>
    </Box>
  );
};
