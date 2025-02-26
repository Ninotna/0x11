import { useState, useEffect, useCallback, useRef, useMemo } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  // 🔹 Mémorisation des options pour éviter que `useCallback` ne se redéclenche en boucle
  const stableOptions = useMemo(() => options, [options]);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch(url, {
        ...options, // Directement utiliser options
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
  }, [url, JSON.stringify(options)]); // ✅ Compare le contenu de options, pas juste la référence

  useEffect(() => {
    fetchData();
    return () => abortControllerRef.current?.abort();
  }, [fetchData]);

  return { isLoading, data, error, refetch: fetchData };
}

export default useFetch;
