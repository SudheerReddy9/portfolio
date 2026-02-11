import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
const ClinetHome: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 10

            }}
        >
            <Box
                sx={{
                    maxWidth: 600
                }}
            >
                <Typography variant="h2"
                    sx={{
                        fontWeight: 700,
                        mb: 2
                    }}
                >Frontend & Web Developer</Typography>
                <Typography variant='h5'
                    sx={{
                        color: '#64748B',
                        mb: 4,
                    }}
                >
                    I build scalable, high-performance web applications
                    using React, Next.js, and TypeScript.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2
                    }}
                >
                    <Button variant="contained"
                        sx={{

                        }}
                    >View Projects</Button>
                    <Button variant="contained"
                        sx={{

                        }}
                    >Download Resume</Button>
                </Box>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    borderRadius: '16px',
                    backgroundColor: 'black',
                    position: 'relative',
                    width: 300,
                    height: 200,
                }}
            >
                <Image
                    src="/Aro_Logo-White.png"
                    alt="Sudheer"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </Box>
        </Box>
    )
}
export default ClinetHome