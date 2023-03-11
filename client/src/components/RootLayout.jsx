import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Navbar } from './Navbar';

export function RootLayout() {
  return (
    <Box>
      <div
        style={{
          height: '90vh',
        }}
      >
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </Box>
  );
}
