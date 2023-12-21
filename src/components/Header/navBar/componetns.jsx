import { navBar } from "./config";

import { Desktop, NotDesktop } from "../../../responsive/component";
import Burger from "./burger/component";
import NavBarItem from "./navBarItem/component";
import { useState } from "react";

const NavBar = () => {
    const [activeCategory, setActiveCategory] = useState("");

    return (
        <div>
            <NotDesktop>
                <Burger />
            </NotDesktop>
            <Desktop>
                <div className=" flex  text-center items-center ml-4 text-lg gap-8 ">
                    {navBar.map((navBarItem, idx) => (
                        <NavBarItem
                            {...navBarItem}
                            key={`navbar ${idx}`}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                    ))}
                </div>
            </Desktop>
        </div>
    );
};

export default NavBar;
