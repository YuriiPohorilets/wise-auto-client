import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Container } from 'components/Container/Container';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Box component="main" sx={{ py: '64px' }}>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
