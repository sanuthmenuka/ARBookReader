import * as React from "react";
import {useParams } from 'react-router-dom';
import { useEffect,useRef } from 'react';
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

    const effectRan = useRef(false);

    useEffect(() => {
    if (!effectRan.current) {
        console.log("effect applied - only on the FIRST mount");
    }
    console.log("pp")

    return () => effectRan.current = true;
    }, []);

    const paypal = useRef();
    useEffect(() => {
       console.log("renderedhhh")
           window. paypal.Buttons({
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
                  alert(data.subscriptionID); // You can add optional success message for the subscriber here
                }
            }).render(paypal.current); // Renders the PayPal button
       
        
    }, []);
    

    return ( 
        <div>
        
        <div ref={paypal}></div>
                   
       
            </div>
  
    );
}
 

export default Payment;