import {useEffect} from 'react'
import {applyFilters} from "../redux/user/userSlice"
import { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } from '../redux/usersFilters/userFiltersSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';


function UserTableFilterRow() {
    
    const usersFilters = useSelector((state : RootState) => state.userFilters)
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(applyFilters(usersFilters));
    }, [dispatch, usersFilters]);

    return (
    <tr >
        <th className='pl-6 pb-2'>
            <input
            type="text"
            placeholder="Filter by name"
            value={usersFilters.name}
            onChange={(e) => dispatch(setNameFilter(e.target.value))}
            className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
        </th>
        <th className='pl-6 pb-2'>
            <input
            type="text"
            placeholder="Filter by username"
            value={usersFilters.username}
            onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
            className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
        </th>
        <th className='pl-6 pb-2'>
            <input
            type="text"
            placeholder="Filter by email"
            value={usersFilters.email}
            onChange={(e) => dispatch(setEmailFilter(e.target.value))}
            className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
        </th>
        <th className='pl-6 pr-6 pb-2'>
            <input
            type="text"
            placeholder="Filter by phone"
            value={usersFilters.phone}
            onChange={(e) => dispatch(setPhoneFilter(e.target.value))}
            className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
        </th>
    </tr>
    )
}

export default UserTableFilterRow