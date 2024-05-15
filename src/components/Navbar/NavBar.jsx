import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

let nav_link = [
    {
        to: '/profile',
        name: 'Profile',
    },
    {
        to: '/dialogs',
        name: 'Messages',
    },
    {
        to: '/users',
        name: 'Users',
    },
]

const NavBar = () => {
    return (
        <nav className={styles.nav}>
                {
                    nav_link.map((item, index) => (
                        <div key={index}>
                            <NavLink className={navData => navData.isActive ? styles.activeLink : styles.noActiveLink}
                                     to={item.to}> <span>{item.name}</span>
                            </NavLink>
                        </div>
                    ))
                }
        </nav>
    )
}

export default NavBar;