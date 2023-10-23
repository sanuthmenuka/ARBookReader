import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';
import {blueGrey, grey} from '@mui/material/colors';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useEffect,useRef ,useState} from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import activateSubscription from '../functions/activateSubscription';

const Pricing = () => {
    const theme = useTheme();
    const paypal = useRef();
    const effectRan = useRef(false);


      useEffect(() => {
        if (!effectRan.current) {
          console.log("effect applied - only on the FIRST mount");
          window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'subscribe'
            },
            createSubscription: function(data, actions) {
              return actions.subscription.create({
                /* Creates the subscription */
               plan_id: 'P-5SV52278617384700MUUNMGI'
              });
            },
            onApprove: function(data, actions) {
              activateSubscription(data.subscriptionID)
              Swal.fire({
                  icon: 'success',
                  iconColor: '#716add',
                  color: '#716add',
                  title: 'Subscription Confirmed',
                  showConfirmButton: false,
                  timer: 2000, // Automatically close after 2 seconds
                }); 
              
             

            },
            onCancel : function(data){
              console.log("Canceled");
            }
           
        }).render(paypal.current); // Renders the PayPal button
        }

        return () => effectRan.current = true;
      }, []);
    
    return ( 
        <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
      
       
        <Box 
        sx={{
            margin:{xs:"10px 10px", md:"10px 50px",lg:"10px 50px", xl:"10px 100px"},
            paddingBottom:"50px",
            backgroundColor:blueGrey[700],
        }}>
        <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="white"
            fontWeight="bold"
            gutterBottom
          >
            Discover the Ultimate Reading Experience!
          </Typography>
          <Typography variant="h6" align="center"  component="p" color="white" >
          Dive into an enchanting world of limitless eBooks and captivating audio adventures, all within your grasp for an incredibly affordable price.
          Our exclusive subscription plan opens the doors to a library that's always open, where stories spring to life, and the quest for knowledge knows no limits.
          </Typography>
        </Container>
       
       
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems={"center"} display={"flex"} flexDirection={{xs:'column', md:"row"}}>
            
              
              <Grid
                item
                xs={12}
                md={12}
              >
                <Card>
                  <CardHeader
                    title="$15/mo"
                   
                    titleTypographyProps={{ 
                        align: 'center' ,
                        color:"white",
                        variant:"h3"
                    }}
                    
                    sx={{
                      backgroundColor:blueGrey[900]
                    }}
                  />
                  <CardContent >
                   
                    <Box>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon /> Dive into a vast library of e-books, with access to an extensive collection of genres and titles
                      </Typography>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon />  Enjoy your favorite books on the go with improved text-to-speech functionality, making every word come to life
                      </Typography>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon />  Personalize your reading experience with full annotation capabilities, allowing you to highlight, take notes, and mark your favorite passages
                      </Typography>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon />  Immerse yourself in augmented reality content, bringing stories to life like never before
                      </Typography>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon />   Elevate your vocabulary and understanding with access to a comprehensive dictionary at your fingertips
                      </Typography>
                      <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                      <CheckCircleOutlineOutlinedIcon />  Take your books with you wherever you go, even when youre offline. No more interruptions to your reading journey
                      </Typography>
                       <Typography sx={{ pb: 1 }} fontWeight="bold" fontSize={"1.2rem"} color={grey[700]}>
                       <CheckCircleOutlineOutlinedIcon /> Experience top-notch support from our dedicated team, ensuring your reading experience is smooth and enjoyable
                      </Typography>
                    </Box>
                   
                  </CardContent>
                 
                   <Box marginLeft={"50px"}>
                    <div ref={paypal}></div>
                    </Box> 
                  
                </Card>
              </Grid>
            
          </Grid>
        </Container>
        </Box>
       
      </ThemeProvider>
    );
}
 
export default Pricing;
