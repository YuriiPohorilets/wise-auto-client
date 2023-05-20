import { AppBar as MuiAppBar, Box } from '@mui/material';
import { Container } from 'shared/Container';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthBar } from 'components/AuthBar/AuthBar';

import { appBar, wrapper } from './appBarStyles';

export const AppBar = () => {
  return (
    <MuiAppBar position="static" sx={appBar}>
      <Container>
        <Box sx={wrapper}>
          <Logo />
          <Navigation />
          <AuthBar />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
