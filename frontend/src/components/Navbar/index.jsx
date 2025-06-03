import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const drawerWidth = 240;

function Navbar(props) {
  const { auth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getBackendUrl = (path) => {
    const base = import.meta.env.BASE_API_URL || 'http://localhost:4000';
    return base.replace(/\/$/, '') + path;
  };

  let navItems = [];
  if (auth === null) {
    navItems = [];
  } else if (auth === false) {
    navItems = [
      { label: 'Login With Google', href: getBackendUrl('/auth/google'), external: true },
    ];
  } else {
    navItems = [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Add Book', to: '/books/new' },
      { label: 'Logout', href: getBackendUrl('/api/logout'), external: true },
    ];
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{ my: 2, color: 'inherit', textDecoration: 'none', display: 'block' }}
      >
        2ndBuy
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.to ? (
              <ListItemButton component={Link} to={item.to} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none' }}
          >
            2ndBuy
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) =>
              item.to ? (
                <Button key={item.label} component={Link} to={item.to} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              ) : (
                <Button key={item.label} component="a" href={item.href} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* Spacer for AppBar */}
      <Toolbar />
    </Box>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
