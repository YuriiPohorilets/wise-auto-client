import { Pagination as MuiPagination } from '@mui/material';

export const Pagination = () => {
  return (
    <MuiPagination
      count={10}
      size="large"
      variant="outlined"
      shape="rounded"
      color="secondary"
      sx={{ justifyContent: 'center', display: 'flex', color: 'primary.accent' }}
    />
  );
};
