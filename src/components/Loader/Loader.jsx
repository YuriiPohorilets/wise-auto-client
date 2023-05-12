import { Box, CircularProgress } from '@mui/material';

export const Loader = ({ size }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={size} color={'secondary'} thickness={4} />
    </Box>
  );
};
