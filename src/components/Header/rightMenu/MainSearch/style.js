import clsx from "clsx";

export const getStyles = (isActive) => ({
    serchWrapper: clsx(
        "w-full py-5 flex justify-center absolute bottom-0 left-0 -z-[2] transition-all duration-300 backdrop-blur-[2px]",
        { "translate-y-full": isActive },
        { "": !isActive }
    ),
    searchButton: clsx(
        "px-3 p-1  hover:bg-aqua hover:scale-110 rounded-full transition ease-in duration-300",
        { "bg-aqua": isActive },
        { " ": !isActive }
    ),
});
