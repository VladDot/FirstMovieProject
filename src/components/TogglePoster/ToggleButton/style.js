import clsx from "clsx";

export const getStyles = (isActive) => ({
    trendingButton: clsx(
        "  rounded-full px-3 minmin:px-5 duration-300 transition ease-in min-h-[35px]  text-aqua",
        { "bg-blue border-blue": isActive },
        { " duration-300 transition ease-in": !isActive }
    ),
});
