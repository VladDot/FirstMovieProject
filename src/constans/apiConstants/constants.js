export const { REACT_APP_API_KEY } = process.env;

export const API_URL = `https://api.themoviedb.org/3/`;
/* Movies  */
export const API_MOVIES_NOW_PLAYING = `${API_URL}movie/now_playing?language=en-US&page=1`;

export const API_MOVIES_POPULAR = `${API_URL}movie/popular?language=en-US&page=1`;

export const API_MOVIES_TOP_RATED = `${API_URL}movie/top_rated?language=en-US&page=1`;

export const API_MOVIES_UPCOMING = `${API_URL}movie/upcoming?language=en-US&page=1`;

/* Movies Tv details */
export const API_MOVIE_CHANGE = `${API_URL}movie/movie_id/changes?page=1`;

export const API_TV_CHANGE = `${API_URL}tv/series_id/changes?page=1`;

///////////////
export const API_SEARCH_MOVIE = `${API_URL}search/movie?include_adult=false&language=en-US&page=1`;
////////////
export const API_MOVIE_TRANDING_TODAY = `${API_URL}trending/movie/day?language=en-US`;

export const API_MOVIE_TRANDING_WEEK = `${API_URL}trending/movie/week?language=en-US`;
/* TV SHOWS */
export const API_POPULAR_TV_SHOWS = `${API_URL}tv/popular?language=en-US&page=1`;

export const API_AIRING_TODAY_TV_SHOWS = `${API_URL}tv/airing_today?language=en-US&page=1`;

export const API_ON_RHE_AIR_TV_SHOWS = `${API_URL}tv/on_the_air?language=en-US&page=1`;

export const API_TOP_RATED_TV_SHOWS = `${API_URL}tv/top_rated?language=en-US&page=1`;

/* People */
export const API_PEOPLE_LIST = `${API_URL}person/popular?language=en-US&page=1`;

export const API_PERSON = `${API_URL}person/5?language=en-US`;
