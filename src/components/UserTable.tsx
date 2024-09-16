import { useEffect, useState } from 'react';
import { User } from '../interfaces/User';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, applyFilters } from '../redux/user/userSlice';
import ResetButton from './ResetButton';
import { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } from '../redux/usersFilters/userFiltersSlice';



const UserTable = () => {

  const userData = useSelector((state : RootState) => state.fetchUserData.filterUsers)
  const error = useSelector((state: RootState) => state.fetchUserData.error)
  const isLoading = useSelector((state : RootState) => state.fetchUserData.loading)
  const usersFilters = useSelector((state : RootState) => state.userFilters)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(applyFilters(usersFilters));
  }, [dispatch, usersFilters]);

  return isLoading ? (
    <h2 className="text-lg dark:text-dark-text">Loading...</h2>
  ) : error ? (
    <h2 className="text-lg dark:text-dark-text">{error}</h2>
  ) : userData ? (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-dark-text shadow-md">
      <thead  className="text-[1rem] text-gray-700 uppercase bg-custom-light-gray dark:bg-dark-secondary dark:text-dark-text relative">
        <tr>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color" >Name</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Username</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Email</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Phone number</th>
        </tr>
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
        <th colSpan={4} className="text-end">
          <ResetButton />
        </th>
      </thead>
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
    </table>
    ) : (null);
};

export default UserTable;
