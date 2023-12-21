import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../utils/generateUrl";

import { MobileMd, NotMobileMd, Mobile } from "../../responsive/component";

// import Error from "../../components/Error";
// import Loading from "../../components/Loading";
// import noImg from "../../assets/img/no_photo.png";
import Player from "../../components/Player/component";
// import { generateImgUrl } from "../../helpers";

import MovieBanner from "./movieDetailsBanner/component";
import MovieInfo from "./movieInfo";

const MovieDetails = () => {
    const params = useParams();
    const [error, setError] = useState();
    const [bgUrl, setBgUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [dataMovie, setDataMovie] = useState("");
    console.log(dataMovie);
    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(getMovie(params.movieId))
                .then((res) => {
                    if (!res.ok) {
                        setError(res.status);
                    }
                    return res.json();
                })
                .then((res) => {
                    setDataMovie(res);
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
    console.log(dataMovie);
    const { poster_path, title } = dataMovie;

    return (
        <div
            className="relative bg-cover bg-right pb-6 p-2"
            style={{ backgroundImage: `url(${bgUrl})` }}
        >
            <div className="absolute inset-0 z-0 bg-black opacity-50 "></div>
            <div className="relative z-50  w-[80%] m-auto minSm:flex minSm:w-full  minSm:gap-3 lg:w-[80%] xl:w-[70%] ">
                <MovieBanner
                    poster_path={poster_path}
                    isLoading={isLoading}
                    title={title}
                />
                <MovieInfo dataMovie={dataMovie} />
            </div>
            <Mobile>
                <div className="relative z-50  w-[80%] m-auto mt-6  border-2  border-white h-[300px] bg-gray-600 flex justify-center items-center">
                    <Player />
                </div>
            </Mobile>
        </div>
    );
};

export default MovieDetails;
