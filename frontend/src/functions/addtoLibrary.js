const AddtoLibrary = async (id) => {
      console.log("Here")
      try {
        const queryParams = new URLSearchParams();
        queryParams.append('book_id', id);
        const response = await fetch(`/api/user/addToLibrary?${queryParams.toString()}`, {
          method: "GET",
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
  
  export default AddtoLibrary;



  
