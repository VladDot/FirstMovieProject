import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navBar } from "../config";
import { getStyles } from "../style";
import { authorization } from "../../rightMenu/config";
import { MobileMd } from "../../../../responsive/component";
import BurgerNavBarItem from "./BurgerNavbarItems/component";

const Burger = () => {
    const [activeCategory, setActiveCategory] = useState("");
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const { burgerMenu, burger, navigation } = getStyles(isActiveBurger);

    const blockScroll = () => {
        setIsActiveBurger(!isActiveBurger);
        document.body.style.overflow = isActiveBurger ? "auto" : "hidden";
    };
    return (
        <>
            <label>
                <div className={burgerMenu}>
                    <div
                        className="w-[24px] h-[22px] top-[20px] right-[20px] absolute cursor-pointer"
                        onClick={blockScroll}
                    >
                        <span className={burger}></span>
                    </div>

                    {isActiveBurger && (
                        <div className={navigation}>
                            {navBar.map((navBarItem, idx) => (
                                <BurgerNavBarItem
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                    setIsActiveBurger={setIsActiveBurger}
                                    {...navBarItem}
                                    key={`navbar ${idx}`}
                                    onClick={blockScroll}
                                />
                            ))}
                            <MobileMd>
                                {authorization.map(({ name, url }, idx) => (
                                    <Link
                                        className="py-4 animate-fadeIn hover:text-aqua hover:scale-110 duration-300"
                                        to={url}
                                        key={`${idx}-${name}-auth`}
                                        onClick={blockScroll}
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </MobileMd>
                        </div>
                    )}
                </div>
            </label>
        </>
    );
};

export default Burger;
