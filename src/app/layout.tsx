import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/shared/config/theme/ThemeRegistry';
import Header from '@/shared/ui/common/layouts/Header';
import Footer from '@/shared/ui/common/layouts/Footer';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              width: '100%',
            }}
          >
            <Header/>
            <Box
              component="main"
              sx={{
                width: '100%',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {children}
            </Box>
            <Footer/>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
