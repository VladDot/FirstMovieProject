import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CardMovie from "../../../components/CardMovie";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const KnownFor = ({ known_for }) => {
    return (
        <Swiper
            style={{
                height: "100%",
                width: "100%",
            }}
            spaceBetween={20}
            slidesPerView="auto"
        >
            {known_for &&
                known_for.map(
                    ({ poster_path, id, original_name, original_title }) => (
                        <div
                            key={`movie${
                                original_name || original_title
                            }_${id}`}
                        >
                            <SwiperSlide
                                style={{
                                    width: "200px",
                                    height: "auto",
                                }}
                                key={`movie${
                                    original_name || original_title
                                }_${id}`}
                            >
                                <CardMovie
                                    id={id}
                                    title={original_name || original_title}
                                    topic="movie"
                                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                                />
                            </SwiperSlide>
                        </div>
                    )
                )}
        </Swiper>
    );
};

export default KnownFor;
