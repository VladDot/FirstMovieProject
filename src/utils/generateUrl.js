import { API_URL, REACT_APP_API_KEY } from "../constans/apiConstants/constants";

export const getAllMovies = (topic) =>
    `${API_URL}movie/${topic}?api_key=${REACT_APP_API_KEY}`;

export const getSearchedMovies = (search) =>
    `${API_URL}search/movie?query=${search}&api_key=${REACT_APP_API_KEY}`;

export const getMovie = (id) =>
    `${API_URL}movie/${id}?api_key=${REACT_APP_API_KEY}`;

export const getPeople = () =>
    `${API_URL}person/popular?api_key=${REACT_APP_API_KEY}`;

export const getMoviesTrending = (topic) =>
    `${API_URL}trending/movie/${topic}?api_key=${REACT_APP_API_KEY}`;

export const getAllTv = (topic) =>
    `${API_URL}tv/${topic}?api_key=${REACT_APP_API_KEY}`;

export const getTv = (id) => `${API_URL}tv/${id}?api_key=${REACT_APP_API_KEY}`;

export const getPerson = (id) =>
    `${API_URL}person/${id}?api_key=${REACT_APP_API_KEY}`;

export const getPopular = (topic) =>
    `${API_URL}/${topic}/popular?api_key=${REACT_APP_API_KEY}`;
