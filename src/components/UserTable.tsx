import { useEffect } from 'react';
import { User } from '../interfaces/User';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, filterByEmail, filterByName, filterByPhone, filterByUsername, resetFilters } from '../redux/user/userSlice';



const UserTable = () => {

  const userData = useSelector((state : RootState) => state.fetchUserData.filterUsers)
  const error = useSelector((state: RootState) => state.fetchUserData.error)
  const isLoading = useSelector((state : RootState) => state.fetchUserData.loading)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return isLoading ? (
    <h2 className="text-lg dark:text-dark-text">Loading...</h2>
  ) : error ? (
    <h2 className="text-lg dark:text-dark-text">{error}</h2>
  ) : (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-dark-text shadow-md">
      <thead  className="text-[1rem] text-gray-700 uppercase bg-custom-light-gray dark:bg-dark-secondary dark:text-dark-text">
        <tr>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color" >Name</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Username</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Email</th>
          <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Phone number</th>
        </tr>
        <tr className='border-b dark:border-dark-text '>
          <th className='pl-6 pb-2'>
            <input
              type="text"
              placeholder="Filter by name"
              onChange={(e) => dispatch(filterByName(e.target.value))}
              className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
          </th>
          <th className='pl-6 pb-2'>
            <input
              type="text"
              placeholder="Filter by username"
              onChange={(e) => dispatch(filterByUsername(e.target.value))}
              className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
          </th>
          <th className='pl-6 pb-2'>
            <input
              type="text"
              placeholder="Filter by email"
              onChange={(e) => dispatch(filterByEmail(e.target.value))}
              className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
          </th>
          <th className='pl-6 pr-6 pb-2'>
            <input
              type="text"
              placeholder="Filter by phone"
              onChange={(e) => dispatch(filterByPhone(e.target.value))}
              className="w-full px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
            />
          </th>
        </tr>
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
  );
};

export default UserTable;
