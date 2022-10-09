import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.grid}>
                <div className={styles.column_main}>
                    <Logo contrast/>
                    <p className={styles.details}>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div className={styles.column_secondary}>
                    <h3 className={styles.heading}>Company</h3>
                    <a href='/' className={styles.details}>About</a>
                    <a href='/' className={styles.details}>Testimonials</a>
                    <a href='/' className={styles.details}>Find a doctor</a>
                    <a href='/' className={styles.details}>Apps</a>
                </div>
                <div className={styles.column_secondary}>
                    <h3 className={styles.heading}>Region</h3>
                    <a href='/' className={styles.details}>Indonesia</a>
                    <a href='/' className={styles.details}>Singapore</a>
                    <a href='/' className={styles.details}>Hong Kong</a>
                    <a href='/' className={styles.details}>Canada</a>
                </div>
                <div className={styles.column_secondary}>
                    <h3 className={styles.heading}>Help</h3>
                    <a href='/' className={styles.details}>Help center</a>
                    <a href='/' className={styles.details}>Contact support</a>
                    <a href='/' className={styles.details}>Instructions</a>
                    <a href='/' className={styles.details}>How it works</a>
                </div>
            </section>
        </footer>
    );
}
export default Footer;