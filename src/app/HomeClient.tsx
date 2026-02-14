import { Box, Button, Typography } from "@mui/material"
import Image from "next/image";
import Link from "next/link";
const ClinetHome: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
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
                    >Frontend <Box component="span" sx={{ color: '#4F46E5' }}>Engineer</Box></Typography>
                    <Typography variant='h5'
                        sx={{
                            color: '#64748B',
                            mb: 4,
                        }}
                    >
                        I design and build scalable, high-performance
                        e-commerce platforms and web applications
                        using React, Next.js, and TypeScript
                        focused on performance, UX, and business impact.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        <Button variant="contained"
                            href="/projects"
                            sx={{
                                px: 3,
                                py: 1,
                                fontWeight: 600,
                                fontSize: '20px',
                                borderRadius: '12px',
                                textTransform: 'none',
                                backgroundColor: '#4F46E5',
                                boxShadow: '0 8px 20px rgba(79,70,229,0.25)',
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 25px rgba(79,70,229,0.35)',
                                    backgroundColor: '#4338CA',
                                },
                            }}
                        >View Projects</Button>
                        <Button
                            href="/Venkata_Sudheer_developer.pdf"
                            variant="contained"
                            download
                            sx={{
                                px: 3,
                                py: 1,
                                fontWeight: 600,
                                fontSize: '20px',
                                borderRadius: '12px',
                                textTransform: 'none',
                                backgroundColor: '#4F46E5',
                                boxShadow: '0 8px 20px rgba(79,70,229,0.25)',
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 25px rgba(79,70,229,0.35)',
                                    backgroundColor: '#4338CA',
                                },
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    my: 10,
                    px: { xs: 2, md: 10 },
                    flexWrap: 'wrap',
                    gap: 4,
                }}
            >
                <Box
                    sx={{
                        perspective: '1000px',
                        width: '33%',
                        height: 200,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.6s',
                            transformStyle: 'preserve-3d',
                            '&:hover': {
                                transform: 'rotateY(180deg)',
                            },
                        }}
                    >
                        {/* FRONT SIDE */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                p: 2,
                                borderRadius: '10px',
                                boxShadow: '0 8px 20px rgba(79,70,229,0.25)',
                                backgroundColor: '#FFFFFF',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h3" sx={{ fontWeight: 700, color: '#4F46E5' }}>
                                60%
                            </Typography>
                            <Typography variant="body1" sx={{
                                fontSize: '18px',
                                color: '#64748B'
                            }}>
                                Faster Deployment
                            </Typography>
                        </Box>

                        {/* BACK SIDE */}
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)',
                                p: 2,
                                borderRadius: '10px',
                                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                                color: 'white',
                                boxShadow: '0 12px 25px rgba(79,70,229,0.35)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="body2"
                                sx={{
                                    fontSize: '20px'
                                }}
                            >
                                Reduced manual deployment time by automating CI/CD with GitHub Actions.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        perspective: 1000,
                        width: '33%',
                        height: 200
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#4F46E5' }}>
                        35%
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748B' }}>
                        Improved Search Accuracy
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#4F46E5' }}>
                        20%
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#64748B' }}>
                        Reduced Shipping Cost
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default ClinetHome