import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../assets/icons/logo";
import { getStyles } from "../../mainGetStales/style";

import clsx from "clsx";

const Logo = ({ style, styleWidth }) => {
    const { styles } = getStyles();
    return (
        <Link
            to={"/"}
            className={style}
        >
            <LogoIcon className={clsx(styles, styleWidth)} />
        </Link>
    );
};

export default Logo;
