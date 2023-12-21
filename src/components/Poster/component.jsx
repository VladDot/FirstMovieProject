import React, { useEffect, useState } from "react";
import { getPerson, getPopular } from "../../utils/generateUrl";

const Poster = () => {
    const [error, setError] = useState(null);
    const [posters, setPosters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(getPopular("tv"))
            .then((res) => res.json())
            .then(setPosters)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            {posters.results &&
                posters.results.map(({ id, name }) => (
                    <div key={`123${name}_${id}`}>{id}</div>
                ))}
        </div>
    );
};

export default Poster;
