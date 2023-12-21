import {
    MOVIES_NOW_PLAYING,
    MOVIES_TOP_RATED,
    MOVIES_UPCOMING,
    POPULAR_MOVIES,
    TRENDING_MOVIES_DAY,
    TRENDING_MOVIES_WEEK,
} from "../types";

const initialMoviesState = {
    popularMovies: {},
    upcomingMovies: [],
    topRateMovies: [],
    nowPlayingMovies: [],
    trendingWeekMovies: {},
    trendingDayMovies: {},
};

export const moviState = (state = initialMoviesState, action) => {
    switch (action.type) {
        case POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: { ...action.payload },
            };
        case MOVIES_UPCOMING:
            return {
                ...state,
                upcomingMovies: [...action.payload],
            };
        case MOVIES_TOP_RATED:
            return {
                ...state,
                topRateMovies: [...action.payload],
            };
        case MOVIES_NOW_PLAYING:
            return {
                ...state,
                nowPlayingMovies: [...action.payload],
            };
        case TRENDING_MOVIES_DAY:
            return {
                ...state,
                trendingDayMovies: { ...action.payload },
            };
        case TRENDING_MOVIES_WEEK:
            return {
                ...state,
                trendingWeekMovies: { ...action.payload },
            };
        default:
            return state;
    }
};
