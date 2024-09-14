import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import { User } from "../../interfaces/User"
import axios from "axios"

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


export const fetchUsers = () => {
    return (dispatch : any) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users : User[] = response.data.map((user :any) => ({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone
                }))
                dispatch(fetchUsersSuccess(users))
            })
            .catch( error => {
                const errorMsg : string = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}