import { Container, FormControl, Typography,useTheme,FormLabel,FormControlLabel,RadioGroup, Button, ButtonGroup } from "@mui/material";
import Box from '@mui/material/Box';
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import {grey,pink } from '@mui/material/colors';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";



const Publish = () => {
  const theme = useTheme();
 // A styles object or a function returning a styles object. 
 //The function receives the theme and component's properties in an object which is its single argument.
 const OuterContainer = styled(Box)(() => ({
  marginBottom:"150px",
}));
  
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
      margin:"10px 10px",
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
       width:"600px",
       heigh:"700px",
       objectFit: 'cover', 
    },
    [theme.breakpoints.down("lg")]: {
      padding:"0px",
      margin:"10px 15px",
      
      
    }
  }));

  const BannerImage = styled("img")(({src,theme}) => ({
    src: `url(${src})`,
    
    [theme.breakpoints.up("lg")]: {
      width: '50vw',
      height: '550px',
    objectFit: 'cover', 
    },
    [theme.breakpoints.down("lg")]: {
      
      height: '100%',
      objectFit: 'cover', 
    }
   
    
    
  }));

  const FormContainer = styled(Box)(() => ({
    justifyContent: "flex-start",
    height: "100%",
    border: '1px solid #ccc',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 

    padding: "10px 10px",
    margin:"50px 40px",
    backgroundColor :grey[50],
    
    [theme.breakpoints.down("md")]: {
      alignItems: "justify",
      margin:"30px 10px", //(top,bottom) (left,right)
      
    },
  }));

  const PublishForm = styled(Box)(() => ({
    display:"flex",
    justifyContent: "center",
    height: "100%",

    padding: "10px 10px ",
    margin:"20px 10px",
    backgroundColor :grey[50],
    
    [theme.breakpoints.down("md")]: {
      flexDirection:"column",
      alignItems: "justify",
      margin:"5px 0px",
      padding: "10px 0px ",
    },
  }));

  const FormTitle = styled(Typography)(() => ({
    margin:'10px 10px 0px 0px',
    fontWeight: 'bold',
    color: pink[900],
    fontSize: '2.0rem',
    '@media (min-width:600px)': {
      fontSize:'2.5rem',
      
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.0rem',
      margin:'10px 30px 0px 30px',
      
    },
    [theme.breakpoints.down('md')]: {
      margin:'10px 15px 0px 5px', //top right bottom left
      
    },
  }));

  const FormsubTitle = styled(Typography)(() => ({
    
    margin:'0px 10px 0px 0px',
    
    fontSize: '1.2rem',
    
    [theme.breakpoints.up('md')]: {
      
      margin:'0px 30px 0px 30px',
      
    },
    [theme.breakpoints.down('md')]: {
      margin:'0px 15px 0px 5px', //top right bottom left
      
    },
  }));

  const TermsConditionsBox = styled(Box)(() => ({
    
    margin:'0px 10px 0px 0px',
       
    [theme.breakpoints.up('md')]: {
      
      margin:'10px 30px 0px 30px',
      
    },
    [theme.breakpoints.down('md')]: {
      margin:'0px 15px 0px 5px', //top right bottom left
      
    },
  }));

  const PublishBtn = styled(Button)(() => ({
    
    width:"400px",
    height:"100px",
    
    backgroundColor:pink[900],
    
    fontSize: '1.2rem',
    '&:hover':{
      backgroundColor:pink[600],
    },
    
    [theme.breakpoints.up('md')]: {
      
      margin:'10px 30px 0px 30px',
      
    },
    [theme.breakpoints.down('md')]: {
      margin:'0px 15px 0px 5px', //top right bottom left
      
    },
  }));

  
 const FormImage = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
 
  margin:"10px 10px 10px 10px",
 
  [theme.breakpoints.up("md")]:{
     
     width:"50%",
     heigh:"700px",
     objectFit: 'cover', 
  },
  [theme.breakpoints.down("md")]: {
    padding:"0px",
    margin:"10px 5px",
    
    
    
  }
}));
  


  

    return (
      <OuterContainer>

      
        <BannerContainer>

      <BannerImage src="https://img.freepik.com/free-vector/online-library-isometric-composition-with-conceptual-images-opened-book-computer-windows-small-people-characters_1284-32385.jpg?w=826&t=st=1692519818~exp=1692520418~hmac=9fca7915d377064dcb75d99118b0ad78e6f4cf5c4f296e693726e618c5780016" />
      <BannerContent>

      <BannerTitle>
      Welcome to our publishing page where anyone can easily publish their own book
      </BannerTitle>
      <Typography textAlign={"center"} fontStyle={"italic"} >
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
       
        <FormContainer>
        <FormTitle >
            Publish Your Book
          
        </FormTitle>
        <FormsubTitle  > Begin your journey as a content creator </FormsubTitle>
        <PublishForm  >
        <FormImage>

        <Grid container spacing={2} display={"flex"} flexDirection={"column"}>
          <Grid item >
          <InputLabel >Book Title</InputLabel>
            <TextField
            abel=""
            variant="outlined"
            fullWidth/>
            
            
          </Grid>
          
          <Grid item >
          <InputLabel >Author</InputLabel>  
            <TextField
            label=""
            variant="outlined"
            fullWidth/>
          </Grid>
          
          <Grid item >
          <InputLabel  >Email</InputLabel>
            <TextField
            label=""
            variant="outlined"
            fullWidth/>
          </Grid>

          <Grid item>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
            fullWidth
            
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Sinhala</MenuItem>
            <MenuItem value={30}>Tamil</MenuItem>
          </Select>
          </Grid>

          <Grid item>
          <InputLabel  id="demo-radio-buttons-group-label">Age Category</InputLabel>
          <RadioGroup   
            row // radio btns as a row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="PG 5+"
          
            
          >
            <FormControlLabel value="PG 5+" control={<Radio />} label="PG 5+" />
            <FormControlLabel value="PG 7+" control={<Radio />} label="PG 7+" />
            <FormControlLabel value="PG 10+" control={<Radio />} label="PG 10+" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            
          </RadioGroup>
          </Grid>

          <Grid item >
          <InputLabel  >Price (Rs.)</InputLabel>
            <TextField
            label=""
            variant="outlined"
            fullWidth/>
          </Grid>

          <Grid item >
          <InputLabel  id="demo-radio-buttons-group-label">Augmented Reality Content</InputLabel>
          <RadioGroup   
            row // radio btns as a row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="No"
          
            
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            
          </RadioGroup>
          </Grid>


          
          
           
        </Grid> 

        </FormImage>

       <FormImage>
       <Grid container spacing={2} display={"flex"} flexDirection={"column"}>
          <Grid item >
            <InputLabel  marginBottom={'10px'}>Cover Image</InputLabel>
            <TextField
              label=""
            type="file"
            fullWidth
            />
          </Grid>

          <Grid item >
            <InputLabel  marginBottom={'10px'}>Upload your book</InputLabel>
            <TextField
              label=""
            type="file"
            fullWidth
            />
          </Grid>
          <Grid item>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Genre"
            fullWidth
            
          >
            <MenuItem value={1}>Picture Book</MenuItem>
            <MenuItem value={2}>Adventure and Fantasy</MenuItem>
            <MenuItem value={3}>Fairy Tales and Folklore</MenuItem>
            <MenuItem value={4}>Friendship and Social Themes</MenuItem>
            <MenuItem value={5}>Poetry and Rhyming Book</MenuItem>
          </Select>
          </Grid>

          <Grid item >
          <InputLabel >Tags</InputLabel>  
            
            <TextField
            label=""
            variant="outlined"
            fullWidth/>

            
          </Grid>
        

          <Grid item>
            <InputLabel> Description </InputLabel>
            <TextField
            label=""
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
        <FormControlLabel   required control={<Checkbox />} label="I accept the Terms & Conditions" />
        </TermsConditionsBox>
        
        <Box display={'flex'} justifyContent={"center"} marginBottom={'30px'}>
        <PublishBtn variant="contained">  Publish</PublishBtn>
        </Box>
        
        </FormContainer>
        </OuterContainer>
               
      
     );
}
 
export default Publish;

