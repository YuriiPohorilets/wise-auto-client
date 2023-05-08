import { Box } from '@mui/material';
import { Section } from 'shared/Section';
import PreviewImg from 'img/preview.webp';

export const Home = () => {
  return (
    <Section>
      <Box>
        <img src={PreviewImg} alt="" width="540" height="479" />
      </Box>
    </Section>
  );
};
