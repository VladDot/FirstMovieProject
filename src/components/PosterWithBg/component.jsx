import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Error from "../Error";
import Loading from "../Loading";
import ToggleBtn from "./ToggleBtn";
import { SwiperSlide, Swiper } from "swiper/react";

const PosterToggleBg = ({ btns }) => {
    const [bgUrl, setBgUrl] = useState("");
    const [error, setError] = useState(null);
    const [activeId, setActiveId] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [actualList, setActualList] = useState(undefined);

    useEffect(() => {
        btns.forEach(({ requestUrl }, idx) => {
            if (activeId === idx) {
                setIsLoading(true);
                fetch(requestUrl)
                    .then((res) => res.json())
                    .then((results) => {
                        setActualList(results);
                        setBgUrl(
                            `https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${results.results[0].backdrop_path}`
                        );
                    })
                    .catch(setError)
                    .finally(() => setIsLoading(false));
            }
        });
    }, [activeId]);

    return (
        <div
            className="  bg-cover h-[400px] bg-center"
            style={{
                backgroundImage: `url(${bgUrl})`,
            }}
        >
            <div className="flex gap-5 items-center mt-2 p-2 pl-5 pt-4 min-h-[35px] ">
                <div className=" border-[1px] rounded-full  border-aqua ">
                    {btns &&
                        btns.map(({ text }, idx) => (
                            <ToggleBtn
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
            {!isLoading && error && <Error error={error} />}
            {!isLoading && !error && (
                <Swiper
                    style={{
                        height: "300px",
                        padding: "20px",
                        margin: "10px 0",
                    }}
                    spaceBetween={40}
                    slidesPerView="auto"
                    scrollbar={{ draggable: true }}
                >
                    {actualList?.results
                        ? actualList.results.map(
                              ({ title, id, backdrop_path }) => (
                                  <SwiperSlide
                                      style={{ width: "300px" }}
                                      key={`movie${id}_${title}`}
                                  >
                                      <Link
                                          className=""
                                          to={`/movie/${id}`}
                                          onMouseEnter={() =>
                                              setBgUrl(
                                                  `https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/${backdrop_path}`
                                              )
                                          }
                                      >
                                          <img
                                              className=" min-w-[300px]  h-[225px] rounded-lg   transition-all ease-in duration-300 hover:scale-110"
                                              src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
                                              alt={title}
                                          />
                                          <p className="mt-2 text-aqua text-center items-center">
                                              {title}
                                          </p>
                                      </Link>
                                  </SwiperSlide>
                              )
                          )
                        : ""}
                </Swiper>
            )}
        </div>
    );
};

export default PosterToggleBg;
