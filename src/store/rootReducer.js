import { combineReducers } from "redux";

import { moviState } from "./movies/reducer";
import { peopleState } from "./people/reduser";
import { tvShowState } from "./tvShow/reduser";

const rootReducer = combineReducers({ moviState, peopleState, tvShowState });

export default rootReducer;
