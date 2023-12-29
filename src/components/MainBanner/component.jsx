import React from "react";

const MainBanner = () => {
    return (
        <div className=" w-full m-auto max-w-[1300px] h-[400px] bg-gradient-to-r from-blue to-aqua hover:bg-gradient-to-l">
            <h1 className=" flex items-center justify-center w-full  h-full font-bold  text-4xl minmin:text-6xl lg:text-8xl md:text-7xl from-aqua  to-blue bg-gradient-to-r bg-clip-text text-transparent hover:bg-gradient-to-l">
                F I L M N E T
            </h1>
        </div>
    );
};

export default MainBanner;
