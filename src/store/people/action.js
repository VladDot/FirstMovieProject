import { PERSONE, POPULAR_PEOPLE } from "../types";

export const setPopularPeoples = (payload) => ({
    type: POPULAR_PEOPLE,
    payload,
});
export const setPersone = (payload) => ({
    type: PERSONE,
    payload,
});
