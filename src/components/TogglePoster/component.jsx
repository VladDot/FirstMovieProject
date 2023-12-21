import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Error from "../Error";
import Loading from "../Loading";
import CardMovie from "../CardMovie";
import ToggleButton from "./ToggleButton";

const TogglePoster = ({ btns }) => {
    const [error, setError] = useState(null);
    const [activeId, setActiveId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [actualList, setActualList] = useState([]);

    useEffect(() => {
        btns.forEach(({ requestUrl }, idx) => {
            if (activeId === idx) {
                setIsLoading(true);
                fetch(requestUrl)
                    .then((res) => res.json())
                    .then(setActualList)
                    .catch(setError)
                    .finally(() => setIsLoading(false));
            }
        });
    }, []);

    useEffect(() => {
        btns.forEach(({ requestUrl }, idx) => {
            if (activeId === idx) {
                setIsLoading(true);
                fetch(requestUrl)
                    .then((res) => res.json())
                    .then(setActualList)
                    .catch(setError)
                    .finally(() => setIsLoading(false));
            }
        });
    }, [activeId]);

    return (
        <>
            <div className="flex gap-3 minmin:gap-5 items-center mt-8 p-2 pl-5 minmin:pl-10 min-h-[35px]  ">
                <p className=" text-center text-2xl font-medium pb-1.5">
                    Tranding
                </p>
                <div className=" border-[1px] rounded-full  border-blue ">
                    {btns &&
                        btns.map(({ text }, idx) => (
                            <ToggleButton
                                text={text}
                                btnId={idx}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                key={`toggleBtn_${text}_${idx}`}
                            />
                        ))}
                </div>
            </div>
            {isLoading && <Loading />}
            {error && !isLoading && <Error error={error} />}

            {!isLoading && !error && (
                <div className="h-[440px]">
                    <Swiper
                        style={{
                            height: "440px",
                            padding: "20px",
                            margin: "10px 0",
                        }}
                        spaceBetween={40}
                        slidesPerView="auto"
                        scrollbar={{ draggable: true }}
                    >
                        {isLoading && <Loading />}
                        {error && !isLoading && <Error error={error} />}
                        {!isLoading && !error && actualList.results
                            ? actualList.results.map(
                                  ({ title, poster_path, id }) => (
                                      <SwiperSlide
                                          className=" shadow-lg  hover:scale-110 transition-all ease-in duration-300"
                                          key={`movie${id}_${title}`}
                                          style={{ width: "200px" }}
                                      >
                                          <CardMovie
                                              topic="movie"
                                              poster_path={poster_path}
                                              id={id}
                                              title={title}
                                              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                                          />
                                      </SwiperSlide>
                                  )
                              )
                            : ""}
                    </Swiper>
                </div>
            )}
        </>
    );
};

export default TogglePoster;
