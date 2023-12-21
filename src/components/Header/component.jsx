import React from "react";

import Logo from "../logo/component";
import NavBar from "./navBar/componetns";
import RightMenu from "./rightMenu/component";

const Header = () => {
    return (
        <header className="sticky z-[999] w-full h-auto text-mainText flex items-center text-center top-0">
            <div className="absolute top-0 left-0 bg-blue -z-[1] w-full h-full"></div>
            <div className="w-[60%] m-0 minmin:max-w-[70%] md:w-full flex gap-6 items-center px-2 py-2  minmin:mx-5 md:mx-auto minmin:px-4 ">
                <div className="flex items-center max-w-[60%] minmin:max-w-[70%] w-full ">
                    <Logo
                        styleWidth="w-[130px]
                    h-14 p-2"
                    />
                    <NavBar />
                </div>

                <RightMenu />
            </div>
        </header>
    );
};

export default Header;
