import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPeople, getPerson } from "../../utils/generateUrl";
import { useGetData1 } from "../../hooks";

import KnownFor from "./knownFor";
import PersonaInfo from "./personaInfo";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PersonaPhoto from "./personaPhoto/component";

const Persona = () => {
    const { id } = useParams();
    const [knownFor, setKnownFor] = useState();

    const { data, isLoading, error } = useGetData1(getPerson(id));
    const isData = !!Object.keys(data).length;

    const {
        data: person,
        isLoading: isLoadingPerson,
        error: errorPerson,
    } = useGetData1(getPeople());
    const isPerson = !!person?.results?.length;

    useEffect(() => {
        if (isPerson) {
            const known = person.results.find(
                ({ id: personId }) => personId === parseInt(id)
            );
            setKnownFor(known.known_for);
        }
    }, [person, id, isPerson]);

    return (
        <div className="w-[70%] m-auto mt-5 minSm:w-[90%] lg:w-[80%] xl:w-[70%]">
            {isLoading && <Loading />}

            {!!error && !isLoading && <Error error={error} />}

            {isData && !isLoading && !error && (
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

                {isLoadingPerson && <Loading />}

                {!!errorPerson && !isLoading && <Error error={errorPerson} />}

                {isPerson && !!knownFor && <KnownFor known_for={knownFor} />}
            </div>
        </div>
    );
};

export default Persona;
