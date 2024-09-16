import SideNavHeader from "./SideNavHeader"
import SideNavItem from "./SideNavItem"

function SideNav() {

    return (
        <div className="bg-secondary dark:bg-dark-secondary w-[15rem] h-screen pt-5 text-white dark:text-white flex justify-between flex-col fixed">
            <aside>
                <SideNavHeader title="ADMIN"/>
                <nav className="bg-secondary-light dark:bg-dark-custom-light-gray text-lg">
                    <SideNavItem
                        label="User Accounts"
                        isActive
                    />
                    <SideNavItem
                        label="Placeholder"
                    />
                </nav>
            </aside>
        </div>
    )
}

export default SideNav