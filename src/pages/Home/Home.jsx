import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { Section } from 'shared/Section';
import { Logo } from 'components/Logo/Logo';
import PreviewImg from 'img/preview.webp';
import { wrapper, contentWrapper, title, subtitle, btn, imgWrapper } from './homeStyles';

export const Home = () => {
  return (
    <Section>
      <Box sx={wrapper}>
        <Box sx={contentWrapper}>
          <Typography component="h1" sx={title}>
            Let's find your perfect car
          </Typography>
          <Typography sx={subtitle}>
            <Logo /> helps you shop and sell with confidence
          </Typography>

          <Button component={NavLink} to={'/404'} sx={btn}>
            Let's start
          </Button>
        </Box>

        <Box sx={imgWrapper}>
          <img src={PreviewImg} alt="Cars" width="540" height="479" />
        </Box>
      </Box>
    </Section>
  );
};
