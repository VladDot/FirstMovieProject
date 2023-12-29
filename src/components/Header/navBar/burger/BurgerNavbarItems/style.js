import clsx from "clsx";

export const getStyles = (isActiveCategory) => ({
    category: clsx(
        "  flex flex-col w-auto text-left  transition-all  duration-1000   ",
        {
            "h-[280px] ": isActiveCategory,
        },
        {
            "overflow-hidden h-0  p-0": !isActiveCategory,
        }
    ),
});
