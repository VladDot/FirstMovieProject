import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import KnownFor from "./knownFor";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { getPeople, getPerson } from "../../utils/generateUrl";
import PersonaPhoto from "./personaPhoto/component";
import PersonaInfo from "./personaInfo";

const Persona = () => {
    const params = useParams();

    const [error, setError] = useState();
    const [data, setData] = useState(undefined);
    const [isLoading, setLoading] = useState(false);

    const [errorPersons, setErrorPersons] = useState();
    const [dataPersons, setDataPersons] = useState(undefined);
    const [isLoadingPersons, setLoadingPersons] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            fetch(getPerson(params.id))
                .then((res) => {
                    if (!res.ok) {
                        setError(res.status);
                    }
                    return res.json();
                })
                .then(setData)
                .catch((e) => {
                    console.error("Error during fetch:", e);
                })
                .finally(() => setLoading(false));
        } catch (error) {}

        try {
            setLoadingPersons(true);
            fetch(getPeople())
                .then((res) => {
                    if (!res.ok) {
                        setErrorPersons(res.status);
                    }
                    return res.json();
                })
                .then(setDataPersons)
                .catch((e) => {
                    console.error("Error", e);
                })
                .finally(() => setLoadingPersons(false));
        } catch (errorPersons) {}
    }, []);
    console.log(data);
    console.log(dataPersons);

    return (
        <div className="w-[70%] m-auto mt-5 minSm:w-[90%] lg:w-[80%] xl:w-[70%]">
            {isLoading && <Loading />}
            {!!error && !isLoading && <Error error={error} />}
            {data && !isLoading && !error && (
                <div className="minSm:flex minSm:w-full minSm:p-2 minSm:gap-3 ">
                    <PersonaPhoto
                        profile_path={data.profile_path}
                        isLoadingPersons={data.isLoadingPersons}
                        name={data.name}
                    />
                    <PersonaInfo
                        name={data.name}
                        birthday={data.birthday}
                        biography={data.biography}
                    />
                </div>
            )}
            <div className="w-full mt-10 ">
                <div>
                    <p className="font-semibold	 text-xl mb-4">Known For</p>
                </div>

                {isLoadingPersons && <Loading />}
                {!!error && !isLoading && <Error error={errorPersons} />}
                {dataPersons &&
                    !isLoadingPersons &&
                    dataPersons.results.map(({ id, known_for, name }) => {
                        {
                            if (id === parseInt(params.id)) {
                                return (
                                    <KnownFor
                                        key={`movie_${id}`}
                                        known_for={known_for}
                                        id={id}
                                    />
                                );
                            }
                        }
                    })}
            </div>
        </div>
    );
};

export default Persona;
