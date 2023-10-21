import { Box ,Grid,Typography,useTheme,Card,CardContent,CardMedia, Button} from "@mui/material";
import { blue, grey,pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles"; 
import { useEffect, useState } from "react";
import getPendingPublisherRightRequests from "../functions/getPendingPublisherRightRequests";
import GrantPublisherRights from "../functions/grantPublisherRights";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 
 const PublsihRights = () => {
  const theme = useTheme();
    
  const OuterBox =styled(Box)(()=>({ 
    display:"flex",
    flexDirection:"column",
    maxWidth: '100%',
    borderRadius:"10px",
    
   
    height: '100%', 
   [theme.breakpoints.up('lg')]: {
        margin:"10px 100px 10px 100px", //top,right,bottom , left
        padding:"10px 10px",
        
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

    const [requests, setRequests] = useState([]);
    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [permission, setPermission] = useState(false);

    useEffect(() => {
      setIsLoading(true);

      getPendingPublisherRightRequests()
      .then((data) => {
        setError(false);
        setRequests(data.publishertRequests);
        
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() =>{
        setIsLoading(false);
        console.log("all",requests);
      } 
    )}, [permission]);

    const handleAccessBtnClick = (requestId,access) => {
      //console.log(requestId,access);
      GrantPublisherRights(requestId,access)
      .then((res) => {
        setPermission(!permission);
        if(access === "access granted"){
          Swal.fire({
            icon: 'success',
            title: 'Publish right access granted',
            showConfirmButton: false,
            timer: 2000,
          });

        }
        else{
          Swal.fire({
            icon: 'success',
            title:  'Publish right access denied',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        //pop up msg to indicate that an error occured adding to personal library
        Swal.fire({
          icon: 'error',
          title: 'An error occurred.',
          showConfirmButton: false,
          timer: 2000,
        });
        
      })
       
      
    };

  
    

    return ( 
        <div>
        
        <Typography sx ={{
            paddingLeft:"120px" ,
            paddingBottom:"10px" ,
            fontSize: {xs:"2.3rem",md:'2.5rem' },
            fontWeight:"bold",
            color:blue[900]
            }} >Publisher Right Requests</Typography>
           
           <OuterBox>
           {requests.map((request) => (
            <Card key={request._id}
            sx={{ 
                  display:"flex",
                  flexDirection:"row",
                  border: `1px solid ${grey[400]}`, // Add a grey border
                  boxShadow: `0 4px 8px ${grey[300]}`, // Add a shadow
                  maxWidth:"100%",
                  marginBottom: "30px"

                }}
                >
                  < CardContentComponent >
                    
                  <Grid container width={"80vw"} marginBottom={"10px"}>
                  <Grid item xs={3}>
                  <Typography fontWeight="bold"  fontSize="1.3rem" color={blue[700]}>Name   </Typography>
                  </Grid>

                  <Grid item  xs={9} >
                  <Typography  fontSize="1.3rem" >
                      {request.userId.firstName} {request.userId.lastName} 
                      </Typography>
                  </Grid>

                  </Grid>

                  <Grid container width={"80vw"} marginBottom={"10px"}>
                  <Grid item xs={3}>
                  <Typography fontWeight="bold"  fontSize="1.3rem" color={blue[700]}> Bio   </Typography>
                  </Grid>

                  <Grid item  xs={9} >
                  <Typography fontSize="1.3rem" >
                      {request.bio} 
                      </Typography>
                  </Grid>

                  </Grid>

                  
                  {request.haspublishedbefore && (
                  <Grid container marginBottom={"10px"}>
                    <Grid item xs={3}  color={blue[700]}>
                      <Typography fontWeight="bold" fontSize="1.3rem">
                        Previous Publications  
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography  fontSize="1.2rem">
                        {request.previouspublications}
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              <Box margin="20px 0px" width="80vw" display="flex" justifyContent="flex-end">
                <Button variant="outlined" style={{ marginRight: '10px' }}
                 onClick={() => handleAccessBtnClick(request._id,'access granted')}>
                  Grant Permission</Button>
                <Button variant="outlined" style={{ marginRight: '10px' }}
                  onClick={() => handleAccessBtnClick(request._id,'access denied')}>
                  Deny Permission</Button>
              </Box>

                       
                </CardContentComponent>
                 
                </Card>
           ))}

                </OuterBox>
              
           
                </div>
     );
}
 
export default PublsihRights;