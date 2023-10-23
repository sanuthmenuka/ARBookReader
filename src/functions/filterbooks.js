const filterBooks = async (queryParams) => {
  
    try {
      const response = await fetch(`api/book/getBooks?${queryParams.toString()}`);
      if (!response.ok) {
        throw new Error(`esponse was not ok. Status: ${response.status}`);
      }
      const data = await response.json();
      
      
      return data.data.books;
    } 
      catch (err) {
       console.error("Error:", err); 
       throw err;
    }
  };

export default filterBooks;




