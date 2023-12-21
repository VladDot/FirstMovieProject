import { connect } from "react-redux";

import useGetData from "../../hooks/data";
import useSetDataRedux from "../../hooks/useSetDataRedux";
import {
    setTrendingDayMovies,
    setTrendingWeekMovies,
    setPopularMovies,
} from "../../store/movies/actions";
import { setPopularPeoples } from "../../store/people/action";
import { setPopularTVShow } from "../../store/tvShow/action";
import {
    getPopular,
    getMoviesTrending,
    getSearchedMovies,
} from "../../utils/generateUrl";

import MainBanner from "../../components/MainBanner";
import { useState } from "react";
import { trandingBtns } from "./config";
import PosterToggleBg from "../../components/PosterWithBg/component";
import TogglePoster from "../../components/TogglePoster/component";
import Poster from "../../components/Poster/component";
import PopularPeople from "../popularPeople/component";
import "./style.css";
const Home = ({
    setTrendingDayMovies,
    trandingDayMovies,
    setTrendingWeekMovies,
    setPopularMovies,
    setPopularPeoples,
    setPopularTVShow,
}) => {
    const [actualList, setActualList] = useState([]);
    /*     useSetDataRedux(getMoviesTrending("day"), setTrendingDayMovies);
    useSetDataRedux(getMoviesTrending("week"), setTrendingWeekMovies);
    useSetDataRedux(getPopular("movie"), setPopularMovies);
    useSetDataRedux(getPopular("person"), setPopularPeoples);
    useSetDataRedux(getPopular("tv"), setPopularTVShow); */

    //TODO обработать запроси на сервер popularTV, popularMovie, popularPeople

    const searchMovie = useGetData(getSearchedMovies("spider"));

    const popularTV = useGetData(getPopular("tv"));
    /*     const popularPeople = useGetData(getPopular("person")); */
    const trendingMoviesDay = useGetData(getMoviesTrending("day"));
    /*     console.log(trendingMoviesDay.data.results); */

    return (
        <div className="max-w-[1300px] m-auto ">
            <MainBanner />
            <div className="relative">
                <span className="afterLinee"></span>
                {/* relative after:w-[60px] after:z-[1000] after:top-0 after:right-0 after:absolute after:h-full  after:content-[''] aft after:from-slate-50 to-slate-300 */}
                <TogglePoster btns={trandingBtns} />

                <PosterToggleBg btns={trandingBtns} />
            </div>
            {/*     <Poster /> */}

            {/*       <Poster
                trendingMoviesDay={trendingMoviesDay}
                firtsUrlData={getPopular("tv")}
            /> */}
        </div>

        /*  <div className="text-black w-[1300px]  mx-auto ">
            <div
                className={`mx-10 ${
                    trandingDayMovies.loading ? "bg-red-500" : ""
                }`}
            >
                
        </div>*/
    );
};

/* const mapStateToProps = (state) => ({
    trandingDayMovies: state.moviState.trendingDayMovies,
    trandingWeekMovies: state.moviState.trendingWeekMovies,
    popularMovies: state.moviState.popularMovies,
    popularPeoples: state.peopleState.popularPeoples,
    popularTvShows: state.tvShowState.popularTvShows,
});

const mapDispatchToProps = {
    setTrendingDayMovies,
    setTrendingWeekMovies,
    setPopularMovies,
    setPopularPeoples,
    setPopularTVShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home); */
export default Home;
