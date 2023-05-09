import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { logoStyle, accentStyle } from './logoStyles';

export const Logo = ({ sxColor, onClick }) => {
  return (
    <Typography noWrap component={NavLink} to="/" onClick={onClick} sx={logoStyle}>
      Wise
      <Typography component="span" sx={{ ...accentStyle, ...sxColor }}>
        Auto
      </Typography>
    </Typography>
  );
};
