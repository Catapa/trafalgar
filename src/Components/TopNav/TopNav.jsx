import React from 'react';
import styles from './TopNav.module.scss';

const TopNav = () => {
    return (
        <nav className={styles.navigation}>
            <a href='/' className={styles.navlink}>Home</a>
            <a href='/' className={styles.navlink}>Find a doctor</a>
            <a href='/' className={styles.navlink}>Apps</a>
            <a href='/' className={styles.navlink}>Testimonials</a>
            <a href='/' className={styles.navlink}>About us</a>
        </nav>
    )
}

export default TopNav;