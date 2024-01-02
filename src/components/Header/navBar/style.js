import clsx from "clsx";

export const getStyles = (isActiveBurger) => ({
    mobile: clsx(
        "border-2 border-black fixed  top-0 right-[0] w-full  h-full  py-0   ",
        {
            " after:rotate-90 after:bottom-0 before:rotate-90 before:top-0":
                isActiveBurger,
        },
        { "translate-x-full  ": !isActiveBurger }
    ),

    burgerMenu: clsx(
        "absolute flex items-center  justify-center right-0 top-0 z-50 transition-all duration-700  shadow-2xl  after:rotate-90 after:bottom-0 before:rotate-90 before:top-0 ",
        { "w-full h-screen bg-blue z-50 whitespace-nowrap ": isActiveBurger },
        { "w-[100px] h-[100px] rounded-bl-full bg-aqua": !isActiveBurger }
    ),

    navigation: clsx(
        "animation-fadeIn  text-4xl p-2 max-h-full w-full flex flex-col items-center justify-center delay-700 transition-transform ",
        {
            "": isActiveBurger,
        },
        {
            "h-0 overflow-hidden ": !isActiveBurger,
        }
    ),

    burger: clsx(
        " relative w-[21px] top-1/2 h-0.5 block after:origin-top-left before:origin-bottom-left transition-transform duration-300 transition-opacity after:ease-in-out after:absolute after:block after:w-full after:h-full  after:content-content-[''] after:-top-[7px] before:ease-in-out before:absolute before:block before:w-full before:h-full  before:content-[''] before:top-[7px]",
        {
            "after:rotate-45 after:bg-aqua before:-rotate-45 before:bg-aqua hover:scale-150":
                isActiveBurger,
        },
        { "bg-blue after:bg-blue before:bg-blue": !isActiveBurger }
    ),
});
