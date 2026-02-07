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
                        <Link href={'https://www.shopgashunters.com/'}
                            target="_blank">
                            <Typography
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
                    flexDirection: 'row',
                }}
            >
                <Link href={'https://www.playcannabis.fun/'}
                    target="_blank"
                >
                    <Typography>Play</Typography>
                </Link>
                <Link href={'https://www.macpharms.com/'}
                    target="_blank">
                    <Typography>Mac Pharms</Typography>
                </Link>
            </Box>
        </Box>
    )
}
export default Projects;