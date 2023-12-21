import { getAllTv } from "../../utils/generateUrl";

export const tvCategoryMenu = [
    { text: "popular", requestUrl: getAllTv("popular") },
    { text: "airing_today", requestUrl: getAllTv("airing_today") },
    { text: "on_the_air", requestUrl: getAllTv("on_the_air") },
    { text: "top_rated", requestUrl: getAllTv("top_rated") },
];
