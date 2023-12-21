import clsx from "clsx";
import "./styles.css";

export const getStyles = (isActive) => ({
    readMore: clsx(
        " w-auto flex p-2 ",
        { "height-full": isActive },
        { "max-h-[220px] overflow-hidden ": !isActive }
    ),
    blurLine: clsx(" ", { " ": isActive }, { " afterLine": !isActive }),
});
/* absolute right-0 bottom-0 z-50  */
