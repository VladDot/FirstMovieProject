import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ id, title, src, topic }) => {
    return (
        <>
            <Link
                className="w-full flex flex-wrap justify-center h-full"
                to={`/${topic}/${id}`}
                key={id + title}
            >
                <img
                    className=" rounded-md max-w-[200px] max-h-[300px]"
                    src={src}
                    alt={title}
                />
                <h2 className="text-center h-auto mt-5 mb-2  overflow-auto w-full">
                    {title}
                </h2>
            </Link>
        </>
    );
};

export default CardMovie;
