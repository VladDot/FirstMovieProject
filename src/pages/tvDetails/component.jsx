import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useSetDataRedux";
import { getTv } from "../../utils/generateUrl";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const TVPage = () => {
    const params = useParams();
    /*     const tvPage = useGetData(getTv(params.tvId)); */
    /*   console.log(tvPage); */

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [dataTV, setDataTV] = useState(undefined);
    const [bgUrl, setBgUrl] = useState("");
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
                        `https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${res.backdrop_path}`
                    );
                })
                .catch((e) => {
                    console.error("Error during fetch:", e);
                })
                .finally(() => setIsLoading(false));
        } catch (error) {}
    }, []);
    console.log(dataTV);
    return (
        <div
            className="max-w-full h-[80.5vh] bg-cover bg-center "
            style={{ backgroundImage: `url(${bgUrl})` }}
        >
            {isLoading && <Loading />}
            {!!error && !isLoading && <Error error={error} />}
            {dataTV && !isLoading && !error && (
                <div className="flex gap-5 bg-cover bg-center lg:max-w-[70%] 2xl:max-w-[70%]  h-full m-auto backdrop-blur-[2px]">
                    <div className="lg:w-[70%] 2xl:w-[70%] my-4">
                        <img
                            className=" "
                            src={`https://image.tmdb.org/t/p/w500/${dataTV.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className="w-full ">
                        <h1>{dataTV.title}</h1>
                        <p>{dataTV.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TVPage;
