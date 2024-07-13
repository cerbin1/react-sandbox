import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFunction();
        setData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data.",
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return { isFetching, data, setData, error };
}
