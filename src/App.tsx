import React from 'react';
import AccountsListPage from './components/AccountsListPage';
import SideNav from './components/SideNav';


function App() {
  return (
    <div className='bg-primary dark:bg-dark-primary min-h-screen'>
      <SideNav />
      <main className="ml-[15rem] p-5">
        <AccountsListPage />
      </main>
    </div>
  );
}

export default App;
