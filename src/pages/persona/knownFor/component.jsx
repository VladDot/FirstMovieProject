import React from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import CardMovie from "../../../components/CardMovie";

const KnownFor = ({ known_for, id }) => {
    return (
        <Swiper
            style={{
                height: "100%",
                width: "100%",
            }}
            spaceBetween={20}
            slidesPerView="auto"
            onSlideChange={() => console.log("slide change")}
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
