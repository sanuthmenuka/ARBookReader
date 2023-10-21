import {
  Box,
  Typography,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import  addToLibrary from "../functions/addtoLibrary";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const BookDetails = () => {
  const location = useLocation();
  const theme = useTheme();
  const { book } = location.state;
  //console.log("book info", book);
  const navigate = useNavigate();
  
  const PublicationsBox = styled(Box)(() => ({
    //border: '1px solid #ccc',
    //backgroundColor:grey[600],

    [theme.breakpoints.up("lg")]: {
      margin: "0px 50px 50px 50px",
    },
    [theme.breakpoints.down("lg")]: {
      margin: "50px 50px",
    },

    [theme.breakpoints.down("md")]: {
      margin: "20px 10px",
      padding: "30px 0px",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "30px 10px",
      padding: "20px 0px",
    },
  }));

  const BooksWrapper = styled(Box)(() => ({
    display: "grid",
    padding: "20px 20px",

    //backgroundColor:grey[200],
    [theme.breakpoints.up("lg")]: {
      margin: "0px 10px 10px 10px", //top,right,bottom , left
      padding: "50px 10px",
      gridGap: "40px",
    },
    [theme.breakpoints.down("lg")]: {
      gridGap: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      gridGap: "10px",
    },
  }));

  const CardContentComponent = styled(CardContent)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: 0,
    "&:last-child": {
      paddingBottom: "30px",
    },

    [theme.breakpoints.up("md")]: {
      padding: "16px 16px 0px 16px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "12px 12px 0px 12px",
    },
  }));
  const CardMediaComponent = styled(CardMedia)(() => ({
    width: "auto",
    height: "600px",
    objectFit: "cover",
    padding: "16px 16px 16px 16px",

    [theme.breakpoints.down("md")]: {
      padding: "12px 12px 0px 12px",
    },
  }));

  const AddtoLibraryBtn = styled(Button)(() => ({
    width: "300px",
    height: "80px",
    backgroundColor: grey[900],
    borderRadius: "40px",
    border: "2px solid #ccc",
    fontSize: "1.2rem",
    color: "white",

    "&:hover": {
      backgroundColor: grey[700],
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

  const handleAddToLibrary = () => {
   console.log(book._id);
   addToLibrary(book._id)
    .then((res) => {
      console.log("Added book to your library",res) ;
      //check if the user has an active subscription plan
      if( res.message === "Success"){
        //pop up msg to indicate the successful adding to personal library
        Swal.fire({
          icon: 'success',
          title: "Added to your library!",
          showConfirmButton: false,
          timer: 2000, // Automatically close after 2 seconds
        });
      }
      else if(res.message === "Activate"){
        Swal.fire({
          icon:'error',
          title: "Please activate your subscription plan!" ,
          showConfirmButton: false,
          timer: 2000, // Automatically close after 2 seconds
        });

      }
      
      
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
      
    })
   
  };
  

  return (
    <PublicationsBox>
      <BooksWrapper>
        <Card
          onClick={(e) => {
            console.log("clicked");
          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: grey[100],
          }}
        >
          <CardMediaComponent
            component="img"
            height="auto"
            src={book.image}
            alt="book image"
          />
          <CardContentComponent>
            <Typography
              variant="h3"
              fontWeight="bold"
              marginBottom={"30px"}
              color={grey[900]}
            >
              {book.title}
            </Typography>
            {/*Book description */}
            <Box>
              <Typography fontWeight="bold">Description</Typography>
            </Box>
            <Box margin={"5px 50px"}>
              <Typography color={grey[900]} marginBottom={"20px"}>
                {" "}
                {book.description}
              </Typography>
            </Box>

            {/*Author */}
            <Box>
              <Typography fontWeight="bold">Author</Typography>
            </Box>
            <Box margin={"5px 50px"}>
              <Typography color={grey[900]} marginBottom={"20px"}>
                {" "}
                {book.author}
              </Typography>
            </Box>

            {/*Tags */}
            <Box>
              <Typography fontWeight="bold">Tags</Typography>
            </Box>
            <Box margin={"5px 50px"}>
              <Typography color={grey[900]} marginBottom={"20px"}>
                {" "}
                {book.genre_list}
              </Typography>
            </Box>

            <AddtoLibraryBtn 
            onClick={handleAddToLibrary}
            > Add to my Library</AddtoLibraryBtn>
          </CardContentComponent>
        </Card>
      </BooksWrapper>
    </PublicationsBox>
  );
};

export default BookDetails;
