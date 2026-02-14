import { Box, Typography } from "@mui/material"
import Link from "next/link";
import Image from "next/image";
const Projects: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                height: '100vh',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    height: 400

                }}
            >
                <Link href={'https://www.shopgashunters.com/'}
                    target="_blank"
                >
                    <Box
                        sx={{
                            m: 2,
                            borderRadius: '5px',
                            height: 400,
                            bgcolor: 'black',
                            cursor: 'pointer',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            alignContent: 'center'
                        }}
                    >
                        <Box sx={{

                            position: 'relative',
                            width: 500, height: 400
                        }}>
                            <Image
                                src="/logo-vertical.png"
                                alt="Aro Connection Webiste Logo"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>

                    </Box>
                </Link>

                <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '20px'

                    }}

                >
                    <Link href={'https://www.aroconnection.com/'}
                        target="_blank">

                        Gas Hunters
                    </Link>
                </Typography>


            </Box>



            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    height: 400
                }}
            >
                <Link href={'https://www.aroconnection.com/'}>
                    <Box
                        sx={{
                            m: 2,
                            cursor: 'pointer',
                            bgcolor: 'black', alignContent: 'center',
                            justifyItems: 'center',
                            height: 400
                        }}
                    >
                        <Box sx={{

                            position: 'relative',
                            width: 500, height: 400
                        }}>
                            <Image
                                src="/Aro_Logo-White.png"
                                alt="Aro Connection Webiste Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>

                    </Box>
                </Link>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '20px'
                    }}>
                    <Link href={'https://www.aroconnection.com/'}
                        target="_blank">

                        Aro Connection
                    </Link>
                </Typography>
            </Box>



            {/* 
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        m: 5,

                        height: 200,
                        width: 300,
                        bgcolor: 'black',
                        '&:hover': {
                            transform: 'translateY(-30px)'
                        }
                    }}
                >
                    <Box sx={{

                        position: 'relative',
                        width: 300, height: 200,
                        cursor: 'pointer',

                    }}>
                        <Image
                            src="/Aro_Logo-White.png"
                            alt="Aro Connection Webiste Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Box>
                    <Link href={'https://www.shopplaycanna.com/'}
                        target="_blank">
                        <Typography
                            textAlign={'center'}
                        >Play</Typography>
                    </Link>
                </Box>
            </Box> */}
        </Box >
    )
}
export default Projects;