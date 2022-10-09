import React from 'react';
import styles from './Info.module.scss';
import HeadingUnderlined from '../../Components/HeadingUnderlined/HeadingUnderlined';
import Button from '../../Components/Button/Button';

const Info = () => {
    return (
        <article className={styles.container}>
            <div className={styles.column}>
                <img src='assets/trafalgar-illustration sec02 1.svg' alt='Leading healthcare providers'/>
            </div>
            <div className={styles.column}>
                <HeadingUnderlined>Leading healthcare providers</HeadingUnderlined>
                <p className={styles.description}>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <Button className={styles.button}>Learn more</Button>
            </div>
            
            <div className={styles.column}>
                <HeadingUnderlined>Download our mobile apps</HeadingUnderlined>
                <p className={styles.description}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                <Button className={styles.button}>Download</Button>
            </div>
            <div className={styles.column}>
                <img src='assets/trafalgar-illustration sec03 1.svg' alt='Download our mobile apps'/>
            </div>
        </article>
    );
}

export default Info;