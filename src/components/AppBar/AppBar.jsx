import { AppBar as MuiAppBar, Box } from '@mui/material';
import { Container } from 'shared/Container';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { appBarStyle, wrapperStyle } from './appBarStyles';

export const AppBar = () => {
  return (
    <MuiAppBar position="static" sx={appBarStyle}>
      <Container>
        <Box sx={wrapperStyle}>
          <Logo />
          <Navigation />
          <AuthBar />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
