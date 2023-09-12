import { Typography,useTheme,Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import {grey} from '@mui/material/colors';
import publishImg from "../../Assets/publish.jpg";

import * as React from "react";
const Banner = () => {
    const theme = useTheme();
    // A styles object or a function returning a styles object. 
    //The function receives the theme and component's properties in an object which is its single argument.
    
    const BannerContainer = styled(Box)(() => ({
       display: "flex",
       justifyContent: "center",
       
       height: "100%",
   
       padding: "10px 10px",
       margin:"10px 40px",
       backgroundColor :grey[200],
       
       [theme.breakpoints.down("lg")]: {
         flexDirection: "column",
         alignItems: "justify",
         margin:"10px 20px",
       },
     }));
    
   
     const BannerTitle = styled(Typography)(() => ({
       lineHeight: 1.5,
       fontSize: "32px",
       marginBottom: "20px",
       fontWeight: 'bold',
       textAlign :"center"
       
     }));
   
     
   
    const BannerContent = styled(Box)(() => ({
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       
       padding: "10px",
       [theme.breakpoints.up("lg")]: {
          margin:"10px 10px",
          width:"50%",//600px,700px
          height:"100%",
         
       },
       [theme.breakpoints.down("lg")]: {
         padding:"0px",
         margin:"10px 15px",
         height:"100%",
         
         
       }
     }));
   
     const BannerImage = styled("img")(({src,theme}) => ({
       src: `url(${src})`,
       objectFit: 'cover', 
       
       [theme.breakpoints.up("lg")]: {
         width: '50vw',
         height: '70vh',
       
       },
       [theme.breakpoints.down("lg")]: {
         
         height: '50vh',
        
       }
      
       
       
     }));
    return ( 
        <BannerContainer>
        

      <BannerImage src={publishImg}/>
      <BannerContent>

      <BannerTitle>
      Welcome to our publishing page where anyone can easily publish their own book
      </BannerTitle>
      <Typography textAlign={"center"}  sx={{fontSize:{xl:"18px"},padding:{xl:"10px 40px",lg:"10px 30px"}}} >
      <p>Whether you have a story to tell or want to showcase your
      artistic skills, our website has got you covered. With our easy-to-use platform, you can easily create and publish your book, making it available to a wide audience.
      </p>
      <p>One of our most exciting features is our augmented reality technology that allows you to bring your book to life. With this innovative technology, your readers can immerse themselves in your story as they read.
      To publish your book, simply fill out a simple form on our website. We will analyze your content and add it to our platform, making it accessible to everyone.
      </p>
      <p>Thank you for choosing to collaberate with us and bring your creative vision to life.</p>

      </Typography>

      </BannerContent>

      </BannerContainer>
     );
}
 
export default Banner;