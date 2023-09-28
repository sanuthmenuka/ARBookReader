import { useEffect, useRef, useState} from "react";
import useEditProfile from "../hooks/useEditProfile";
import { ThemeProvider } from "@emotion/react";
import { Typography,Box, Grid, createTheme, InputLabel, Avatar} from "@mui/material";
import { styled } from "@mui/material/styles";
import editphoto from "../Assets/editphoto.jpg";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLocation } from "react-router-dom";
import { purple } from "@mui/material/colors";


const EditProfile = () => {   
    const theme = createTheme({
      palette: {
        background: {
          //default: pink[900], // Change this color to your desired background color
        },
      },
    });
    const ProfilePic= styled(Avatar)(() => ({
    
      [theme.breakpoints.up('lg')]: {
        width: "200px", 
        height: "200px",
       },
       [theme.breakpoints.down('lg')]: {
        
        width: "150px", 
        height: "150px",
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


    const location = useLocation();
    const { users} = location.state;
    console.log("user details", users.firstName);
   
    const {editProfile,error,isLoading } = useEditProfile();
    const [firstName,setFirstName] = useState(users.firstName);;
    const [lastName,setLastName] = useState(users.lastName);
    const [ProfilePicture,setProfilePicture] = useState(null);
    
    
    //Handle submission of the lsign up form 
    const handleSubmit = async (event) => { 
    //setProfilePicture(e.target.profilePicture.files[0])
      console.log(firstName,lastName,ProfilePicture);
      event.preventDefault();
      
      const formData = new FormData();
      
      formData.append("firstName", event.target.firstName.value);
      formData.append("lastName",event.target.lastName.value);
      formData.append("ProfilePicture", event.target.profilePicture.files[0]);
      
      editProfile(formData);
    }
  
    return (
      <ThemeProvider theme={theme}>
       
       
      <Box
      sx={{
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
      }}>
      
        <Grid container >
          <Grid item xs={12} md={6} container alignContent={"center"} p>
            <SigninImage adding={'10px 10px'} src={editphoto}/>
          </Grid>

          <Grid item xs={12} md={6} padding={"10px 0px"} backgroundColor ={purple[100]} >
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              marginLeft:4,
              marginRight:4,
             
              
            }}
          >
            <Box container  display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            <Typography   component="h2" variant="title"  marginBottom={2}   >
              Edit Your Profile
              </Typography>
            </Box>
             

            <Box container display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} >
           
              {ProfilePicture && (
            <ProfilePic
              src={URL.createObjectURL(ProfilePicture)}
              
            />
          
            )}
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
              
            
            <Grid >
            
            <Grid item
             sx={{
                marginBottom: 2,
                
              }}>
            <InputLabel >
               First Name
            </InputLabel>

            <TextField 
                onChange={(e)=>{setFirstName(e.target.value)}}
                fullWidth
                id="firstName"
                label=""
                name="firstName"
                autoComplete="firstName"
                value={firstName}
                
              />
              </Grid>

               <Grid item 
                sx={{
                    mb: 2,
                    
                  }} >
                <InputLabel>
                Last Name
                </InputLabel>
              <TextField 
                onChange={(e)=>{setLastName(e.target.value)}}
                fullWidth
                id="lastName"
                label=""
                name="lastName"
                autoComplete="lastName"
                value={lastName}
                
              />

              </Grid>

              
              
             
             <Grid item 
              sx={{
                marginBottom: 2,
                
              }}>
                  <InputLabel marginBottom={"10px"}>
                   Profile Picture {"("}.jpeg .png .jpg{")"}
                  </InputLabel>
                  <TextField
                    label=""
                    type="file"
                    inputProps={{ accept: "image/*" }} // this input field only accepts image files
                    fullWidth
                    name="profilePicture"
                   onChange={(e)=>setProfilePicture(e.target.files[0])}
                  />
                </Grid>

             
            <Box >
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, height:50, width:100}}
               // disabled={isLoading}
              >
                Save
              </Button>
              {error && <div className="error">{error}</div>}
              </Box>
              </Grid>
            </Box>
          </Box>
         
       
           
          </Grid>

         
        </Grid>
      
     
      </Box>
      </ThemeProvider>
    )
  }
  
 

export default EditProfile