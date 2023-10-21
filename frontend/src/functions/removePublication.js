const removePublication = async (id) => {
    console.log("trying to remove book")
      try {
        const response = await fetch(`/api/book/removePublishedBook/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`response was not ok. Status: ${response.status}`);
        }
        const res= await response.json();
        
        
        return res;
      } 
        catch (err) {
         console.error("Error:", err); 
         throw err;
      }
    };
  
  export default removePublication;



  
