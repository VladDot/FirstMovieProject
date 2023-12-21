import React from "react";
import { Link } from "react-router-dom";

const Errors = () => {
    return (
        <div className="m-5 text-center">
            <h1 className="mb-10">
                Oops! We can't find the page you're looking for
            </h1>
            <Link
                className="text-3xl hover:text-aqua transition duration-300 ease-in-out"
                to="/"
            >
                Home
            </Link>
        </div>
    );
};

export default Errors;
