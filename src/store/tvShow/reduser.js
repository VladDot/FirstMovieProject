import {
    AIRING_TODAY_TV_SHOWS,
    ON_THE_AIR_TV_SHOWS,
    POPULAR_TV_SHOWS,
    TOP_RATED_TV_SHOWS,
} from "../types";

const initialPTvShowState = {
    popularTvShows: {},
    airingTodayTVShow: [],
    onTheAirTVShow: [],
    topRatedTVShow: [],
};

export const tvShowState = (state = initialPTvShowState, action) => {
    switch (action.type) {
        case POPULAR_TV_SHOWS:
            return {
                ...state,
                popularTvShows: { ...action.payload },
            };
        case AIRING_TODAY_TV_SHOWS:
            return {
                ...state,
                airingTodayTVShow: [...action.payload],
            };
        case ON_THE_AIR_TV_SHOWS:
            return {
                ...state,
                onTheAirTVShow: [...action.payload],
            };
        case TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTVShow: [...action.payload],
            };

        default:
            return state;
    }
};
