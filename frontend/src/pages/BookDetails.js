import {  Box ,Typography,useTheme,Card,CardContent,CardMedia, Button} from "@mui/material";
import {  grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const BookDetails = () => {
    const theme = useTheme();



  const PublicationsBox = styled(Box)(()=>({
    //border: '1px solid #ccc', 
    //backgroundColor:grey[600],
    
   
    [theme.breakpoints.up('lg')]: {
      
      margin:"0px 50px 50px 50px",
     },
     [theme.breakpoints.down('lg')]: {
      
      margin:"50px 50px",
     },
     
     [theme.breakpoints.down('md')]: {
      
      margin:"20px 10px",
      padding:"30px 0px",
     },
    
    [theme.breakpoints.down('sm')]: {
      
      margin:"30px 10px",
      padding:"20px 0px"
},
    
}));

  const BooksWrapper = styled(Box)(()=>({
  
    display:'grid',  
    padding:"20px 20px",
    
    //backgroundColor:grey[200],
    [theme.breakpoints.up('lg')]: {
      margin:"0px 10px 10px 10px", //top,right,bottom , left
      padding:"50px 10px",
      gridGap:'40px',
     
     },
     [theme.breakpoints.down('lg')]: {
      
      gridGap:'20px',
      
     }, 
    
    [theme.breakpoints.down('sm')]: {
      
      gridGap:'10px',
      
},
    
}));


const CardContentComponent = styled(CardContent)(()=>({
    display:"flex",
    flexDirection:"column",
    padding: 0,
    "&:last-child": {
      paddingBottom: "30px"
    },
    
    [theme.breakpoints.up('md')]: {
      padding:"16px 16px 0px 16px",
     },
    
    [theme.breakpoints.down('md')]: {
      padding:"12px 12px 0px 12px"
     },
}));
const CardMediaComponent = styled(CardMedia)(()=>({
 
    width:"auto",
    height:"600px",
    objectFit:"cover",
    padding:"16px 16px 16px 16px",
    
    [theme.breakpoints.down('md')]: {
      padding:"12px 12px 0px 12px"
     },
 
 
}));

const AddtoLibraryBtn = styled(Button)(() => ({
    
  width:"300px",
  height:"80px",
  backgroundColor:grey[900],
  borderRadius:"40px",
  border:'2px solid #ccc',
  fontSize: '1.2rem',
  color:"white",


  '&:hover':{
    backgroundColor:grey[700],
  },
  
  [theme.breakpoints.up('sm')]: {
    
    margin:'10px 30px 0px 30px',
    
  },
  [theme.breakpoints.down('sm')]: {
    margin:'0px 15px 0px 5px', //top right bottom left
    width:"300px",
    height:"60px",
    
  },
}));


    let { id } = useParams();
    const [book, setBook] = useState([]);
    const [isBookLoading, setIsBookLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(`https://example-data.draftbit.com/books/${id}`)
      .then(respones=>{
        return respones.json();
    })
    .then(data=>{
        setBook(data); 
    })
    .catch(err=>{
        console.log('rejected',err)
    })
    .finally(()=>setIsLoading(false));
    }, []);
  
 
  


    return ( 
        
         
         

           <PublicationsBox>
           
            <BooksWrapper>
              
            
           
                <Card onClick={(e)=>{console.log("clicked")}} 
                sx={{ 
                  
                  display:"flex",
                  flexDirection:"row",
                  backgroundColor:grey[100]
                 
                }}
                >
                   <CardMediaComponent
                    component="img"
                    height="auto"
                    image={book.image_url}
                    alt="green iguana" />
                      < CardContentComponent>
                      
                          <Typography variant="h3" fontWeight="bold" marginBottom={"30px"} color={grey[900]}>{book.title}</Typography>
                          {/*Book description */}
                          <Box >
                            <Typography fontWeight="bold">Description</Typography>
                          </Box>
                          <Box  margin={"5px 50px"}>
                             <Typography color={grey[900]} marginBottom={"20px"}  > {book.description}</Typography>
                          </Box>

                          {/*Author */}
                          <Box >
                            <Typography fontWeight="bold">Author</Typography>
                          </Box>
                          <Box  margin={"5px 50px"}>
                             <Typography color={grey[900]} marginBottom={"20px"}  > {book.authors}</Typography>
                          </Box>
                         
                          {/*Tags */}
                          <Box >
                            <Typography fontWeight="bold">Tags</Typography>
                          </Box>
                          <Box  margin={"5px 50px"}>
                             <Typography color={grey[900]} marginBottom={"20px"}  > {book.genre_list}</Typography>
                          </Box>
                         
                         <AddtoLibraryBtn> Add to my Library</AddtoLibraryBtn>
                       
                      </ CardContentComponent>
                 
                </Card>
              
            
            </ BooksWrapper>
            </PublicationsBox> 
           
       
        )}

  
 
export default BookDetails;

