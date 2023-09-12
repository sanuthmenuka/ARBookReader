import { useEffect, useState } from "react";

const usePublish = () => {
    const [isLoading,setIsLoading] = useState(null);
    const[error,setError] = useState(null);
    
    
    const publish = async (FormData)=>{
        setIsLoading(true);
        //console.log(FormData);
        console.log(FormData.title,FormData.author,FormData.description,FormData.genre,FormData.language,FormData.ageCatogory,
            FormData.ARcontent,FormData.tag1,FormData.tag2,FormData.coverImage,FormData.uploadedBook );
        //API call
        const email = FormData.title;
        const password = FormData.author;
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
          })
          const json = await response.json()  
      
          if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
          }


    }
   
    return {publish, isLoading, error }
  }

 
export default usePublish;