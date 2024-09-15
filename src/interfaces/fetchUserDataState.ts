import { User } from "./User";

export interface FetchUserDataState {
    loading : boolean,
    users : User[],
    error : string

}