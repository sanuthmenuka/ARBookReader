import {Box,Container,Stack,Typography,useTheme,Button} from '@mui/material';
import { styled } from "@mui/material/styles";
import { grey,blue } from '@mui/material/colors';

import arImg from "../Assets/ar page img.jpeg";
import appleStore from "../Assets/app_store logo.png";
import playStore from "../Assets/play_store logo.png";


const AR = () => {
   const theme = useTheme();
    const OuterContainer = styled(Box)(() => ({
        marginBottom:"100px",
      }));
    
    const ImageContainer =styled(Box)(()=>({ //to get the img to the center
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        //backgroundColor :grey[900],
        
        
        [theme.breakpoints.up("xl")]: {
          margin:"30px 150px",
          gap : '50px',
        },

        [theme.breakpoints.down("xl")]: {
          margin:"10px 50px",
          gap : '50px',
        },
        [theme.breakpoints.down("md")]: {
          margin:"10px 20px",
          gap : '50px',
        },

        [theme.breakpoints.down("sm")]: {
          margin:"0px 10px",
          gap : '20px',
        },
        
        

        }));

    const ARImage = styled("img")(({src,theme}) => ({
        src: `url(${src})`,
        objectFit: 'cover', 
        maxWidth :'100%',
    
     }));
    
    const TextContainer =styled(Box)(()=>({ //to get the img to the center
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor : grey[200], 
        maxWidth: '100%',
        
       
        height: '100%', 
       [theme.breakpoints.up('lg')]: {
            padding:"30px 50px",
          }, 
          [theme.breakpoints.down('lg')]: { 
            padding:"30px 50px",
            
          }, 
          [theme.breakpoints.down('md')]: {
            padding:"30px 30px",
          }, 
          [theme.breakpoints.down('sm')]: {
            padding:"10px 10px",
          }, 
        
    }));
    const DownloadBtn = styled(Button)(() => ({
        borderRadius:"150px",
        color:"white",
        backgroundColor:blue[300],
        maxWidth:'100%',
        
        fontSize: '2.0rem',
        '&:hover':{
          backgroundColor:blue[600],
        },
        
        [theme.breakpoints.up('sm')]: {
          margin:'50px 30px 20px 30px',
          width:"400px",
          height:"100px",
        },
        [theme.breakpoints.down('sm')]: {
          margin:'10px 15px 0px 5px', //top right bottom left
          width:"60vw",
          height:"18vw",
          fontSize:"6vw",
        },
      }));
    

      const StoreIcon = styled("img")(({src,theme}) => ({
        src: `url(${src})`,
        objectFit: 'cover', 
        [theme.breakpoints.up("xl")]: {
            padding:"10px 10px",
            width: '300px',
            height: '100px',  
        
        },
        [theme.breakpoints.down("xl")]: {
            padding:"30px 30px",
            width: '400px',
            height: '200px',  
        
        },
        [theme.breakpoints.down("md")]: {
            padding:"20px 20px",
            width: '300px',
            height: '150px', 
        },
        [theme.breakpoints.down("sm")]: {
          padding:"0px 5px",
          width: '50vw',
          height: '20vw',
         
      },
     }));
    
    

    return ( 
       <OuterContainer >
        
        <ImageContainer >
          
           <ARImage src={arImg}/>
           
           <TextContainer>
              <Typography textAlign={"center"} sx={{fontSize:{xl:"1.4rem" ,md:"1.3rem",sm:"1.2rem"}}}   >
                <p>Pixie is an amazing platform that provides a fun and  interactive learning experience fo kids.</p>
              <p>With Pixie, children can explore and  read books just like on Kindle, but with added bonus of augmented reality content. 
                This feture allows kids to truly immerse themselves in the story and learn in a way that is both engaging and memorable.
              To access this feature, simply download the Pixie app from either the Apple Store or Play Store. From there, your child can begin their journey of becoming a lifelong reader and learner.
              </p>
          </Typography>
          < DownloadBtn>Download Now</DownloadBtn>

          <Stack sx={{ 
        flexDirection: { xs: "column", sm: "row"},
        padding:{xs:"10px"}}}>
        <StoreIcon src={appleStore}/>
        <StoreIcon src={playStore}/>
       </Stack>
        </TextContainer>
        </ImageContainer>
        
        
       
       </OuterContainer>
       
     );
}
 
export default AR;