import { User } from "../../interfaces/User";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const initialState : {loading : boolean,users : User[], error : string } = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state : {loading : boolean,users : User[], error : string } = initialState, action : {type: string, payload: any}) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}