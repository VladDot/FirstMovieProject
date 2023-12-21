import React from "react";
import { Link } from "react-router-dom";

import { LogoIcon } from "../../assets/icons/logo";
import { getStyles } from "../../mainGetStales/style";

const Logo = ({ style, styleWidth }) => {
    const { styles } = getStyles();
    return (
        <Link
            to={"/"}
            className={style}
        >
            <LogoIcon className={` ${styles} ${styleWidth}`} />
        </Link>
    );
};

export default Logo;
