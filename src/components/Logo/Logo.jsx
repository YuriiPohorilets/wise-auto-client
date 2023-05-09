import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { logo, accent } from './logoStyles';

export const Logo = ({ sxColor, onClick }) => {
  return (
    <Typography noWrap component={NavLink} to="/" onClick={onClick} sx={logo}>
      Wise
      <Typography component="span" sx={{ ...accent, ...sxColor }}>
        Auto
      </Typography>
    </Typography>
  );
};
