import { Box, Toolbar, Typography, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Image from 'next/image';
const Header: React.FC = () => {
    //const isSmall = useMediaQuery('(max-width:1024px)');
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
            position='sticky'
            sx={{
                background: '#FFFFFF',
                border: '##E5E7EB',
                justifyContent: 'center',
            }}

        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                }}
            >
                {/* LOGO */}
                <Link href='/'>
                    <Box sx={{
                        position: 'relative',
                        left: '5%',
                        borderRadius: '50%',
                        bgcolor: 'black',
                        height: '50px',
                        width: '100px',
                        display: 'flex', alignItems: 'center'
                    }}>
                        <Image
                            src="/S_logo.png"
                            alt="Sudheer"
                            fill
                            priority
                            style={{ objectFit: "contain" }}
                        />
                    </Box>
                </Link>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
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
            </Toolbar>
        </AppBar >
    );
}

export default Header;