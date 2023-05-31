import { logDOM } from "@testing-library/react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setRerror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsLoading(false);
        setData(json);
        setRerror(null);
      } catch (err) {
        setIsLoading(false);

        setRerror(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
