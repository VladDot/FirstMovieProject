import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import CardMovie from "../../components/CardMovie";

import { getSearchedMovies } from "../../utils/generateUrl";

import noImg from "../../assets/img/no_photo.png";

const SearchPage = () => {
    const { search } = useParams();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [serchResault, setSerchResault] = useState([]);

    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(getSearchedMovies(search))
                .then((res) => {
                    if (!res.ok) {
                        setError(res.status);
                    }
                    return res.json();
                })
                .then(setSerchResault)
                .catch(setError)
                .finally(() => setIsLoading(false));
        } catch (error) {}
    }, [search]);

    return (
        <div className=" max-w-[70%] m-auto my-7">
            {isLoading && <Loading />}
            {!!error && !isLoading && <Error error={error} />}
            <ul className="flex flex-wrap  justify-around gap-x-4 gap-y-10">
                {serchResault.results &&
                serchResault.results.length > 0 &&
                !isLoading &&
                !error ? (
                    serchResault.results.map(({ title, poster_path, id }) => (
                        <li
                            key={`search_${title}_${id}`}
                            className="min-h-[370px] max-w-[200px] shadow-lg 
                             transition-all hover:-translate-y-6 hover:shadow-lg"
                        >
                            {poster_path ? (
                                <CardMovie
                                    topic="movie"
                                    id={id}
                                    title={title}
                                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                                />
                            ) : (
                                <div className="w-full ">
                                    <div className="h-[300px] flex justify-center items-center">
                                        <img
                                            className="rounded-md  "
                                            src={noImg}
                                            alt=""
                                        />
                                    </div>

                                    <p className="text-center mt-5 mb-2 overflow-auto w-full">
                                        {title}
                                    </p>
                                </div>
                            )}
                        </li>
                    ))
                ) : (
                    <h1>Movie not found</h1>
                )}
            </ul>
        </div>
    );
};

export default SearchPage;
