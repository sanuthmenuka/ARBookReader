const UnreviewedBooks = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/book/getUnreviewedBooks`);
    if (!response.ok) {
      throw new Error(`response was not ok. Status: ${response.status}`);
    }
    const res = await response.json();

    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export default UnreviewedBooks;
