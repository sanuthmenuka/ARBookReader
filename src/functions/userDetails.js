const UserDetails = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    console.log(`${apiUrl}`);
    const response = await fetch(`${apiUrl}/api/user/getUserDetails`);
    if (!response.ok) {
      throw new Error(`response was not ok. Status: ${response.status}`);
    }
    const data = await response.json();

    return data.userDetails;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default UserDetails;
