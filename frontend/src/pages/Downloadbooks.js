import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import Box from "@mui/material/Box";
import {
  Card,
  Typography,
  useTheme,
  InputBase,
  Button,
  Grid,
  MenuItem,
  Select,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { grey, pink, yellow } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Downloadbooks = () => {
  const theme = useTheme();
  // A styles object or a function returning a styles object.
  //The function receives the theme and component's properties in an object which is its single argument.
  const OuterContainer = styled(Box)(() => ({
    marginBottom: "150px",
  }));

  const SerachComponennentWrapper = styled(Box)(() => ({
    width: "600px",
    height: "200px",
    margin: "10px auto",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    //backgroundColur:'red',

    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  }));
  const Search = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    ///position: 'relative',
    width: "600px",
    height: "60px",
    border: "1px solid #ccc",
    borderRadius: "30px",
    backgroundColor: grey[50],
    //marginRight: theme.spacing(2),
    //marginLeft: 0,
    //width: '100%',
    //height:'60px',
  }));

  const SearchIconWrapper = styled(Box)(() => ({
    //padding: theme.spacing(0, 2),
    height: "100%",
    backgroundColor: pink[800],
    //position: 'absolute',
    //pointerEvents: 'none',
    width: "20%",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0px",
    marginLeft: "auto",
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    width: "150%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",

    [theme.breakpoints.down("sm")]: {
      width: "70vw",
    },
  }));

  const AppBarWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    margin: "10px 100px",

    [theme.breakpoints.down("lg")]: {
      margin: "10px 50px",
    },

    [theme.breakpoints.down("md")]: {
      margin: "10px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px",
    },
  }));

  const AppBarComponent = styled(AppBar)(() => ({
    margin: "10px 10px",
    padding: "20px 20px",

    height: "auto",
    backgroundColor: pink[800],
    display: "flex",

    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "10px 10px",
      gridGap: "10px",
      margin: "0px 0px",
    },
    //backgroundColor:"red",
  }));

  const AppbarButton = styled(Button)(() => ({
    display: "flex",
    width: "auto",
    color: "white",
    transition: "background-color 0.3s", // Add a smooth transition effect
    "&:hover": {
      backgroundColor: pink[100], // Background color on hover
    },
  }));

  const BooksWrapper = styled(Box)(() => ({
    border: "1px solid #ccc",
    //boxShadow: '0 2px 8px rgba(255, 0, 0, 0.6)',

    display: "grid",
    backgroundColor: grey[200],

    padding: "20px 20px",

    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(6,1fr)",
      gridGap: "40px",
      margin: "50px 100px",
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(5,1fr)",
      gridGap: "20px",
      margin: "50px 50px",
    },

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(4,1fr)",
      margin: "50px 40px",
      padding: "20px 10px",
    },

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2,1fr)",
      gridGap: "10px",
      margin: "30px 10px",
    },
  }));

  const CardContentComponent = styled(CardContent)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },

    [theme.breakpoints.up("md")]: {
      padding: "16px 16px 0px 16px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "12px 12px 0px 12px",
    },
  }));
  const CardMediaComponent = styled(CardMedia)(() => ({
    maxWidth: "100%",
    padding: "16px 16px 0px 16px",

    [theme.breakpoints.down("md")]: {
      padding: "12px 12px 0px 12px",
    },
  }));

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // Store the selected book

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("api/book/getBooks")
      .then((respones) => {
        return respones.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => {
        console.log("rejected", err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    navigate(`/bookdetails/${book._id}`, { state: { book } });
  };

  return (
    <OuterContainer>
      <SerachComponennentWrapper className="App">
        <Typography
          align="center"
          variant="h4"
          fontWeight={"bold"}
          sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
        >
          {" "}
          Search Books
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Search your favorite books here"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      </SerachComponennentWrapper>

      <AppBarWrapper>
        <AppBarComponent position="static">
          <Grid
            container
            sx={{
              gap: { sx: 1, lg: 0 },
              display: { xs: "flex" },
              flex: {
                xs: "1 1 6vw",
                md: "1 1 50vw",
                flexDirection: { xs: "row" },
                padding: { xs: "10px 20px" },
              },
            }}
          >
            <Grid item xs={2} sm={3}>
              <AppbarButton>All</AppbarButton>
            </Grid>

            <Grid item xs={2} sm={3}>
              <AppbarButton>Recent</AppbarButton>
            </Grid>

            <Grid item xs={4} sm={3}>
              <AppbarButton> Most Popular</AppbarButton>
            </Grid>

            <Grid item xs={2} sm={3}>
              <AppbarButton>AR</AppbarButton>
            </Grid>
          </Grid>

        <Grid container sx={{ justifyContent:{xs:'space-evenly'}, display:{xs:"flex"}, gap:{xs:1},flex:{xs:'',md:'1 1 auto'} , flexDirection:{xs:"column",sm:"row"}}}>
        <Grid item  xs={3} sm={3} maxWidth="100%">
        <Select sx={{backgroundColor:grey[100]}}
            label="genre"
            labelId="demo-simple-select-label"
            id="genre"
            
            fullWidth
            name='genre'
           defaultValue={'None'}>
            <MenuItem value='None'>Genre</MenuItem>
            <MenuItem value='Adventure and Fantasy'> Adventure and Fantasy</MenuItem>
            <MenuItem value='Picture Book'> Picture Book</MenuItem>
            <MenuItem value='Fairy Tales and Folklore'>Fairy Tales and Folklore</MenuItem>
            <MenuItem value='Friendship and Social Themes'>Friendship and Social Themes</MenuItem>
            <MenuItem value='Poetry and Rhyming Book'>Poetry and Rhyming Book</MenuItem>
            
          </Select>
       
          
        </Grid>
        <Grid item xs={3} sm={3} maxWidth="100%">
        <Select  sx={{backgroundColor:grey[100]} }
            labelId="demo-simple-select-label"
            id="lang"
            label="Language"
            name="language"
            defaultValue={'Language'}
            
            //onChange={()=>{console.log(lang.current.value)}}
            fullWidth>
            <MenuItem value='Language'>Language</MenuItem>
            <MenuItem value='English'>English</MenuItem>
            <MenuItem value='Sinhala'>Sinhala</MenuItem>
            <MenuItem value='Tamil'>Tamil</MenuItem>
            <MenuItem value='Other'>Other</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3} sm={4} maxWidth="100%">
          
          <Select  sx={{backgroundColor:grey[100]}}
            labelId="demo-simple-select-label"
            id="age"
            label="age"
            name="age"
            defaultValue={'Age Category'}
            
            //onChange={()=>{console.log(lang.current.value)}}
            fullWidth>
            <MenuItem value='Age Category'>Age Category</MenuItem>
            <MenuItem value='PG 5+'>PG 5+</MenuItem>
            <MenuItem value='PG 7+'>PG 7+</MenuItem>
            <MenuItem value='PG 10+'>PG 10+</MenuItem>
            <MenuItem value='Other'>Other</MenuItem>
            
          </Select>
        </Grid>
        
        </Grid>
      
          
        
      </AppBarComponent>
    </AppBarWrapper>
       
        {isLoading ? (
          <Box marginLeft={"100px"}>Loading...</Box>
        ) : (
          <div>
            
            <BooksWrapper>
            {books.map((book) => (
              <Card
                onClick={() => handleBookSelect(book)}
                sx={{
                  maxWidth: "100%",
                  transition: "transform 0.2s ease",
                  ":hover": {
                    transform: "scale(1.07)",
                  },
                }}
              >
                <CardMediaComponent
                  component="img"
                  height="auto"
                  image={book.image}
                  alt="green iguana"
                />
                <CardContentComponent>
                  <Typography fontWeight="bold">{book.title}</Typography>
                  <Typography color={pink[400]}> by {book.author}</Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    spacing="2"
                    color={yellow[800]}
                    gap="2px"
                  >
                    <StarRoundedIcon fontSize="small" />
                    <Typography>{book.rating} </Typography>
                  </Box>
                </CardContentComponent>
              </Card>
            ))}
          </BooksWrapper>
        </div>
      )}
    </OuterContainer>
  );
};
export default Downloadbooks;
