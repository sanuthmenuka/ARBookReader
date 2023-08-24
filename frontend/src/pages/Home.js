import { Box, Container, Typography } from "@mui/material";
import ImageOverlayHome from "../components/ImageOverlayHome";


const Home = () => {
    return (
        <Box   className='home' display='flex' flexDirection='column' alignItems='center'  sx={{height:'100%'}}>
        
             <ImageOverlayHome></ImageOverlayHome>
             <Typography component='div'>
                hi
             </Typography>
             
        
        </Box>  
       
                   
        

            
        
    );
}
 
export default Home;