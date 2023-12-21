import React from "react";

import { getStyless } from "./style";

const ToggleButton = ({ text, btnId, activeId, setActiveId }) => {
    const { trendingButton } = getStyless(activeId === btnId);
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
