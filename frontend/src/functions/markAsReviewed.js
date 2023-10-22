const markAsReviewed = async (id) => {
    
      try {
        const response = await fetch(`/api/book/markasreviewed/${id}`, {
          method: "POST",
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
  
  export default markAsReviewed;