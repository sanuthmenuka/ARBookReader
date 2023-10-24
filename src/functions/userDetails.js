const UserDetails = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    console.log(`${apiUrl}`);
    console.log("fetching");
    const response = await fetch(`${apiUrl}/api/user/getUserDetails`, {
      method: "GET", // Specify the HTTP method as GET
      headers: {
        // You can add any necessary headers, e.g., for authentication
        "Content-Type": "application/json", // Set the Content-Type if needed
      },
      credentials: "include",
    });
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
