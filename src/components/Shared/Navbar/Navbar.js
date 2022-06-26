import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
// import UserSettings from './UserSettings/UserSettings';
import NavItems from './NavItems/NavItems';
import NavItemsSidebar from './NavItemsSidebar/NavItemsSidebar';
// import useReduxState from '../../../hooks/useReduxState';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
    const logo = 'https://i.ibb.co/FW3LZMp/logo.png';

    // const { cartItems } = useReduxState();

    return (
        <Box>
            <AppBar sx={{ backgroundColor: 'whitesmoke' }}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <NavLink to=''>
                                <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                            </NavLink>
                        </Typography>

                        {/* NAV ITEMS for smaller screen display (smaller than width of 899px) */}
                        <NavItemsSidebar />

                        {/* NAV ITEMS for larger screen display (greater than width of 899px) */}
                        <NavItems />

                        {/* CART ICON SECTION */}
                        <Box sx={{ my: 3, pr: 3 }}>
                            <NavLink to='' style={{ textDecoration: 'none', color: 'black' }}>
                                <Badge badgeContent={cartItems?.length} color="error">
                                    <ShoppingCartIcon sx={{ fontSize: '1.5rem' }} />
                                </Badge>
                            </NavLink>
                        </Box>

                        {/* USER SETTINGS SECTION */}
                        {/* <UserSettings /> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navbar;