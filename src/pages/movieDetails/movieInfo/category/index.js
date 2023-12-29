import React from "react";

export const Category = ({ title, data }) => {
    return (
        <div className=" flex flex-wrap gap-2">
            <span>{title}</span>
            {data &&
                data.map(({ name }, index) => (
                    <span key={`movie_${name}`}>
                        {name}
                        {index === data.length - 1 ? "." : ","}
                    </span>
                ))}
        </div>
    );
};
