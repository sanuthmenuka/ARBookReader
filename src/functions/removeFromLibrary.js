const removeFromLibrary = async (id) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/user/removeLibraryBook/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`response was not ok. Status: ${response.status}`);
    }
    const res = await response.json();

    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default removeFromLibrary;
