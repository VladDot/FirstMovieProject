import clsx from "clsx";

export const getStyless = (isActive) => ({
    trendingButton: clsx(
        "  rounded-full px-5 duration-300 transition ease-in min-h-[35px]  text-aqua",
        { "bg-aqua border-aqua text-blue": isActive },
        { " duration-300 transition ease-in": !isActive }
    ),
});
