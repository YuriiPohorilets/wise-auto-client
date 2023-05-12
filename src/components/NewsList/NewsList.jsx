import { List, Typography } from '@mui/material';
import { NewsItem } from 'components/NewsItem/NewsItem';
import { newsList, notFoundQuery } from './newsListStyles';

export const NewsList = ({ data }) => {
  return (
    <List sx={newsList}>
      {data?.length === 0 && (
        <Typography sx={notFoundQuery}>Nothing was found for your request</Typography>
      )}

      {data?.map(news => {
        return <NewsItem key={news._id} news={news} />;
      })}
    </List>
  );
};
