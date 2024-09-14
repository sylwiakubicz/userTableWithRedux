import { useReducer } from "react";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    users: useReducer
})

export default rootReducer