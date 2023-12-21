import { routes } from "../../../routes/routesConstants";

export const navBar = [
    {
        name: "Movies",
        categories: [
            {
                name: "Popular",
                url: routes.moviesCategory.popular,
            },
            { name: "Now playing", url: routes.moviesCategory.nowPlaying },
            { name: "Upcoming", url: routes.moviesCategory.upcoming },
            { name: "Top rated", url: routes.moviesCategory.topRated },
        ],
    },
    {
        name: "TV Shows",
        categories: [
            {
                name: "Popular",
                url: routes.tvShowesCategory.popular,
            },
            { name: "Airing today", url: routes.tvShowesCategory.airingToday },
            { name: "On tv", url: routes.tvShowesCategory.onTv },
            { name: "Top rated", url: routes.tvShowesCategory.topRated },
        ],
    },
    {
        name: "People",
        url: routes.people,
    },
];
