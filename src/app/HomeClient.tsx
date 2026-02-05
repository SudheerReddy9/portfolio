import { Box, Typography } from "@mui/material"

const ClinetHome: React.FC = () => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                justifyItems: 'center',

                bgcolor: 'grey'
            }}
        >
            <Typography variant="h1"
                p={10}
            >Sudheer Reddy</Typography>
            <Typography variant="h1">Coming Soon!</Typography>

        </Box>
    )
}
export default ClinetHome