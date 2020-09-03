import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/navbar.module.scss';



export const Navbar = () => {


    return (
        <nav>
            <ul>
                <li>
                    <Link className={styles.navLink} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.navLink} to="/books">Books</Link>
                </li>
                <li>
                    <Link className={styles.navLink} to="/members">Members</Link>
                </li>
            </ul>
        </nav>
    )
}