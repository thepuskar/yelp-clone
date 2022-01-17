//interact with store and change app values when needed
import { combineReducers } from "redux";

//session

import { sessionReducer } from "redux-react-session";

const rootReducer = combineReducers({
    session: sessionReducer
});

export default rootReducer;