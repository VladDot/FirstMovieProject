import React from "react";

import { generateImgUrl } from "../../../helpers";

import Loading from "../../../components/Loading";
import noImg from "../../../assets/img/no_photo.png";

const MovieBanner = ({ name, poster_path, isLoading }) => {
    const imgSrc = poster_path
        ? generateImgUrl({ path: poster_path, size: "w500" })
        : noImg;

    return (
        <div className=" mb: w-full minSm:min-w-[50%] lg:max-w-[30%] ">
            {isLoading && <Loading />}

            {!isLoading && poster_path && (
                <img
                    className="block max-w-[550px] w-full aspect-[0.699] object-contain"
                    alt={name}
                    src={imgSrc}
                />
            )}
        </div>
    );
};

export default MovieBanner;
