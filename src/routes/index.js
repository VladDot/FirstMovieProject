import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";

import { routes } from "./routesConstants";

import {
    Home,
    Login,
    Error,
    Movies,
    TVShow,
    TVPage,
    Person,
    Registration,
    SearchPage,
    MovieDetails,
    PopularPeople,
} from "../pages";

const Routes = () => {
    return (
        <RoutesReact>
            <Route
                path={routes.home}
                element={<Home />}
            />
            <Route
                path={routes.login}
                element={<Login />}
            />
            <Route
                path={routes.registration}
                element={<Registration />}
            />
            <Route
                path={routes.movies}
                element={<Movies />}
            />
            <Route
                path={routes.movieDetails}
                element={<MovieDetails />}
            />
            <Route
                path={routes.tvShowes}
                element={<TVShow />}
            />
            <Route
                path={routes.people}
                element={<PopularPeople />}
            />
            <Route
                path={routes.persone}
                element={<Person />}
            />
            <Route
                path={routes.tvDetails}
                element={<TVPage />}
            />
            <Route
                path={routes.searchPage}
                element={<SearchPage />}
            />
            <Route
                path={routes.error}
                element={<Error />}
            />
        </RoutesReact>
    );
};

export default Routes;
