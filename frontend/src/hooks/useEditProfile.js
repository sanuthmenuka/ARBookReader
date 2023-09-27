import { useState } from 'react'


const useEditProfile = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const editProfile = async (FormData) => {
    setError(null)
    setIsLoading(true)
    console.log("sent user details")
    const response = await fetch('/api/user/editprofile', {
      method: 'POST',
      body: FormData
    })
    const json = await response.json()  

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
        // update loading state
        console.log("edit profile request sent successfully");
        
      }
      setIsLoading(false)
  }

  return { editProfile,error,isLoading }
};
 
export default useEditProfile;



  
