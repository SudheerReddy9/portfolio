// src/theme/lightTheme.ts

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4F46E5', // Indigo
        },
        secondary: {
            main: '#22C55E',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F8FAFC',
        },
        text: {
            primary: '#020617',
            secondary: '#475569',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
});
