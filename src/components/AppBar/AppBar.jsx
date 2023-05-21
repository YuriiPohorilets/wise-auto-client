import { AppBar as MuiAppBar, Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthBar } from 'components/AuthBar/AuthBar';
import { appBar, wrapper } from './appBarStyles';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="static" sx={appBar}>
      <Container>
        <Box sx={wrapper}>
          <Logo />
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </Box>
      </Container>
    </MuiAppBar>
  );
};
