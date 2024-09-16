import {useEffect} from 'react'
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userSlice';
import {User} from "../interfaces/User"
import Loading from './Loading';
import Error from './Error';
import UserTableDataRow from './UserTableDataRow';


function UserTableBody() {

    const error = useSelector((state : RootState) => state.fetchUserData.error)
    const isLoading = useSelector((state : RootState) => state.fetchUserData.loading)
    const userData = useSelector((state : RootState) => state.fetchUserData.filterUsers)
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(fetchUsers());
        }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }
        
    if (error) {
        return <Error errorMsg={error} />;
    }
    
    return (
        <tbody>
            {userData.map((user: User) => (
                <UserTableDataRow  user={user}/>
            ))}
        </tbody>
    );
}

export default UserTableBody