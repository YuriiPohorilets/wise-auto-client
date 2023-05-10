import { useGetNewsQuery } from 'services/wiseAutoApi';
import { List } from '@mui/material';
import { NewsItem } from 'components/NewsItem/NewsItem';
import { newsList } from './newsListStyles';

export const NewsList = () => {
  const { data, error, isLoading } = useGetNewsQuery();

  console.log(error);
  console.log(isLoading);

  return (
    <List sx={newsList}>
      {data?.result.map(news => {
        return <NewsItem key={news._id} news={news} />;
      })}
    </List>
  );
};
