import UserTable from './UserTable';

function AccountsListPage() {
    return (
        <div >
            <h2 className="text-3xl text-secondary dark:text-white pb-5">User Accounts</h2>
            <UserTable />
        </div>
    )
}

export default AccountsListPage