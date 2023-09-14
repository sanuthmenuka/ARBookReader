import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';
import { blue, blueGrey} from '@mui/material/colors';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useNavigate} from 'react-router-dom';



const tiers = [
  {
    title: 'Basic',
    price: '2100',
    description: [
        'Limited e-book access',
        'Basic text-to-speech ',
        'Basic dictionary',
        'Highlight and comment',
        'Limited AR content',
        'Save and view definitions',
        'Limited offline access',
        'Basic customer support'

    ],
    buttonText: 'Buy Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    subheader: 'Most popular',
    price: '9300',
    description: [
        'Full e-book library',
        'Advanced text-to-speech',
        'Premium annotations',
        'Exclusive AR content',
        'Premium dictionary',
        'First access to updates',
        'Extensive offline access',
        '24/7 premium support',
        'Advanced analytics',
    ],
    buttonText: 'Buy Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Standard',
    price: '4500',
    description: [
        'Broader e-book access',
        'Enhanced text-to-speec',
        'Full annotation features',
        'More AR content',
        'Comprehensive dictionary',
        'Unlimited word definitions',
        'Extended offline access',
        'Priority support',
        
    ],
    buttonText: 'Buy Now',
    buttonVariant: 'outlined',
  },
];
const Pricing = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    
    return ( 
        <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
      
       
        <Box 
        sx={{
            margin:{xs:"10px 10px", md:"10px 50px",lg:"10px 100px", xl:"10px 150px"},
            paddingBottom:"50px",
            backgroundColor:blueGrey[700],
        }}>
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant={{xs:"h4",md:"h3"}}
            align="center"
            color="white"
            fontWeight="bold"
            gutterBottom
          >
            Best Plan for you !
          </Typography>
          <Typography variant="h6" align="center"  component="p" color="white" >
          Indulge in a world of unlimited ebooks and audio adventures for less than you'd imagine! Our subscription plans offer you the keys to a library that never closes,
          where stories come to life and knowledge knows no bounds. 
          </Typography>
        </Container>
       
       
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems={"center"} display={"flex"} flexDirection={{xs:'column', md:"row"}}>
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Standard' ? 12: 12}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ 
                        align: 'center' ,
                        color:"white",
                        variant:"h4"
                    }}
                    action={tier.title === 'Premium' ? <StarIcon sx={{color: 'white' }}  /> : null}
                    subheaderTypographyProps={{
                      align: 'center',
                      color:"white"
                    }}
                    sx={{
                      backgroundColor:blueGrey[900]
                    }}
                  />
                  <CardContent >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                       
                      }}
                    >
                    <Typography component="h2" variant="h5" color={blue[900]} paddingRight={"5px"}>
                        LKR
                      </Typography>
                      <Typography component="h2" variant="h3" color={blue[900]}>
                        {tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="inherit"
                          paddingBottom="10px"
                          key={line}
                        >
                         <CheckCircleOutlineOutlinedIcon sx={{color: blue[600] }}/> {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} onClick={()=>{navigate(`/payment/${tier.title}`)}}>
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
       
      </ThemeProvider>
    );
}
 
export default Pricing;

