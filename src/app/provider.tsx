'use client';

import { ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { lightTheme } from '@/theme';
import Header from '../components/Header';



export default function ProviderLayer({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element {
    return (
        <ThemeProvider theme={lightTheme}>


            <Header />

            <Suspense fallback={<div>Loading...</div>}>
                <div className='main' style={{ flexGrow: 1 }}>
                    {children}
                </div>
            </Suspense>



        </ThemeProvider>
    );
}
