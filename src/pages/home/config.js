import { getMoviesTrending } from "../../utils/generateUrl";

export const trandingBtns = [
    { text: "Today", requestUrl: getMoviesTrending("day") },
    { text: "This Week", requestUrl: getMoviesTrending("week") },
];
