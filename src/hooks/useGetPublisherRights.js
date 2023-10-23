import { useEffect, useState } from "react";

const useGetPublisherRights = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const publisherRights = async (FormData) => {
    setIsLoading(true);
    setError(null);

    console.log("publish request made",FormData);
    const response = await fetch("/api/publisherright/requestpublisherrights", {
      method: "POST",
      body: FormData,
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // update loading state
      console.log("publish rights request successful");
      setIsLoading(false);
    }
  };

  return { publisherRights, isLoading, error };
};

export default useGetPublisherRights;
