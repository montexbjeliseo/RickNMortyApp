import { useState, useEffect } from "react";

function useGetData(URL: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestData(URL);
  }, []);

  async function requestData(URL: string) {
    try {
      const response = await fetch(URL);

      const json = await response.json();

      if (json.error) {
        setError(json.error);
        setLoading(false);
        setData(null);
      } else {
        setData(json);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    data,
    error,
    loading,
  };
}

export default useGetData;
