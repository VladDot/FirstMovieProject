import { routes } from "../../../router/routesConstants";

export const navBar = [
    {
        name: "Movies",
        categories: [
            {
                name: "Popular",
                url: routes.moviesCategory.popular,
            },
            { name: "Upcoming", url: routes.moviesCategory.upcoming },
            { name: "Top rated", url: routes.moviesCategory.topRated },
            { name: "Now playing", url: routes.moviesCategory.nowPlaying },
        ],
    },
    {
        name: "TV Shows",
        categories: [
            {
                name: "Popular",
                url: routes.tvShowesCategory.popular,
            },
            { name: "On tv", url: routes.tvShowesCategory.onTv },
            { name: "Top rated", url: routes.tvShowesCategory.topRated },
            { name: "Airing today", url: routes.tvShowesCategory.airingToday },
        ],
    },
    {
        name: "People",
        url: routes.people,
    },
];
