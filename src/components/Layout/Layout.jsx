import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Container } from 'shared/Container';

export const Layout = () => {
  return (
    <>
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
