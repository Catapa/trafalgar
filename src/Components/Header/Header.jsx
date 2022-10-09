import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <TopNav/>
        </header>
    )
}

export default Header;