import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { newsCard, newsImg, newsTitle, newsDescription, newsDate } from './newsItemStyles';
import { dateConverter } from 'utils/dateConverter';

export const NewsItem = ({ news }) => {
  const { title, description, url, imgUrl, date } = news;
  const convertedDate = dateConverter(date);

  return (
    <Card component="li" sx={newsCard}>
      <CardActionArea component="a" href={url} target="_blank">
        <CardMedia component="img" src={imgUrl} alt={title} width="350" height="190" sx={newsImg} />

        <CardContent>
          <Typography sx={newsTitle}>{title}</Typography>
          <Typography sx={newsDescription}>{description}</Typography>
          <Typography sx={newsDate}>{convertedDate}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
