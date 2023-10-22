const GrantPublisherRights = async (requestId, access) => {
    
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('request_id', requestId);
      queryParams.append('access', access);
      const response = await fetch(`/api/publisherright/grantpublisherights?${queryParams.toString()}`, {
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

export default GrantPublisherRights;




