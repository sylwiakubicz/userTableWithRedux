import UserTableBody from './UserTableBody';
import UserTableHead from './UserTableHead';


const UserTable = () => {

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-dark-text shadow-md">
      <UserTableHead />
      <UserTableBody />
    </table>
    ) 
};

export default UserTable;
