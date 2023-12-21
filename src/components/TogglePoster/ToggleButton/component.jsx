import React from "react";

import { getStyles } from "./style";

const ToggleButton = ({ text, btnId, activeId, setActiveId }) => {
    const { trendingButton } = getStyles(activeId === btnId);
    return (
        <>
            <button
                className={trendingButton}
                onClick={() => setActiveId(btnId)}
            >
                {text}
            </button>
        </>
    );
};

export default ToggleButton;
