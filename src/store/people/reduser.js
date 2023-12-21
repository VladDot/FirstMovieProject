import { PERSONE, POPULAR_PEOPLE } from "../types";

const initialPeoplesState = {
    popularPeoples: {},
};

export const peopleState = (state = initialPeoplesState, action) => {
    switch (action.type) {
        case POPULAR_PEOPLE:
            return {
                ...state,
                popularPeoples: { ...action.payload },
            };
        case PERSONE:
            return {
                ...state,
                persone: [...action.payload],
            };

        default:
            return state;
    }
};
