//TODOafter replacing a function in the project, change the name of the function here
import { useGetData1 } from "../../hooks";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import CardPeople from "../../components/CardPeople";

import { getPeople } from "../../utils/generateUrl";

export const PopularPeople = () => {
    const { data, isLoading, error } = useGetData1(getPeople());
    const isData = !!data?.results?.length;

    return (
        <div className="max-w-[1100px] m-auto py-4 ">
            <h1 className="py-4 mb-4 text-center">Popular People</h1>

            {isLoading && <Loading />}

            {error && !isLoading && <Error />}

            {isData && !error && !isLoading && (
                <ul className="flex flex-wrap  justify-around gap-x-4 gap-y-10">
                    {data.results.map(({ name, id, profile_path }) => (
                        <CardPeople
                            id={id}
                            name={name}
                            key={`key-people-${id}`}
                            profile_path={profile_path}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};
