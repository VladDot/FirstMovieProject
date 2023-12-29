import React from "react";

export const CategoryTv = ({ category, title }) => {
    return (
        <div className=" flex flex-wrap gap-2">
            <span>{title}</span>
            {category &&
                category.map(({ name }, index) => (
                    <span key={`movie_${name}`}>
                        {name}
                        {index === category.length - 1 ? "." : ","}
                    </span>
                ))}
        </div>
    );
};
