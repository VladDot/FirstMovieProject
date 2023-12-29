import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getTv } from "../../utils/generateUrl";

import TvInfo from "./tvInfo";
import { Mobile } from "../../responsive/component";
import Player from "../../components/Player/component";
import MovieBanner from "../movieDetails/movieDetailsBanner/component";

const TVPage = () => {
    const params = useParams();

    const [error, setError] = useState();
    const [bgUrl, setBgUrl] = useState("");
    const [dataTV, setDataTV] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(getTv(params.tvId))
                .then((res) => {
                    if (!res.ok) {
                        setError(res.status);
                    }
                    return res.json();
                })
                .then((res) => {
                    setDataTV(res);
                    setBgUrl(
                        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${res.backdrop_path}`
                    );
                })
                .catch((e) => {
                    console.error("Error during fetch:", e);
                })
                .finally(() => setIsLoading(false));
        } catch (error) {}
    }, []);

    return (
        <div
            className="relative bg-cover bg-right pb-6 p-2"
            style={{ backgroundImage: `url(${bgUrl})` }}
        >
            <div className="absolute inset-0 z-0 bg-black opacity-50 "></div>
            <div className="relative z-50  w-[80%] m-auto minSm:flex minSm:w-full  minSm:gap-3 lg:w-[80%] xl:w-[70%] ">
                <MovieBanner
                    poster_path={dataTV.poster_path}
                    isLoading={isLoading}
                />
                <TvInfo dataTV={dataTV} />
            </div>
            <Mobile>
                <div className="relative z-50  w-[80%] m-auto mt-6  border-2  border-white h-[300px] bg-gray-600 flex justify-center items-center">
                    <Player />
                </div>
            </Mobile>
        </div>
    );
};

export default TVPage;
