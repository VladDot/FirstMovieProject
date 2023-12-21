import React from "react";

const Error = ({ error }) => {
    return (
        <div className="w-[70%] m-auto">
            <p className="p-2 text-center text-2xl font-bold"> Error {error}</p>
        </div>
    );
};

export default Error;
