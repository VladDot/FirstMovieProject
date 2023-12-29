import { createBrowserRouter } from "react-router-dom";

import { PopularPeople, TVShow } from "../pages";

import App from "../App";

import { Error } from "../pages";
import Home from "../pages/home";
import Login from "../pages/login";
import Movies from "../pages/movies";
import TvDetails from "../pages/tvDetails";
import { routes } from "./routesConstants";
import SearchPage from "../pages/searchPage";
import Registration from "../pages/registration";
import Persona from "../pages/persona/component";
import MovieDetails from "../pages/movieDetails";

export const router = createBrowserRouter([
    {
        path: routes.home,
        errorElement: <Error />,
        element: <App />,
        children: [
            { path: routes.login, element: <Login /> },
            { path: routes.movies, element: <Movies /> },
            { path: routes.tvShowes, element: <TVShow /> },
            { path: routes.persone, element: <Persona /> },
            { path: routes.tvDetails, element: <TvDetails /> },
            { path: routes.people, element: <PopularPeople /> },
            { path: routes.searchPage, element: <SearchPage /> },
            { index: true, path: routes.home, element: <Home /> },
            { path: routes.registration, element: <Registration /> },
            { path: routes.movieDetails, element: <MovieDetails /> },
        ],
    },
]);
