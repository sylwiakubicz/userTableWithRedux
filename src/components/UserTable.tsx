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
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {userData.users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
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
