import { NavLink } from 'react-router-dom'

const NavbarLink = ({ title, link }) => {
    const linkClass = ({ isActive }) => isActive
        ? 'text-white bg-gray-900 rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

    return (
        <>
            <NavLink
                to={link}
                className={linkClass}
            >{title}</NavLink>
        </>
    )
}

export default NavbarLink