import { Pagination as MuiPagination } from '@mui/material';

export const Pagination = ({ onChange, page, totalHits }) => {
  return (
    <MuiPagination
      count={totalHits}
      page={page}
      onChange={onChange}
      size="large"
      variant="outlined"
      shape="rounded"
      color="secondary"
      sx={{ justifyContent: 'center', display: 'flex', color: 'primary.accent' }}
    />
  );
};
