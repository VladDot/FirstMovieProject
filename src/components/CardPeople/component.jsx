import React from "react";
import { Link } from "react-router-dom";

const CardPeople = ({ profile_path, name, id }) => {
    return (
        <Link
            className=" "
            to={`/people/persone/${id}`}
        >
            <img
                className=" w-auto rounded-md h-auto "
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt=""
            />

            <h2 className="p-2">{name}</h2>
        </Link>
    );
};

export default CardPeople;
