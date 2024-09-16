import {useEffect} from 'react'
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userSlice';
import {User} from "../interfaces/User"


function UserTableBody() {

    const userData = useSelector((state : RootState) => state.fetchUserData.filterUsers)
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(fetchUsers());
        }, [dispatch]);


    return (
    <tbody>
        {userData.map((user: User) => (
            <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-custom-light-gray even:dark:bg-dark-secondary border-b dark:border-dark-text">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</th>
            <td className="px-6 py-4">{user.username}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.phone}</td>
            </tr>
        ))}
    </tbody>
    )
}

export default UserTableBody