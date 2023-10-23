const UserDetails = async () => {
    
      try {
        const response = await fetch(`api/user/getUserDetails`);
        if (!response.ok) {
          throw new Error(`response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        
        
        return data.userDetails;
      } 
        catch (err) {
         console.error("Error:", err); 
         throw err;
      }
    };
  
  export default UserDetails;