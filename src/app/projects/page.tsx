import { Box, Typography } from "@mui/material"
import Link from "next/link";
import Image from "next/image";
const Projects: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            m: 5,
                            borderRadius: '30px',
                            height: 200,
                            width: 300,
                            bgcolor: 'black',
                            color: 'red',
                        }}
                    >
                        <Box sx={{

                            position: 'relative',
                            width: 300, height: 200
                        }}>
                            <Image
                                src="/Aro_Logo-White.png"
                                alt="Aro Connection Webiste Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                        <Link href={'https://www.shopgashunters.com/'}
                            target="_blank">
                            <Typography
                                pt={3}
                                textAlign={'center'}
                            >GasHunters</Typography>
                        </Link>
                    </Box>
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            m: 5,
                            borderRadius: '30px',
                            height: 200,
                            width: 300,
                            bgcolor: 'black',
                            color: 'red'
                        }}
                    >
                        <Box sx={{

                            position: 'relative',
                            width: 300, height: 200
                        }}>
                            <Image
                                src="/Aro_Logo-White.png"
                                alt="Aro Connection Webiste Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                        <Link href={'https://www.aroconnection.com/'}
                            target="_blank">
                            <Typography
                                textAlign={'center'}
                            >Aro Connection</Typography>
                        </Link>
                    </Box>
                </Box>


            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        m: 5,
                        borderRadius: '30px',
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
            </Box>
        </Box >
    )
}
export default Projects;