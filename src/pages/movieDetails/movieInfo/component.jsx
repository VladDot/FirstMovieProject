import React from "react";
import noImg from "../../../assets/img/no_photo.png";
import Player from "../../../components/Player/component";
import { Mobile } from "../../../responsive/component";
import Loading from "../../../components/Loading";

const MovieInfo = ({ dataMovie }) => {
    console.log(dataMovie);
    const {
        title,
        release_date,
        genres,
        runtime,
        overview,
        production_companies,
        spoken_languages,
        first_air_date,
    } = dataMovie;
    return (
        <>
            {!dataMovie && <Loading />}
            {dataMovie && (
                <div>
                    <div className=" w-full mt-4 text-white p-2">
                        <div>
                            <span className="  text-left gap-5 items-center ">
                                <h1 className=" text-base minmin:text-xl">
                                    {title}(
                                    {(release_date &&
                                        release_date.slice(0, 4)) ||
                                        (first_air_date &&
                                            first_air_date.slice(0, 4))}
                                    )
                                </h1>
                            </span>
                        </div>

                        <div>
                            <h1 className="mb-3 ">Overview</h1>
                            <p>{overview}</p>
                        </div>
                        <br />
                        <div className=" gap-5">
                            <span className=" flex flex-wrap gap-2 ">
                                Language:
                                {spoken_languages &&
                                    spoken_languages.map(({ name }, index) =>
                                        index ===
                                        spoken_languages.length - 1 ? (
                                            <p key={`movie_${name}`}>{name}.</p>
                                        ) : (
                                            <p key={`movie_${name}`}>{name},</p>
                                        )
                                    )}
                            </span>
                            <br />
                            <span>
                                <p>
                                    Runtime: {Math.round(runtime / 60)}h
                                    {runtime % 60}m
                                </p>
                            </span>
                            <br />
                            <span>
                                <p>Release data: {release_date}</p>
                            </span>
                            <br />
                            <span className="flex flex-wrap gap-2">
                                Genres:
                                {genres &&
                                    genres.map(({ name }, index) =>
                                        index === genres.length - 1 ? (
                                            <p key={`movie_${name}`}>{name}.</p>
                                        ) : (
                                            <p key={`movie_${name}`}>{name},</p>
                                        )
                                    )}
                            </span>
                            <br />
                            <span className=" flex flex-wrap gap-2">
                                Production companies:
                                {production_companies &&
                                    production_companies.map(
                                        ({ name }, index) =>
                                            index === genres.length - 1 ? (
                                                <p key={`movie_${name}`}>
                                                    {name}.
                                                </p>
                                            ) : (
                                                <p key={`movie_${name}`}>
                                                    {name},
                                                </p>
                                            )
                                    )}
                            </span>
                        </div>

                        <div className="hidden  md:block md:h-[250px] md:w-full xl:h-[350px] m-auto mt-10 mb-6">
                            <Player />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieInfo;

const mock = [
    { adult: false, backdrop_path: "/wVJG3u5Ru9tInxYiTCrJr4MpJ7Z.jpg" },
];
