const getPendingPublisherRightRequests = async() => {
    
     try {
       const response = await fetch(`/api/publisherright/getpublisherrightsrequest`, {
         method: "GET",
       });
       if (!response.ok) {
         throw new Error(`response was not ok. Status: ${response.status}`);
       }
       const res= await response.json();
      
       return res.data;
     } 
       catch (err) {
        console.error("Error:", err); 
        throw err;
     }
}
 
export default getPendingPublisherRightRequests;