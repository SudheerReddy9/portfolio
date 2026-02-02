import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
const Header: React.FC = () => {
    return (
        <AppBar
            position='static'
            sx={{
                background: 'black'
            }}

        >

            <Box>Home</Box>
            <Box>Projects</Box>
            <Box>About</Box>
            <Box>Contact</Box>
        </AppBar>
    );
}

export default Header;