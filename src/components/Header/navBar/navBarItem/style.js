import clsx from "clsx";

export const getStyles = (isActiveCategory) => ({
    linkMenu: clsx(
        "p-1 pl-3 text-left ",
        {
            "hover:text-burgerItemsText opacity-100 hover:scale-110 hover:text-aqua duration-300 animate-fadeInDropMenu":
                isActiveCategory,
        },
        { "": !isActiveCategory }
    ),
    dropDown: clsx(
        "bg-blue w-max absolute top-full flex flex-col p-2  left-1/2  -translate-x-1/2 transition-all duration-500",
        { "h-[170px] opacity-100 ease-in": isActiveCategory },
        { "h-0 overflow-hidden opacity-0 ": !isActiveCategory }
    ),
    link: clsx(
        "relative hover:scale-110 after:h-0.5 after:w-[10px]  after:absolute after:right-[-6px] after:inline-block after:top-1/2 after:translate-y-1/2 after:rotate-[60deg] before:w-[10px] before:h-0.5 before:inline-block before:right-[-10px] before:top-1/2 before:translate-y-1/2 before:-rotate-[60deg]  before:absolute px-2  py-1 w-full group cursor-pointer hover:text-aqua duration-300 after:hover:bg-aqua before:hover:bg-aqua after:duration-300 before:duration-300 ",
        { "text-aqua after:bg-aqua before:bg-aqua ": isActiveCategory },
        { "before:bg-main after:bg-main": !isActiveCategory }
    ),
});
