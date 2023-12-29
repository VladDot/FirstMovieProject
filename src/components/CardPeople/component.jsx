import React from "react";
import { Link } from "react-router-dom";

const CardPeople = ({ profile_path, name, id }) => {
    return (
        <li
            className=" shadow-lg  transition-all hover:-translate-y-6"
            key={`123${name}_${id}`}
        >
            <Link to={`/people/persone/${id}`}>
                <img
                    className=" w-auto rounded-md h-auto "
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt=""
                />

                <h2 className="p-2">{name}</h2>
            </Link>
        </li>
    );
};

export default CardPeople;
