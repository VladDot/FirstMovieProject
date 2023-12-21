import {
    AIRING_TODAY_TV_SHOWS,
    ON_THE_AIR_TV_SHOWS,
    POPULAR_TV_SHOWS,
    TOP_RATED_TV_SHOWS,
} from "../types";

export const setPopularTVShow = (payload) => ({
    type: POPULAR_TV_SHOWS,
    payload,
});
export const setAiringTodayTVShow = (payload) => ({
    type: AIRING_TODAY_TV_SHOWS,
    payload,
});
export const setOnTheAirTVShow = (payload) => ({
    type: ON_THE_AIR_TV_SHOWS,
    payload,
});
export const setTopRatedTVShow = (payload) => ({
    type: TOP_RATED_TV_SHOWS,
    payload,
});
