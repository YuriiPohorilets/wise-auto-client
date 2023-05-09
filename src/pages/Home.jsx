import { Box, Typography } from '@mui/material';
import { Section } from 'shared/Section';
import PreviewImg from 'img/preview.webp';
import { Logo } from 'components/Logo/Logo';

export const Home = () => {
  return (
    <Section>
      <Box>
        <Typography>Let's find your perfect car</Typography>
        <Typography>
          <Logo /> helps you shop and sell with confidence
        </Typography>
        <img src={PreviewImg} alt="" width="540" height="479" />
      </Box>
    </Section>
  );
};
