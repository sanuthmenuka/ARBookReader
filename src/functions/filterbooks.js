const filterBooks = async (queryParams) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(
      `${apiUrl}/api/book/getBooks?${queryParams.toString()}`,
      {
        // Specify the HTTP method as GET
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error(`response was not ok. Status: ${response.status}`);
    }
    const data = await response.json();

    return data.data.books;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default filterBooks;
