import React from 'react'
import UserTable from './UserTable';
import SideNav from './SideNav';

function AccountsListPage() {
    return (
    <div className="bg-primary dark:bg-dark-primary min-h-screen">
        <SideNav />
        <div className="ml-[15rem] p-5">
            <h2 className="text-3xl text-secondary dark:text-white pb-5">User Accounts</h2>
            <UserTable />
        </div>
    </div>
    )
}

export default AccountsListPage