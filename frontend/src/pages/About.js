import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box,Typography,useTheme} from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Container from '@mui/material/Container';


const Absolute = () => {
  const theme = useTheme(); 
  
  const TextContainer =styled(Box)(()=>({ 
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor : grey[400], 
    maxWidth: '100%',
    borderRadius:"10px",
    
   
    height: '100%', 
   [theme.breakpoints.up('lg')]: {
        margin:"10px 150px 100px 150px", //top,right,bottom , left
        padding:"50px 100px",
      }, 
      [theme.breakpoints.down('lg')]: {
        margin:"10px 50px 50px 50px",  
        padding:"30px 50px",
        
      }, 
      [theme.breakpoints.down('md')]: {
        margin:"10px 30px 50px 30px",  
        padding:"30px 30px",
      }, 
      [theme.breakpoints.down('sm')]: {
        margin:"10px 10px 50px 10px",  
        padding:"10px 10px",
      }, 
    
  }));

  const Title =styled(Typography)(()=>({ 
    fontWeight:'bold',
    margin:"10px 10px",

    [theme.breakpoints.up('lg')]: {
      fontSize:"2.0rem",

    },
    [theme.breakpoints.down('lg')]: {
      fontSize:"1.5rem",

    },

    
  }));

  const TextComponent =styled(Typography)(()=>({ 
    textAlign:"center",
    
    [theme.breakpoints.up('lg')]: {
      fontSize:"1.2rem",
    lineHeight: '1.8',

    },
    [theme.breakpoints.down('lg')]: {
      fontSize:"1.0rem",
    lineHeight: '1.5',

    },
    [theme.breakpoints.down('sm')]: {
      fontSize:"1.0rem",
    lineHeight: '1.5',

    },

    

    
  }));
  


    return (
        <Box>
          <TextContainer>
         <Title>About us</Title> 
         <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 6 }}>
          <TextComponent>Our platform, Pixie, is an e-reading and e-learning platform designed specifically for kids.
          With the ability to learn using augmented reality content,Pixie offers a unique experience that no platform provides.
          Our vision and purpose behind the project is to introduce a new kind of experience to kids and parents alike.
          We aim to make reading books more interesting and engaging for children, allowing them to spend more time reading and learning in a fun and interactive way.
          </TextComponent>
          
          </Container>

          <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 2 }}>
          <TextComponent>At Pixie, we understand the importance of reading in a child's life and its impact on their future. 
          Through our platform, we strive to cultivate a love forreading in children, which will not only enhance their academic performance 
          but also enrich their lives. Our goal is to provide a safe and supportive space for kids to learn and grow, where they can explore their curiosity and creativity. 
          We believe that by making learning fun and engaging, we can empower children to reach their full potential and become lifelong learners.
          </TextComponent>
          </Container>
          
          </TextContainer>

          <TextContainer>
          
          <Title>Contact Us</Title> 
          <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 6 }}>
          <TextComponent>We are always here to assist you with any technical issues that you might face while using our product, Pixie.
          We understand that it can be frustrating to encounter any issues,but rest assured that we will be there to help you every step of the way.
           In addition, if you have any questions about publishing your book or any other inquiries, please do not hesitate to contact us.
          Our team is dedicated to providing you with the best possible experience and we look forward to hearing from you soon.
          </TextComponent>
          </Container>
          
          <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 2, pb: 6 }}>
          <TextComponent>Furthermore, we encourage you to reach out to us for any inquiries beyond technical support. 
          Whether you're looking for guidance on publishing your book or if you have any questions about the diverse capabilities of Pixie, please don't hesitate to contact us. We're passionate
           about helping you make the most of our platform, ensuring your creative journey is both enjoyable and successful.
          At Pixie, we believe in fostering strong relationships with our users, and we genuinely look forward to hearing from you. 
          Your feedback and questions drive us to continually improve our services and provide you with the best possible experience. Thank you for being a part of the Pixie community, and we're excited to
          assist you on your creative endeavors in the future.</TextComponent>
          
         </Container>

          <Typography fontWeight={'bold'} fontSize={"1.2rem"} color={blue[900]} > Mail us: PIXIE@info.com</Typography>
          </TextContainer>
          
        </Box>
        
      );
}
 
export default Absolute;

