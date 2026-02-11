import { Box, Typography } from "@mui/material"

const ClinetHome: React.FC = () => {
    return (
        <Box

        >
            <Box
                sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5"
                    sx={{
                        p: '10px',
                    }}
                >Welcome</Typography>
                <Typography variant="h5">Hello, This is <strong> Venkata Sudheer</strong></Typography>

            </Box>
        </Box>
    )
}
export default ClinetHome