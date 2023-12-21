import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/data";
import { getAllTv } from "../../utils/generateUrl";
import { useLocation } from "react-router-dom";
import { tvCategoryMenu } from "./config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CardMovie from "../../components/CardMovie";

const TVShow = () => {
    const location = useLocation();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [actualTVList, setActualTVList] = useState([]);

    const pathSegments = location.pathname.split("/");
    const lastPathSegment = pathSegments[pathSegments.length - 1];

    useEffect(() => {
        tvCategoryMenu.forEach(({ requestUrl, text }, idx) => {
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
                        .then(setActualTVList)
                        .catch(setError)
                        .finally(() => setIsLoading(false));
                }
            } catch (error) {}
        });
    }, [lastPathSegment]);
    console.log(actualTVList);
    /* 
    const popularTv = useGetData(getAllTv("on_the_air"));
    const topRatred = useGetData(getAllTv("top_rated"));
    console.log(popularTv); */
    return (
        <div className=" max-w-[70%] m-auto my-7">
            {isLoading && <Loading />}
            {!!error && !isLoading && <Error error={error} />}
            <ul className="flex flex-wrap  justify-around gap-x-4 gap-y-7">
                {actualTVList.results &&
                    !isLoading &&
                    !error &&
                    actualTVList.results.map(({ name, id, poster_path }) => (
                        <li
                            className="min-h-[350px] max-w-[200px] shadow-lg  transition-all hover:-translate-y-6"
                            key={`movies_${name}_${id}`}
                        >
                            <CardMovie
                                topic="tvPage"
                                id={id}
                                title={name}
                                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default TVShow;
