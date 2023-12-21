import { useEffect } from "react";

const useSetDataRedux = (url, setData, tracker) => {
    useEffect(
        () => {
            setData({loading: true})
            fetch(url)
                .then((response) => response.json())
                .then((data) => setData({data}))
                .catch((error) => console.log(error, "setData(error)"));
        },
        tracker ? tracker : []
    );
};

export default useSetDataRedux;
