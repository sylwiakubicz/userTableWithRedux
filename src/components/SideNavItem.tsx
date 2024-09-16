
interface SideNavItemProps {
    label: string;
    isActive?: boolean;
}

function SideNavItem({ label, isActive = false }: SideNavItemProps) {
    return (
        <div className={`relative pt-2.5 pb-2.5 cursor-pointer pl-3 ${isActive ? 'dark:bg-dark-akcent-color bg-akcent-color' : ''}`}>
            <span>{label}</span>
            <div
            className={`h-4 w-4 bg-primary dark:bg-dark-primary -right-[8px] bottom-3.5 rotate-45 absolute ${isActive ? '' : 'hidden'}`}
            ></div>
        </div>
    )
}

export default SideNavItem