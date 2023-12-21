import React from "react";
import { Link } from "react-router-dom";

import { getStyles } from "./style";

const BurgerNavBarItem = ({
    name,
    categories,
    url,
    activeCategory,
    setActiveCategory,
    onClick,
}) => {
    const isActiveCategory = activeCategory === name;
    const { category } = getStyles(isActiveCategory);
    return (
        <>
            {!categories && (
                <Link
                    onClick={onClick}
                    className="w-auto py-6  text-5xl hover:text-aqua hover:scale-110 duration-300"
                    to={url}
                >
                    {name}
                </Link>
            )}

            {categories && (
                <div
                    onClick={() =>
                        setActiveCategory(activeCategory === name ? "" : name)
                    }
                >
                    <div className="w-full ">
                        <p className="relative w-auto py-6 pr-6 text-5xl cursor-pointer hover:text-aqua hover:scale-110 duration-300 after:w-[15px]  block after:absolute after:bg-main after:h-0.5 after:rotate-[60deg] before:w-[15px] before:h-0.5 before:bg-main before:absolute before:-rotate-[60deg]  hover:after:bg-aqua hover:before:bg-aqua after:right-[2.7px] before:-right-[4.5px] after:top-1/2 after:mt-1 before:mt-1 before:top-1/2 after:translate-y-1/2 before:translate-y-1/2 ">
                            {name}
                        </p>
                    </div>

                    <div className="overflow-hidden relative ">
                        <div className={category}>
                            {categories.map(({ name, url }, idx) => (
                                <Link
                                    onClick={onClick}
                                    className="p-3 hover:text-aqua hover:translate-x-4 duration-300 "
                                    to={url}
                                    key={`${name}-${idx}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BurgerNavBarItem;
