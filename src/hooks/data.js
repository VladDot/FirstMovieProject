import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setIsLoading(false));
    }, []);

    return {
        data,
        error,
        isLoading,
    };
};

export default useGetData;
