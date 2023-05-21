import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      component="h2"
      sx={{ mb: '24px', fontWeight: 700, fontSize: '48px', textAlign: 'center' }}
    >
      {children}
    </Typography>
  );
};
