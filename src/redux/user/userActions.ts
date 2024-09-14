import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import { User } from "../../interfaces/User"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (users : User[]) : any => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

const fetchUsersFailure = (error : string) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}