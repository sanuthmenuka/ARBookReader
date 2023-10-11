import { useRef} from "react";
import { useSignup } from "../hooks/useSignup"
import { ThemeProvider } from "@emotion/react";
import { Typography,Box, Grid, createTheme} from "@mui/material";
import { styled } from "@mui/material/styles";
import signin from "../Assets/signIn.avif";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import { grey, purple } from "@mui/material/colors";


const Signup = () => {   
    const theme = createTheme({
      palette: {
        background: {
          //default: pink[900], // Change this color to your desired background color
        },
      },
    });
    const LoginContainer = styled(Box)(() => ({
      display: "flex",
      justifyContent: "center",
      border: '1px solid #ccc',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)', 
      
      height: "100%",
  
    
      margin:"0px 150px 50px 150px", //top right bottom left
      //backgroundColor :grey[900],
      
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        alignItems: "justify",
        margin:"10px 20px",
      },
    }));
  
    const SigninImage = styled("img")(({src,theme}) => ({
      src: `url(${src})`,
      objectFit: 'cover', 
      maxWidth:"100%",
      
      [theme.breakpoints.up("lg")]: {
        width:"95vw",
        height: '70vh',
      
      },
      [theme.breakpoints.down("lg")]: {
        width:"95vw",
        height: '50vh',
       
      }
    
    }));
   
    const {signup, error, isLoading} = useSignup();
  
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    
    //Handle submission of the lsign up form 
    const handleSubmit = async (e) => {
      const firstName = firstNameRef.current;
      const lastName = lastNameRef.current;
      const email = emailRef.current;
      const password = passwordRef.current;
      const confirmPassword = confirmPasswordRef.current;
      
      e.preventDefault()
      console.log(email,password);
      await signup(firstName,lastName,email, password,confirmPassword)
    }
  
    return (
      <ThemeProvider theme={theme}>
      <LoginContainer>
        <Grid container >
          <Grid item xs={12} md={6} container alignContent={"center"}>
            <SigninImage src={signin}/>
          </Grid>

          <Grid item xs={12} md={6} padding={"10px 20px"} backgroundColor ={purple[100]}>
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Typography component="h1" variant="title"  marginBottom={2}   >
              Sign Up
            </Typography>
            <Typography component="h1" variant="subtitle1" fontWeight="bold" marginBottom={2} color={grey[700]}>
              Begin your journey with us today
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <TextField 
                onChange={(e)=>{firstNameRef.current=e.target.value}}
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField 
                onChange={(e)=>{lastNameRef.current=e.target.value}}
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              <TextField 
                onChange={(e)=>{emailRef.current=e.target.value}}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(e)=>{passwordRef.current=e.target.value}}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
               
              />
              <TextField
                onChange={(e)=>{confirmPasswordRef.current=e.target.value}}
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="password"
                
              />

              <Grid container display={"flex"} alignItems={"baseline"}>
                <Grid item >
                  <FormControlLabel 
                  control={<Checkbox value="remember" color="primary" required />}
                  label="I accept the terms & conditions"
                  />
                </Grid>
                
              </Grid>
              
              <Button
                type="submit"
                fullWidth
               
                variant="contained"
                sx={{ mt: 3, mb: 2, height:50}}
                disabled={isLoading}
              >
                Register
              </Button>
              {error && <div className="error">{error}</div>}
              
              
            </Box>
          </Box>
         
        </Container>
           
          </Grid>

         
        </Grid>
      
     
      </LoginContainer>
      </ThemeProvider>
    )
  }
  
 

export default Signup