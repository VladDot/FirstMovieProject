import { getAllMovies } from "../../utils/generateUrl";

export const moviesCategoryMenu = [
    { text: "popular", requestUrl: getAllMovies("popular") },
    { text: "now_playing", requestUrl: getAllMovies("now_playing") },
    { text: "upcoming", requestUrl: getAllMovies("upcoming") },
    { text: "top_rated", requestUrl: getAllMovies("top_rated") },
];
