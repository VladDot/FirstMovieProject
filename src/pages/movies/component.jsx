import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Error from "../../components/Error";
import { moviesCategoryMenu } from "./config";
import Loading from "../../components/Loading";
import CardMovie from "../../components/CardMovie";

const Movies = () => {
    const location = useLocation();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [actualMoviesList, setActualMoviesList] = useState([]);

    const pathSegments = location.pathname.split("/");
    const lastPathSegment = pathSegments[pathSegments.length - 1];

    useEffect(() => {
        moviesCategoryMenu.forEach(({ requestUrl, text }, idx) => {
            try {
                if (lastPathSegment === text) {
                    setIsLoading(true);
                    fetch(requestUrl)
                        .then((res) => {
                            if (!res.ok) {
                                setError(res.status);
                            }
                            return res.json();
                        })
                        .then(setActualMoviesList)
                        .catch(setError)
                        .finally(() => setIsLoading(false));
                }
            } catch (error) {}
        });
    }, [lastPathSegment]);
    console.log(actualMoviesList);

    return (
        <div className=" max-w-[70%] m-auto my-7">
            {isLoading && <Loading />}
            {!!error && !isLoading && <Error error={error} />}
            <ul className="flex flex-wrap  justify-around gap-x-4 gap-y-7">
                {actualMoviesList.results &&
                    !isLoading &&
                    !error &&
                    actualMoviesList.results.map(
                        ({ title, id, poster_path }) => (
                            <li
                                className="min-h-[350px] max-w-[200px] shadow-lg  transition-all hover:-translate-y-6"
                                key={`movies_${title}_${id}`}
                            >
                                <CardMovie
                                    topic="movie"
                                    id={id}
                                    title={title}
                                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                                />
                            </li>
                        )
                    )}
            </ul>
        </div>
    );
};

export default Movies;
