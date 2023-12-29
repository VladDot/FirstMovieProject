import React from "react";

import Loading from "../../../components/Loading";
import Player from "../../../components/Player/component";

import { Category } from "./category";

const MovieInfo = ({ dataMovie }) => {
    const {
        title,
        genres,
        runtime,
        overview,
        release_date,
        first_air_date,
        spoken_languages,
        production_companies,
    } = dataMovie;
    return (
        <>
            {!dataMovie && <Loading />}

            {dataMovie && (
                <>
                    <div className=" w-full mt-4 text-white p-2">
                        <h1 className="text-center mb-4 minSm:text-left">
                            {title}(
                            {(release_date && release_date.slice(0, 4)) ||
                                (first_air_date && first_air_date.slice(0, 4))}
                            )
                        </h1>

                        <div>
                            <h1 className="mb-3 ">Overview :</h1>

                            <p>{overview}</p>
                        </div>

                        <div className="flex flex-col gap-3 pt-3">
                            <Category
                                data={spoken_languages}
                                title="Language:"
                            />

                            <div>
                                <span>
                                    Runtime: {Math.round(runtime / 60)}h
                                    {runtime % 60}m
                                </span>
                            </div>

                            <div>
                                <span>Release data: {release_date}</span>
                            </div>

                            <Category
                                data={genres}
                                title="Genres:"
                            />
                            <Category
                                data={production_companies}
                                title="Production companies:"
                            />
                        </div>

                        <div className="hidden md:block md:h-[250px] md:w-full xl:h-[350px] m-auto mt-10 mb-6">
                            <Player />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default MovieInfo;
