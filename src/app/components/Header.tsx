import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
const Header: React.FC = () => {
    const navItems: Array<{
        label: string;
        href: string;
    }> = [
            {
                label: 'Home', href: '/'
            },
            {
                label: 'Projects', href: '/projects'
            },
            {
                label: 'Experience', href: '/experience'
            },
            {
                label: 'Contact', href: '/contactMe'
            },
        ]
    return (
        <AppBar
            position='static'
            sx={{
                background: '#FFFFFF',
                border: '##E5E7EB',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}

        >

            <Box display="flex" gap={2}>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} style={{
                        textDecoration: 'none'
                    }}>
                        <Typography
                            sx={{
                                color: "#334155",
                                fontSize: '18px',
                                fontWeight: 700,
                            }}
                        >{item.label}</Typography>
                    </Link>
                ))}
            </Box>

        </AppBar >
    );
}

export default Header;