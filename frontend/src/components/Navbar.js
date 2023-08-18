import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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




const drawerWidth = 240;
const navItems = [
  { label: 'Publish', to: '/publish' },      // Define paths for your navigation items
  { label: 'Read', to: '/' }, 
  { label: 'AR', to: '/' },
  {label: 'About', to: '/'}
];


const linkStyles = {
  textDecoration: 'none',
  color: 'inherit', // Inherit the color from parent (default)
  '&:hover': {
    color: '#f50057', // Change link color on hover
  },
};


const  Navtop=(props) =>{
  const {user}=useAuthContext();
  const {logout}=useLogout();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick=()=>{
    logout()
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
       PIXIE
      </Typography>

     
      <Divider />

      {user && (
        <List>
      
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Button component={Link} onClick={handleClick}>Log out</Button>
      </List>)}

      {!user && (
        <List>
        <Button component={Link} to="/login" sx={{ ...linkStyles }}>
              Login
            </Button>
            <Button component={Link} to="/signup" sx={{ ...linkStyles }}>
              Sign Up
            </Button>
           
        </List>
      )}
      
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ color: 'black', backgroundColor: 'white' }}>
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
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PIXIE
          </Typography>
          {user &&(
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} to={item.to} sx={{ color: 'black' }}>
                {item.label}
              </Button>
              
            ))}
            <Button component={Link} onClick={handleClick}>Log out</Button>
            
           
          </Box>)}

          {!user && 
          ( <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={Link} to="/login" sx={{ ...linkStyles }}>
              Login
            </Button>
            <Button component={Link} to="/signup" sx={{ ...linkStyles }}>
              Sign Up
            </Button>
           
            
          </Box>)}
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navtop.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navtop;


/*
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pixie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          {user && (
            <Nav>
              <Nav.Link href="/publish">Publish</Nav.Link>
              <Nav.Link href="/downloadbooks">Buy books</Nav.Link>
              <Button variant='primary' onClick={handleClick}>Log out</Button>
            </Nav>
          )}
          {!user && (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>
          )}
  
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    */