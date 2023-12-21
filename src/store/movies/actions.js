import {
    POPULAR_MOVIES,
    MOVIES_UPCOMING,
    MOVIES_TOP_RATED,
    MOVIES_NOW_PLAYING,
    TRENDING_MOVIES_DAY,
    TRENDING_MOVIES_WEEK,
} from "../types";

export const setPopularMovies = (payload) => ({
    type: POPULAR_MOVIES,
    payload,
});
export const setUpcomingMovies = (payload) => ({
    type: MOVIES_UPCOMING,
    payload,
});

export const setTopRateMovies = (payload) => ({
    type: MOVIES_TOP_RATED,
    payload,
});

export const setNowPlayingMovies = (payload) => ({
    type: MOVIES_NOW_PLAYING,
    payload,
});

export const setTrendingDayMovies = (payload) => ({
    type: TRENDING_MOVIES_DAY,
    payload,
});

export const setTrendingWeekMovies = (payload) => ({
    type: TRENDING_MOVIES_WEEK,
    payload,
});
