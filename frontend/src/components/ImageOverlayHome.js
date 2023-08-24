import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import herohome from '../Assets/herohome.jpeg'
import { Card, CardContent, CardMedia, Container, IconButton, ImageList } from '@mui/material';
import { Button} from '@mui/material';





function ImageOverlayHome() {
  
  return (
    <Box 
      display='flex'
      className='imageoverlay'
      component='div'
      sx={{
        width: '90%',
        height: '50%',
        backgroundImage: `url(${herohome})`,
        backgroundPosition:'center center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat'
      }} >
      <Grid className='largegrid' container >
        <Grid container xs={8}>
          <Grid container item xs={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center'  textAlign='center' >
            <Typography variant='h4' color='white' fontWeight='700' >Thousands of Books!</Typography>
            <Typography variant='h4' color='white' fontWeight='700'>Unlimited Potential.</Typography>
            <Typography variant='subtitle1' color='white' fontWeight='450' sx={{mt:'5%'}}>Inspire a lifetime of reading and discovery</Typography>
            <Typography variant='subtitle1' color='white' fontWeight='450'>with our  e-library</Typography>
            <Button component={Link} variant='contained' to='/downloadbooks'
             sx={{mt:'5%',borderRadius:'20px',color:'#fc03fc',backgroundColor:'white',":hover":{bgcolor:'white'}}}>
             Get Started</Button>
          </Grid>
          
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
      </Grid>


      </Box>
    
      
    
  );
}
export default ImageOverlayHome;



/*  <Box
      display="flex"
      className='imageoverlay'
      component="div"
      alignItems="center"
      justifyContent="left"
      sx={{
        position: 'absolute',
        width: '80%',
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
  
     */