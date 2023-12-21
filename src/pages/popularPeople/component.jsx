import useGetData from "../../hooks/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPeople } from "../../utils/generateUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardPeople from "../../components/CardPeople";

const PopularPeople = () => {
    /*     const popularPeople = useGetData(getPeople("10")); */
    const persones = useGetData(getPeople());
    /*     console.log(persones.data.results); */
    return (
        <div className="max-w-[1100px] m-auto py-4 ">
            <h1 className="py-4 mb-4 text-center">Popular People</h1>
            <ul className="flex flex-wrap  justify-around gap-x-4 gap-y-10">
                {persones.data.results &&
                    persones.data.results.map(
                        ({ name, id, profile_path, known_for }) => (
                            <li
                                className=" shadow-lg  transition-all hover:-translate-y-6"
                                key={`123${name}_${id}`}
                            >
                                <CardPeople
                                    profile_path={profile_path}
                                    name={name}
                                    id={id}
                                />
                                {/* {known_for &&
                                    known_for.map(({ title }) => (
                                        <p>{title}</p>
                                    ))} */}
                            </li>
                        )
                    )}
            </ul>
        </div>
    );
};

export default PopularPeople;
