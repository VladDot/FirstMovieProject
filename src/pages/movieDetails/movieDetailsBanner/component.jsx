import React from "react";

import { generateImgUrl } from "../../../helpers";
import noImg from "../../../assets/img/no_photo.png";
import Loading from "../../../components/Loading";
const MovieBanner = ({ poster_path, title, isLoading }) => {
    console.log(poster_path);
    console.log(isLoading);

    return (
        <div className=" mb: w-full minSm:min-w-[50%] lg:max-w-[30%] ">
            {isLoading && <Loading />}
            {poster_path ? (
                <img
                    src={generateImgUrl({
                        size: "w500",
                        path: poster_path,
                    })}
                    alt=""
                />
            ) : (
                <img
                    src={noImg}
                    alt=""
                />
            )}
        </div>
    );
};

export default MovieBanner;
