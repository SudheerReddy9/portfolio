'use client'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, Typography } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
const ClinetHome: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const moveButton = () => {
        const randomX = Math.random() * 300 - 150; // move left/right
        const randomY = Math.random() * 200 - 100; // move up/down

        setPosition({ x: randomX, y: randomY });
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                p: 10

            }}
        >
            <Box
                sx={{
                    //maxWidth: 600
                }}
            >
                <Typography variant="h2"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        textAlign: 'center'
                    }}
                >Will You be my Valentine</Typography>
                {/* <Typography variant='h5'
                    sx={{
                        color: '#64748B',
                        mb: 4,
                    }}
                >
                    I build scalable, high-performance web applications
                    using React, Next.js, and TypeScript.
                </Typography> */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        //maxWidth: 600
                    }}
                >
                    <Box>
                        <Image
                            src="/valentinesday.jpg"
                            alt="Valentine's Day Design"
                            width={1200}
                            height={600}
                            style={{ borderRadius: 5 }}
                        />
                    </Box>

                    {/* <Button variant="contained"
                        onClick={handleOpen}
                        sx={{

                        }}
                    >View Projects</Button> */}

                    {/* <Button variant="contained"
                        sx={{

                        }}
                    >Download Resume</Button> */}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

                        p: 2
                    }}
                >
                    <Box
                        sx={{
                            p: 3
                        }}
                    >
                        <Tooltip title="Please No 😂😂" arrow >
                            <Button

                                variant="contained"
                                onMouseEnter={moveButton}

                                sx={{
                                    position: 'relative',
                                    transform: `translate(${position.x}px, ${position.y}px)`,
                                    transition: 'transform 0.3s ease',
                                    bgcolor: '#E24767',
                                    cursor: 'pointer'
                                }}

                            // sx={{

                            //     position: 'relative',
                            //     transition: 'all 0.3s ease',
                            //     '&:hover': {
                            //         animation: 'move 0.6s infinite alternate',
                            //     },
                            //     '@keyframes move': {
                            //         from: {
                            //             transform: 'translateX(-20px)',
                            //         },
                            //         to: {
                            //             transform: 'translateX(20px)',
                            //         },
                            //     },
                            // }}

                            >Cancel</Button>
                        </Tooltip>
                    </Box>

                    <Box>
                        <Button variant="contained" sx={{ bgcolor: '#E24767' }} onClick={handleOpen}>
                            Confirm
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Congragulations! You have won him</DialogTitle>

                            <DialogContent>
                                <Typography variant="h2" fontStyle={"italic"}
                                    color={'#E24767'}
                                >Love You Too</Typography>
                            </DialogContent>

                            <DialogActions>
                                <Button variant="contained" sx={{

                                    bgcolor: '#E24767'
                                }} onClick={handleClose}>
                                    Call me
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Box>
            </Box>

            {/* <Box
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
            </Box> */}
        </Box >
    )
}
export default ClinetHome