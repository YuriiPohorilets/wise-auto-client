import { Typography } from '@mui/material';
import { notFoundQuery } from 'components/NewsList/newsListStyles';

export const ErrorMsg = () => {
  return <Typography sx={notFoundQuery}>Oops, something went wrong</Typography>;
};
