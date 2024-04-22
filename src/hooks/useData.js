import { useState, useEffect } from 'react';

function useDataFetching(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let result;

                // Vérifier le type de l'URL
                if (typeof url === 'string') {
                    // Requête HTTP si url est une chaîne de caractères (URL)
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    result = await response.json();
                } else {
                    // Si url est un tableau, utiliser les données directement
                    result = url;
                }

                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        // Cleanup function to cancel fetching when component unmounts
        return () => {
            // Cleanup code here if necessary
        };
    }, [url]);

    return { data, isLoading, error };
}

export default useDataFetching;

