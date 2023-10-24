const markAsReviewed = async (id) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${apiUrl}/api/book/markasreviewed/${id}`, {
      method: "POST",
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

export default markAsReviewed;
