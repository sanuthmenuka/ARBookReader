import { Box ,Grid,Typography,useTheme,Card,CardContent,CardMedia, Button} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState,useEffect } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import UnreviewedBooks from "../functions/getUnreviewedbooks";
import removePublication from "../functions/removePublication";
import markAsReviewed from "../functions/markAsReviewed";




const ReviewBooks = () => {
    const theme = useTheme();

    const PublicationsBox = styled(Box)(()=>({
    border: '1px solid #ccc', 
    backgroundColor:grey[200],
    
   
    [theme.breakpoints.up('lg')]: {
      
      margin:"0px 120px 100px 120px", //top,right,bottom , left
      padding:"30px 0px",
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
    gridTemplateColumns:'repeat(1,1fr)',
    [theme.breakpoints.up('lg')]: {
      
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
      paddingBottom: 0
    },
    
    [theme.breakpoints.up('md')]: {
      padding:"16px 16px 0px 16px",
     },
    
    [theme.breakpoints.down('md')]: {
      padding:"12px 12px 0px 12px"
     },
}));
const CardMediaComponent = styled(CardMedia)(()=>({
 
    width:"200px",
    height:"300px",
    objectFit:"cover",
    padding:"16px 16px 16px 16px",
    
    [theme.breakpoints.down('md')]: {
      padding:"12px 12px 0px 12px"
     },

}));
    const [books,setBooks] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsLoading(true);

        UnreviewedBooks()
        .then((data) => {
            setError(false);
            setBooks(data.foundBooks);
        
        })

        .catch((error) => {
        console.error(error);
        setError(true);
        })
        .finally(() => setIsLoading(false));
    }, []);    
    
    //This is used to remove a book from the book catalog so that it will not be available for readers to read
    const handleRemovePublicationbtnClick = (id) => {
      //user object is passed as a second argument
      
      // Display a confirmation pop-up using SweetAlert
      Swal.fire({
        title: 'Remove Publication',
        text: 'Are you sure you want to remove this publication?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, proceed with the removal
          console.log("Confirmed: Remove book",id);
          removePublication(id)
          .then((res)=>{
            //change the local books data so that it does not contain the removed book
            //this method reduce the no of backend calls
            setBooks((books) => books.filter((book) => book._id !== id));
          })
         
          
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // User clicked the cancel button
          console.log("Canceled: Remove book");
        }
      });
    };

    const handleMarkasReviewedbtnClick = (id) => {
        markAsReviewed(id)
        .then(() => {
            Swal.fire({
                title: 'Marked as reviewed',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              });
            setBooks((books) => books.filter((book) => book._id !== id)); 
        })
        .catch((error) => {
            console.error(error);
            //pop up msg to indicate that an error occured adding to personal library
            Swal.fire({
              icon: 'error',
              title: 'An error occurred',
              showConfirmButton: false,
              timer: 2000,
            });
            
          })

    }




    return (  
        <div>
            
        <PublicationsBox>

        <Grid container>
           <Grid item  xs={9} >
           
           <Typography sx ={{
              paddingLeft:"40px" ,
               paddingBottom:"10px" ,
             fontSize: {xs:"2.5rem",md:'2.8rem' },
             fontWeight:"bold",
             color:blue[900]
             }} >
            Unreviewed Books
            </Typography>
          
           </Grid>
           
           </Grid>
         
        <BooksWrapper>
           
         
         {books.map((book) => (
             <Card sx={{ 
               
               display:"flex",
               flexDirection:"row"
               

             }}
             >
                <CardMediaComponent
                 component="img"
                 height="auto"
                 image={book.image}
                 alt="green iguana" />
                   < CardContentComponent>
                       <Typography fontWeight="bold" marginBottom={"5px"} color={blue[900]}>{book.title}</Typography>
                       <Typography color={blue[800]} marginBottom={"20px"}  > by {book.author}</Typography>
                       <Box display="flex"
                       flexDirection="row"
                       spacing='2'
                       color={blue[800]}
                       gap='2px'
                       marginBottom={"5px"}>
                         <Typography  >Ratings    : </Typography>
                       
                       <Typography  >{book.ratings} </Typography>
                       </Box>
                       
                       <Typography color={grey[600]} marginBottom={"20px"}  > {book.description}</Typography>
                      
                       <Box  marginBottom={"20px"}> 

                       
                       
                       
                       <Button 
                       variant="outlined"
                       style={{ marginRight: "10px" }}
                       onClick={() => handleMarkasReviewedbtnClick(book._id)}
                      > 
                       Mark as reviewed
                       </Button>
                      
                       
                       <Button 
                       variant="outlined"
                       onClick={() => handleRemovePublicationbtnClick(book._id)}
                       > 
                       Remove from catalog
                       </Button>
                       
                     
                       </Box>
                    
                   </ CardContentComponent>
              
             </Card>
           
         ))}
         </ BooksWrapper>
         </PublicationsBox>
       </div>
    );
}
 
export default ReviewBooks;