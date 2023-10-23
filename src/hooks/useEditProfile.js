import { useState } from 'react'


const useEditProfile = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [isChanged, setIsChanged] = useState(false)

  const editProfile = async (FormData) => {
    setError(null)
    setIsLoading(true)
    console.log("sent user details",FormData)
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
        console.log("changed profile details successfully");
        setIsChanged(!isChanged);
       // console.log(isChanged);
        
      }
      setIsLoading(false)
  }

  return { editProfile,error,isLoading,isChanged }
};
 
export default useEditProfile;



  
