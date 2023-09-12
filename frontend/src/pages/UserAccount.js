import { Avatar, Box ,Grid,Typography,useTheme,Card,CardContent,CardMedia, Button} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useState,useEffect } from "react";


const UserAccount = () => {
    const theme = useTheme();

     
  const OuterBox =styled(Box)(()=>({ 
    display:"flex",
    flexDirection:"column",
   
    border: '1px solid #ccc',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
    backgroundColor:grey[100],
    maxWidth: '100%',
    borderRadius:"10px",
    
   
    height: '100%', 
   [theme.breakpoints.up('lg')]: {
        margin:"10px 120px 50px 120px", //top,right,bottom , left
        padding:"50px 10px",
        
      }, 
      [theme.breakpoints.down('lg')]: {
        margin:"10px 50px 50px 50px",  
        padding:"30px 50px",
        
      }, 
      [theme.breakpoints.down('md')]: {
        margin:"10px 10px 50px 10px",  
        padding:"10px 10px",
      }, 
      [theme.breakpoints.down('sm')]: {
        margin:"10px 10px 50px 10px",  
        padding:"10px 10px",
      }, 
    
  }));
 
  const OuterGrid = styled(Grid)(() => ({
     
     display:"flex",
     
     [theme.breakpoints.up('md')]: {
      flexDirection:"row",
     },
     [theme.breakpoints.down('md')]: {
      
      flexDirection:"column",
    
     },
    
   }));

   const ProfilePicture= styled(Avatar)(() => ({
    
    [theme.breakpoints.up('lg')]: {
      width: "200px", 
      height: "200px",
     },
     [theme.breakpoints.down('lg')]: {
      
      width: "150px", 
      height: "150px",
     },
     

    
  }));

  const PublicationsBox = styled(Box)(()=>({
    border: '1px solid #ccc', 
    backgroundColor:grey[200],
    
   
    [theme.breakpoints.up('lg')]: {
      
      margin:"10px 120px 100px 120px", //top,right,bottom , left
      padding:"50px 10px",
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





  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userCategory, setUserCategory] = useState('Publisher');
  const [publisherRights, setPublisherRights] = useState('Active'); //pending,active,suspended
  const [subscription, setSubscription] = useState('Premium');

  
    useEffect(() => {
      fetch(' https://example-data.draftbit.com/people/56')
      .then(respones=>{
        return respones.json();
    })
    .then(data=>{
        setUsers(data); 
    })
    .catch(err=>{
        console.log('rejected',err)
    })
    .finally(()=>setIsLoading(false));
    }, []);

    const [books, setBooks] = useState([]);
    const [isBookLoading, setIsBookLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://example-data.draftbit.com/books?_limit=5')
      .then(respones=>{
        return respones.json();
    })
    .then(data=>{
        setBooks(data); 
    })
    .catch(err=>{
        console.log('rejected',err)
    })
    .finally(()=>setIsLoading(false));
    }, []);
  
 
  


    return ( 
        <div>
         
         
                
         {isLoading ? (
            <p></p>
          ) : (
            <OuterBox>

            

           
                <OuterGrid >
                {/* Profile picture(avatar) and username*/}
                <Grid item xs={12} md={4} 
                sx={{
                  display:"flex",
                  borderRight:{md:'5px solid black'} ,
                  borderBottom:{xs:'5px solid black',md:"none"} ,
                  padding :{xs:"10px 10px", md:"10px 20px",lg:"10px 50px"},
                  justifyContent:"center"
                  
                }}> 
                <Box justifyContent='center' > 
                
                <Box paddingBottom={'30px'}  display="flex" justifyContent='center'>
                <ProfilePicture src= {users.avatar}/>
                </Box>
                <Typography fontSize={"1.5rem"} fontWeight={'bold'} >{users.first_name} {users.last_name}</Typography>
                </Box>
                </Grid>

                 {/* Other details of the user*/}
                <Grid item xs={12} md={8}  
                sx={{
                  display:"flex",
                  justifyContent:"center"
                  
                }}> 
                <Box  
                 sx={{
                  padding:{xs:'10px 0px' },
                  width:{xs:"100vw",md:"60vw"}
                  
                }}
                >

                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{xs:"10px 10px",md:"10px 50px"}} maxWidth={"100%"}>
                <Grid item xs={6}>
                <Typography variant="h6">Name </Typography> 
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" fontStyle={"italic"} color={grey[800]}>{users.first_name} {users.last_name}</Typography> 
                </Grid>
                </Grid>

                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{xs:"10px 10px",md:"10px 50px"}}>
                <Grid item xs={6}>
                <Typography variant="h6">Email </Typography> 
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" fontStyle={"italic"} color={grey[800]}>{users.email}</Typography> 
                </Grid>
              </Grid>
                
                
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{xs:"10px 10px",md:"10px 50px"}}>
                <Grid item xs={6}>
                <Typography variant="h6"> User Category </Typography> 
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" fontStyle={"italic"} color={grey[800]}>{userCategory}</Typography> 
                </Grid>
              </Grid>

               <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{xs:"10px 10px",md:"10px 50px"}}>
                <Grid item xs={6}>
                <Typography variant="h6"> Status of Publisher Rights </Typography> 
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" fontStyle={"italic"} color={grey[800]}>{publisherRights}</Typography> 
                </Grid>
              </Grid>

              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{xs:"10px 10px",md:"10px 50px"}}>
                <Grid item xs={6}>
                <Typography variant="h6"> Subscription  </Typography> 
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" fontStyle={"italic"} color={grey[800]}>{subscription}</Typography> 
                </Grid>
              </Grid>
                
               
                </Box>
                </Grid>
                </OuterGrid>
          
                 

        
        </OuterBox>

    )}

{isLoading ? (
          <p></p>
        ) : (
          <div>
            
           <PublicationsBox>
           <Typography sx ={{
            paddingLeft:"40px" ,
            paddingBottom:"10px" ,
            fontSize: {xs:"2.3rem",md:'2.5rem' },
            fontWeight:"bold",
            color:blue[900]
            }} >Your Publications</Typography>
           
            <BooksWrapper>
              
            
            {books.map((book) => (
                <Card onClick={(e)=>{console.log("clicked")}} sx={{ 
                  
                  display:"flex",
                  flexDirection:"row"
                  

                }}
                >
                   <CardMediaComponent
                    component="img"
                    height="auto"
                    image={book.image_url}
                    alt="green iguana" />
                      < CardContentComponent>
                          <Typography fontWeight="bold" marginBottom={"5px"} color={blue[900]}>{book.title}</Typography>
                          <Box display="flex"
                          flexDirection="row"
                          spacing='2'
                          color={blue[800]}
                          gap='2px'
                          marginBottom={"5px"}>
                            <Typography  >Ratings    : </Typography>
                          
                          <Typography  >{book.rating} </Typography>
                          </Box>
                          <Typography color={grey[600]} marginBottom={"20px"}  > by {book.description}</Typography>
                         
                          <Box  marginBottom={"20px"}> <Button variant="outlined"> Remove</Button></Box>
                       
                      </ CardContentComponent>
                 
                </Card>
              
            ))}
            </ BooksWrapper>
            </PublicationsBox>
          </div>
        )}

    </div>
                
                
                
                
        
        
    )};

 
export default UserAccount;

