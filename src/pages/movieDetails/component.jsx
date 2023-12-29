import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../../utils/generateUrl";

import { useGetData1 } from "../../hooks/useGetData";

import MovieInfo from "./movieInfo";
import Loading from "../../components/Loading";
import { Mobile } from "../../responsive/component";
import Player from "../../components/Player/component";
import MovieBanner from "./movieDetailsBanner/component";

const MovieDetails = () => {
    const params = useParams();
    const [bgUrl, setBgUrl] = useState("");
    const [dataMovie, setDataMovie] = useState("");
    const { data, error, isLoading } = useGetData1(getMovie(params.movieId));

    useEffect(() => {
        setDataMovie(data);
        setBgUrl(
            `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`
        );
    }, [data]);

    const { poster_path, title } = dataMovie;

    return (
        <>
            {isLoading && <Loading />}

            {!isLoading && !error && (
                <div
                    className="relative bg-cover bg-right pb-6 p-2"
                    style={{ backgroundImage: `url(${bgUrl})` }}
                >
                    <div className="absolute inset-0 z-0 bg-black opacity-50 "></div>

                    <div className="relative z-50  w-[80%] m-auto minSm:flex minSm:w-full  minSm:gap-3 lg:w-[80%] xl:w-[70%] ">
                        <MovieBanner
                            title={title}
                            isLoading={isLoading}
                            poster_path={poster_path}
                        />

                        <MovieInfo dataMovie={dataMovie} />
                    </div>

                    <Mobile>
                        <div className=" z-50  w-[80%] m-auto mt-6   h-[300px]">
                            <Player />
                        </div>
                    </Mobile>
                </div>
            )}
        </>
    );
};

export default MovieDetails;
