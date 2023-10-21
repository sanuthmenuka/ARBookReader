import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import {useState,useEffect } from 'react';
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
import { Avatar } from '@mui/material';
import UserDetails from "../functions/userDetails";
import useEditProfile from "../hooks/useEditProfile";





const linkStyles = {
  textDecoration: 'none',
  color: 'inherit', // Inherit the color from parent (default)
  '&:hover': {
    color: '#f50057', // Change link color on hover
  },
};


const  Navtop=(props) =>{
  const [users, setUsers] = useState([]);
  const {isChanged } = useEditProfile();
  const drawerWidth = 240;
  const navItems_public = [
  { label: 'Publish', to: '/publish' },      // Define paths for your navigation items
  { label: 'Search', to: '/downloadbooks' }, 
  { label: 'AR', to: '/ar' },
  {label: 'Pricing', to: '/pricing'},
  {label: 'About', to: '/about'},
  //Get an image of a user from a website just to check the frontend
  //This should be later fetched from database
  {label: <Avatar src={users.profilePicture} />, to: '/useraccount'}
];

const navItems_admin = [
  { label: 'Publish Rights', to: '/publsihrights' },      // Define paths for your navigation items
  { label: 'Review', to: '/reviewbooks' }, 
  //Get an image of a user from a website just to check the frontend
  //This should be later fetched from database
  {label: <Avatar src={users.profilePicture} />, to: '/useraccount'}
];
  
  const {user}=useAuthContext();
  const {logout}=useLogout();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let navItems= null;

  if(user){
    if(user.role === 'admin'){
      navItems = navItems_admin
    }
    else{
      navItems = navItems_public
    }
    
  }
  


  useEffect(() => {
   //console.log("ischanged");
    UserDetails()
    .then((data) => {
      setUsers(data);
      
    })
    .catch((error) => {
      console.error(error);
    
    })
    
  },[isChanged]);


  const handleClick=()=>{
    logout()
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Button component={Link} to="/" variant="h6" sx={{ my: 2 }}>
       PIXIE
      </Button>

     
      <Divider />

      {user &&  (
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
          <Link to='/' style={{textDecoration:'none',color:'inherit'}}>PIXIE</Link>
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

