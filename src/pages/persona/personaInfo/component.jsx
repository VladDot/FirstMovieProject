import React, { useState } from "react";

import { getStyles } from "./style";

const PersonaInfo = ({ name, birthday, biography }) => {
    const [isActive, setIsActive] = useState(false);

    const { readMore, blurLine } = getStyles(isActive);

    return (
        <div>
            <div className=" relative">
                <h1 className="font-bold text-4xl text-center mt-3 minSm:text-3xl">
                    {name}
                </h1>
                <h2 className="font-bold text-2xl text-center mt-3">
                    {birthday}
                </h2>
                <h2 className="mb-2 mt-5 font-semibold	pl-2 text-xl">
                    Biography :
                </h2>
                <p
                    className={readMore}
                    onClick={() => setIsActive(!isActive)}
                >
                    {biography ? biography : "biography is missing"}
                </p>
                <span
                    className={blurLine}
                    onClick={() => setIsActive(!isActive)}
                ></span>
            </div>
        </div>
    );
};

export default PersonaInfo;
