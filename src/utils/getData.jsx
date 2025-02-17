import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let isMounted = true; // Ajout pour éviter les erreurs de mise à jour d’état après un démontage

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Nettoyage pour éviter les erreurs si le composant est démonté avant la fin de la requête
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;
