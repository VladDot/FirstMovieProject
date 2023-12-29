import { useEffect, useState } from "react";

export const useGetData1 = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            await fetch(url)
                .then((res) => res.json())
                .then(setData)
                .catch(setError)
                .finally(() => setIsLoading(false));
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        error,
        isLoading,
    };
};
