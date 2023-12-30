import React from "react";

import { CategoryTv } from "./categoryTv";
import Loading from "../../../components/Loading";
import Player from "../../../components/Player/component";

const TVInfo = ({ dataTV }) => {
    const {
        genres,
        overview,
        release_date,
        original_name,
        first_air_date,
        spoken_languages,
        number_of_seasons,
        number_of_episodes,
        production_companies,
    } = dataTV;
    return (
        <>
            {!dataTV && <Loading />}
            {dataTV && (
                <div>
                    <div className=" w-full mt-4 text-white p-2">
                        <div>
                            <span className="  text-left gap-5 items-center ">
                                <h1 className="text-1.5xl  minmin:text-2xl">
                                    {original_name} (
                                    {(release_date &&
                                        release_date.slice(0, 4)) ||
                                        (first_air_date &&
                                            first_air_date.slice(0, 4))}
                                    )
                                </h1>
                            </span>
                        </div>

                        <div>
                            <h1 className="mb-3 ">Overview </h1>
                            <p>{overview}</p>
                        </div>

                        <div className=" flex flex-col gap-3 pt-3">
                            <CategoryTv
                                category={spoken_languages}
                                title="Language:"
                            />
                            <div>
                                <span>Seasons: {number_of_seasons}</span>
                            </div>

                            <div>
                                <span>Seasons: {number_of_episodes}</span>
                            </div>

                            <CategoryTv
                                category={genres}
                                title="Genres:"
                            />
                            <CategoryTv
                                category={production_companies}
                                title="Production companies:"
                            />
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

export default TVInfo;
