import * as React from "react";
import {useParams } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Box, Button, Grid,Typography,useTheme} from "@mui/material";
import { grey } from "@mui/material/colors";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Visa from "../Assets/visa.jpg"
import Master from "../Assets/master.jpg"
import Discover from "../Assets/discover.png"
import AmericanExpress from "../Assets/AmericanExpress.jpg"
import Container from '@mui/material/Container';

const Payment = () => {
    const theme = useTheme();
    let price= null;
    let subtotal=null;
    let tax=0;
    let discount = 0;
    const tiers = [
        {
          title: 'Basic',
          price: '2100',
        },
        {
          title: 'Premium',
          subheader: 'Most popular',
          price: '9300',
        },
        {
          title: 'Standard',
          price: '4500',
        },
      ];
   
    const OuterGrid = styled(Grid)(() => ({
     
        display:"flex",
        [theme.breakpoints.up('xl')]: {
            flexDirection:"row",
            margin:"100px 150px",
           },
        
        [theme.breakpoints.down('lg')]: {
            flexDirection:"row",
            margin:"100px 20px",
           },
        
        [theme.breakpoints.down('md')]: {
         flexDirection:"row",
         margin:"30px 60px",
        },
        [theme.breakpoints.down('md')]: {
            margin:"10px 5px",
         flexDirection:"column",
       
        },
       
      }));

      const OuterBox = styled(Box)(() => ({
     
        display:"flex",
        flexDirection:"column",
        
        margin:"10px 10px" ,
        border: '1px solid #ccc',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
       
        padding:"20px 20px"
        
        
       
      }));

      
    const PaymentOptionsImage = styled("img")(({src,theme}) => ({
        src: `url(${src})`,
        objectFit: 'cover', 
        
        [theme.breakpoints.up('lg')]: {
            maxWidth :'100%',
            height:"80%"
       
        },

        [theme.breakpoints.down('lg')]: {
            maxWidth :'100%',
            height:"80%"
       
        },
        [theme.breakpoints.down('md')]: {
            maxWidth :'100%',
            height:"80px"
       
        },
        
     }));

      let { id } = useParams();

    return ( 
    
        <OuterGrid>
            <Grid item xs={12} md={6} >
                <OuterBox  backgroundColor={grey[900]} sx={{width:{xs:"90vw" ,md:"35vw"}}} >
                
                    <Typography variant="h4" fontWeight="bold"  padding="10px 10px" color={"white"}>Subscribe to {id} plan</Typography>
                    <Box display="flex" alignItems='baseline'>
                    {tiers.map((tier) => {
                             if(tier.title === id){
                                price= tier.price;
                                subtotal=price;
                               return(
                                <Typography variant="h3" fontWeight="bold"  padding="10px 5px " color={"white"}>LKR {tier.price}</Typography>
                                
                               ) 
                            }
                            
                    })}
                    <Typography variant="h5" padding="30px 0px" color={"white"}>/ month</Typography>
                    </Box>

                    <Grid container padding="20px 10px" >
                        <Grid item sx={12} md={8} >
                        <Typography variant="h6"  color={grey[300]}> {id} plan</Typography>
                        </Grid>
                        <Grid item md={4} container justifyContent="flex-end">
                        <Typography variant="h6"  color={grey[300]}> {price}.00</Typography>
                        </Grid>
                    </Grid>

                    <Grid container padding="10px 10px"  borderBottom={'1px solid grey'}  >
                        <Grid item md={8}>
                        <Typography variant="h6"  color={grey[400]}> subtotal</Typography>
                        </Grid>
                        <Grid item md={4} container justifyContent="flex-end">
                        <Typography variant="h6"  color={grey[400]}> {subtotal}.00</Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid container padding="10px 10px" >
                        <Grid item md={8}>
                        <Typography variant="h6"  color={grey[400]}> discount</Typography>
                        </Grid>
                        <Grid item md={4} container justifyContent="flex-end">
                        <Typography variant="h6"  color={grey[400]}> {discount}.00</Typography>
                        </Grid>
                    </Grid>

                    <Grid container padding="10px 10px" borderBottom={'1px solid grey'}>
                        <Grid item md={8}>
                        <Typography variant="h6"  color={grey[400]}> tax</Typography>
                        </Grid>
                        <Grid item md={4} container justifyContent="flex-end">
                        <Typography variant="h6"  color={grey[400]}> {tax}.00</Typography>
                        </Grid>
                    </Grid>

                    <Grid container padding="10px 10px" marginBottom={"30px"}>
                        <Grid item md={8}>
                        <Typography variant="h6"  color={grey[400]}> Total due today</Typography>
                        </Grid>
                        <Grid item md={4} container justifyContent="flex-end">
                        <Typography variant="h6"  color={grey[400]}> {tax}.00</Typography>
                        </Grid>
                    </Grid>
                    
                    {/* payment options -- visa,master etc.*/}
                    <Typography variant="h6"  color={grey[300]} padding={"20px 5px"}>We accept</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={3}>
                        <PaymentOptionsImage src={Visa}></PaymentOptionsImage> 
                        </Grid>
                        <Grid item md={3}>
                        <PaymentOptionsImage src={Master}></PaymentOptionsImage> 
                        </Grid>
                        <Grid item md={3}>
                        <PaymentOptionsImage src={Discover}></PaymentOptionsImage> 
                        </Grid>
                        <Grid item md={3}>
                        <PaymentOptionsImage src={AmericanExpress}></PaymentOptionsImage> 
                        </Grid>
                    </Grid>
                     
                    
                </OuterBox>  
                        
            </Grid>
            <Grid item xs={12} md={6}>
            <OuterBox backgroundColor="white">
                <Typography variant="h5" fontWeight={"bold"} gutterBottom>
                    Payment method
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} >
                    <TextField
                        required
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} >
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent={"center"} padding={"40px 10px 10px 10px"}>
                    <Button variant="contained" size="large">Subscribe</Button>
                </Box>
                <Container disableGutters maxWidth="md" component="main" sx={{ pt: 2, pb: 10 }}>
          
                <Typography variant="subtitle2" align="center"  component="p" color={grey[500]} >
                By confirming your subscription, you allow Pixie to charge your card to this payment and future payments in accordance with their terms.
                You can always cancel your subscription.
                </Typography>
                </Container>
                
                </OuterBox>
                </Grid>
            </OuterGrid>
  
    );
}
 
export default Payment;