import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getStyles } from "./style";

const NavBarItem = ({
    url,
    name,
    categories,
    activeCategory,
    setActiveCategory,
}) => {
    const isActiveCategory = activeCategory === name;
    const { dropDown, linkMenu, link } = getStyles(isActiveCategory);

    return (
        <>
            {!categories && (
                <Link
                    className="w-fit p-1  hover:text-aqua duration-300 hover:scale-110 "
                    to={url}
                >
                    {name}
                </Link>
            )}

            {categories && (
                <div
                    className="relative whitespace-nowrap"
                    onClick={() =>
                        setActiveCategory(activeCategory === name ? "" : name)
                    }
                >
                    {<p className={`${link}`}>{name}</p>}

                    <div className={dropDown}>
                        {categories.map(({ name, url }, idx) => (
                            <Link
                                to={url}
                                key={`${name}-${idx}`}
                                className={linkMenu}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBarItem;
