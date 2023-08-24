import { Box, Container, Typography } from "@mui/material";
import ImageOverlayHome from "../components/ImageOverlayHome";


const Home = () => {
    return (
        <Box   className='home' display='flex' justifyContent='center' sx={{height:'100%'}}>
        
             <ImageOverlayHome/>
             <Typography component='div'>
                
             </Typography>
             
        
        </Box>  
       
                   
        

            
        
    );
}
 
export default Home;