import { User } from "./User";

export interface FetchUserDataState {
    loading : boolean,
    users : User[],
    filterUsers: User[],
    error : string

}