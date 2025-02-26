import { useState, useEffect, useCallback, useRef } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null); // Référence pour gérer l'annulation de la requête

  // Fonction pour effectuer la requête
  const fetchData = useCallback(async () => {
    if (!url) return;

    setLoading(true);
    setError(null);
    abortControllerRef.current?.abort(); // Annule la requête précédente si une nouvelle est lancée
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  // Lancement de la requête au montage ou si l'URL change
  useEffect(() => {
    fetchData();
    return () => abortControllerRef.current?.abort(); // Nettoyage à la destruction
  }, [fetchData]);

  return { isLoading, data, error, refetch: fetchData };
}

export default useFetch;
