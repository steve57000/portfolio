import { useState, useEffect } from 'react';

// Exemple de fonction asynchrone
const fetchData = async () => {
    // Simule un délai pour l'appel asynchrone
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Changez cette ligne pour simuler une erreur
            const success = true;

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 500);
    });
};

export const useInitial = () => {
    const [status, setStatus] = useState({
        loading: false,
        error: false
    });

    useEffect(() => {
        const initialize = async () => {
            setStatus({ loading: true, error: false });
            try {
                await fetchData();
                setStatus({ loading: false, error: false });
            } catch (error) {
                setStatus({ loading: false, error: true });
            }
        };

        initialize();
    }, []); // Le tableau vide comme deuxième argument signifie que cela s'exécute une seule fois au montage

    return status;
};

