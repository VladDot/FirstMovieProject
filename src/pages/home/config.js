import {
    getPopular,
    getMoviesTrending,
    getSearchedMovies,
} from "../../utils/generateUrl";

export const trandingBtns = [
    { text: "Today", requestUrl: getMoviesTrending("day") },
    { text: "This Week", requestUrl: getMoviesTrending("week") },
];
