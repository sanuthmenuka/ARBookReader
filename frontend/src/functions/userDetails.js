const UserDetails = async () => {
    console.log("Here user")
      try {
        const response = await fetch(`api/user/getUserDetails`);
        if (!response.ok) {
          throw new Error(`response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log("Data received:", data.userDetails); 
        return data.userDetails;
      } 
        catch (err) {
         console.error("Error:", err); 
         throw err;
      }
    };
  
  export default UserDetails;