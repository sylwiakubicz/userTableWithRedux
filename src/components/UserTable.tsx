import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';
import { User } from '../interfaces/User';
import { AppDispatch, RootState } from '../store';

interface UserTableProps {
  userData: {
    loading: boolean;
    users: User[];
    error: string;
  };
  fetchUsers: () => void;
}

const UserTable: React.FC<UserTableProps> = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h2 className="text-lg dark:text-dark-text">Loading...</h2>
  ) : userData.error ? (
    <h2 className="text-lg dark:text-dark-text">{userData.error}</h2>
  ) : (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-dark-text shadow-md">
      <thead  className="text-[1rem] text-gray-700 uppercase bg-custom-light-gray dark:bg-dark-secondary dark:text-dark-text">
        <tr className='border-b dark:border-dark-text'>
          <th scope="col" className="px-6 py-3 text-akcent-color dark:text-dark-akcent-color" >Name</th>
          <th scope="col" className="px-6 py-3 text-akcent-color dark:text-dark-akcent-color">Username</th>
          <th scope="col" className="px-6 py-3 text-akcent-color dark:text-dark-akcent-color">Email</th>
          <th scope="col" className="px-6 py-3 text-akcent-color dark:text-dark-akcent-color">Phone number</th>
        </tr>
      </thead>
      <tbody>
        {userData.users.map((user: User) => (
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

const mapStateToProps = (state: RootState) => ({
  userData: state.user || { loading: false, users: [], error: '' },
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
