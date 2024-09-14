import React, { useState } from 'react'

function SideNav() {

    const [active, setActive] = useState<string>('user accounts')

    return (
        <div className="bg-secondary dark:bg-dark-secondary w-[15rem] h-screen pt-5 text-white dark:text-white flex justify-between flex-col fixed">
            <aside>
                <h1 className="font-semibold text-3xl pl-3 dark:text-white pb-5">ADMIN</h1>
                <nav className="bg-secondary-light dark:bg-dark-custom-light-gray text-lg">
                    <div className="relative pt-2.5 pb-2.5 cursor-pointer pl-3 dark:bg-dark-akcent-color bg-akcent-color">
                        <span>
                            User Accounts
                        </span>
                        <div className="h-4 w-4 bg-primary dark:bg-dark-primary -right-[8px] bottom-3.5 rotate-45 absolute"></div>
                    </div>
                    <div className="relative pt-2.5 pb-2.5 cursor-pointer pl-3">
                        <span>
                            Placeholder 
                        </span>
                        <div className="h-4 w-4 bg-primary dark:bg-dark-primary -right-[8px] bottom-3.5 rotate-45 hidden"></div>
                    </div>
                </nav>
            </aside>
        </div>
    )
}

export default SideNav