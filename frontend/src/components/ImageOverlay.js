import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import herohome from '../Assets/herohome.jpeg'
import { Card, CardContent, CardMedia, Container, IconButton, ImageList } from '@mui/material';
import { Button } from '@mui/material';



const imageProps = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "../Assets/herohome.jpeg",
  imageText: "Hardcoded Image",
  linkText: "Learn More",
  title: "Hardcoded Title",
};

function ImageOverlay() {
  

  return (
    
      <Box
      display="flex"
      component="div"
      alignItems="center"
      justifyContent="left"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '50%',
        backgroundImage: `url(${herohome})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
    <Box display="flex" flexDirection="column" component="div" alignItems="center" justifyContent="center"
      sx={{color:'white'  }} >
       <Typography variant='h4'>Thousands of Books! Unlimited Potential.</Typography>
       <Typography variant='body'>Inspire a lifetime of reading and discovery
with our award winning e-library</Typography>

      <Button variant='contained' component={Link} to='/downloadbooks'>Read Now</Button>
    </Box>
     



    </Box>
  
    
  );
}
export default ImageOverlay;
