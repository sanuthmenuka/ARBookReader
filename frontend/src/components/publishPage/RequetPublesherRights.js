
import * as React from "react";

import {
  Typography,
  useTheme,
  FormControlLabel,
  RadioGroup,
  Button,
  Box,
  Grid,
  TextField,
  InputLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import useGetPublisherRights from "../../hooks/useGetPublisherRights";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const RequestPublisherRights = () => {
    const theme = useTheme();

    const FormContainer = styled(Box)(() => ({
      justifyContent: "flex-start",
      height: "100%",
      border: "1px solid #ccc",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  
      padding: "10px 10px",
      margin: "50px 40px",
      backgroundColor: grey[50],
  
      [theme.breakpoints.down("lg")]: {
        alignItems: "justify",
        margin: "30px 20px", //(top,bottom) (left,right)
      },
    }));
  
    const PublishForm = styled(Box)(() => ({
      display: "flex",
      
      height: "100%",
      
  
      padding: "10px 10px ",
      margin: "20px 20px",
      backgroundColor: grey[50],
  
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        alignItems: "justify",
        margin: "5px 0px",
        padding: "10px 0px ",
      },
    }));
  
    const FormTitle = styled(Typography)(() => ({
      margin: "10px 10px 0px 0px",
      fontWeight: "bold",
      color: pink[900],
      fontSize: "2.0rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.0rem",
        margin: "10px 30px 0px 30px",
      },
      [theme.breakpoints.down("lg")]: {
        margin: "10px 15px 0px 5px", //top right bottom left
      },
    }));
  
    const FormsubTitle = styled(Typography)(() => ({
      margin: "0px 10px 0px 0px",
      color: pink[800],
      fontSize: "1.3rem",
  
      [theme.breakpoints.up("lg")]: {
        margin: "0px 30px 0px 30px",
      },
      [theme.breakpoints.down("lg")]: {
        margin: "0px 15px 0px 5px", //top right bottom left
      },
    }));
  
    const TermsConditionsBox = styled(Box)(() => ({
      margin: "0px 10px 0px 0px",
  
      [theme.breakpoints.up("md")]: {
        margin: "10px 30px 0px 30px",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0px 15px 0px 5px", //top right bottom left
      },
    }));
  
    const PublishBtn = styled(Button)(() => ({
      width: "400px",
      height: "100px",
  
      backgroundColor: pink[900],
  
      fontSize: "1.2rem",
      "&:hover": {
        backgroundColor: pink[600],
      },
  
      [theme.breakpoints.up("sm")]: {
        margin: "10px 30px 0px 30px",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0px 15px 0px 5px", //top right bottom left
        width: "300px",
        height: "60px",
      },
    }));

    const FormImage = styled(Box)(() => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
  
      margin: "10px 10px 10px 10px",
  
      [theme.breakpoints.up("lg")]: {
        width: "50vw",
        height: "700px",
        objectFit: "cover",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "0px",
        margin: "10px 5px",
      },
    }));

    const { publisherRights, isLoading, error } = useGetPublisherRights();
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        
        //add inputs of publish book from to a FormData
        formData.append("bio", event.target.bio.value);
        formData.append("haspublishedbefore", event.target.haspublished.value);
        formData.append("prevouspublications", event.target.prevouspublications.value);
        
        console.log("pb")
        //send publish form data to server side
        publisherRights(formData)
        .then((res) => {
          console.log("Added book to your library",res) ;
          //pop up msg to indicate the successful adding to personal library
          Swal.fire({
            text: 'Your request has been submitted successfully.', 
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        })
        .catch((error) => {
          console.error(error);
          //pop up msg to indicate that an error occured adding to personal library
          Swal.fire({
            icon: 'error',
            title: 'An error occurred while adding the book.',
            showConfirmButton: false,
            timer: 2000,
          });
          
        });
      };
  
    return (  
        <form onSubmit={handleFormSubmit}> 
        <FormContainer>
          <FormTitle>Get Publisher Rights</FormTitle>
          <FormsubTitle> Get publisher rights and unlock the opportunity to showcase your unique content to our global audience </FormsubTitle>
          <PublishForm >
            <FormImage>
              <Grid 
                container
                spacing={2}
                display={"flex"}
                flexDirection={"column"}
                
              >
                {/* Input Field for title of the book*/}
                <Grid item>
                  <InputLabel> Bio (Give us a brief biography about yourself, highlighting your background, experience, and expertise)</InputLabel>
                  <TextField
                    label=""
                    name="bio"
                    variant="outlined"
                    multiline // Enable multi-line mode
                    rows={9} // Number of rows
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item>
                  <InputLabel id="ARcontent">
                    Have you done any previous publications ?
                  </InputLabel>
                  <RadioGroup
                    row // radio btns as a row
                    name="haspublished"
                    defaultValue="No"
                    required
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </Grid>

                <Grid item>
                  <InputLabel> Previous Publications (Use this field to describe your previous publications, including links, titles, and key achievements. If you do not have any publications you can leave this field empty.)</InputLabel>
                  <TextField
                    label=""
                    name="prevouspublications"
                    variant="outlined"
                    multiline // Enable multi-line mode
                    rows={9} // Number of rows
                    fullWidth
                  />
                </Grid>
              </Grid>
              </FormImage>
           

          </PublishForm>

          <TermsConditionsBox>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I accept the Terms & Conditions"
            />
          </TermsConditionsBox>

          <Box display={"flex"} justifyContent={"center"} marginBottom={"30px"}>
            <PublishBtn variant="contained" type="submit">
              {" "}
              Submit Request
            </PublishBtn>
          </Box>
        </FormContainer>
      </form>
    );
}
 
export default RequestPublisherRights;