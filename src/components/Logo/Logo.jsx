import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { logoStyle, accentStyle } from './logoStyles';

export const Logo = () => {
  return (
    <Typography noWrap component={NavLink} to="/" sx={logoStyle}>
      Wise
      <Typography component="span" sx={accentStyle}>
        Auto
      </Typography>
    </Typography>
  );
};
