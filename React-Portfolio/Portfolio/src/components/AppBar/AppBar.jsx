import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './AppBar.css'

const pages = ['About', 'Projects', 'Contact', 'Resume'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="appbar" sx={{ height: '150px', width: '100%', top: 0, position: 'fixed' }}>
      <Container maxWidth="xl" sx={{ maxWidth: '100%' }}>
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '2rem',
              marginTop: '40px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            CHRISTI TUGWELL
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', fontSize: '1.5rem', marginTop: '40px' }}
            >
              {page}
            </Button>
          ))}

        </Box>
      </Toolbar>
    </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;