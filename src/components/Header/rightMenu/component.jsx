import React from "react";
import { Link } from "react-router-dom";

import { getStyles } from "./style";
import MainSearch from "./MainSearch";
import { authorization } from "./config";
import { NotMobileMd } from "../../../responsive/component";

const RightMenu = () => {
    const { style } = getStyles();
    return (
        <>
            <div className="flex gap-3 md:gap-6  py-2 text-lg min-[320px]:mr-auto sm:mx-0 md:mx-auto lg:ml-auto lg:mx-0">
                <NotMobileMd>
                    {authorization.map(({ name, url }, idx) => (
                        <Link
                            className={style}
                            to={url}
                            key={`${idx}-${name}-auth`}
                        >
                            {name}
                        </Link>
                    ))}
                </NotMobileMd>
                <MainSearch />
            </div>
        </>
    );
};

export default RightMenu;
