import { Container as MuiContainer } from '@mui/material';

export const Container = ({ children }) => {
  return (
    <MuiContainer sx={{ maxWidth: '1200px', px: '15px', mx: 'auto' }}>{children}</MuiContainer>
  );
};
