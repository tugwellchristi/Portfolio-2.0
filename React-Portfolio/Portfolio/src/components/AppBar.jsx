import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';


const pages = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="appbar"
      sx={{
        height: '125px',
        width: '100%',
        top: 0,
        position: 'fixed',
        backgroundColor: '#151D52ff',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: '100%' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '2rem',
              marginTop: '20px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Link for Home */}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              CHRISTI TUGWELL
            </Link>
          </Typography>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiMenuItem-root': {
                margin: '8px 0',
                padding: '16px',
                fontSize: '1.5rem',
              },
            }}
          >
            {/* Use Link for each menu item */}
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link
                  to={page.path}
                  style={{ color: '#FA6A0Aff', textDecoration: 'none' }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {/* Use Link for each button */}
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: '#D24FB3ff', 
                  fontSize: '1.5rem', 
                  marginTop: '40px' 
                }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;