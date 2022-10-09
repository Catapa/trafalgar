import React from 'react';
import styles from './Testimonials.module.scss';
import HeadingUnderlined from '../../Components/HeadingUnderlined/HeadingUnderlined';

const Testimonials = () => {
    return (
        <>
            <article className={styles.testimonials_card}>
            <HeadingUnderlined align='center' contrast>What our customer are saying</HeadingUnderlined>
            <div className={styles.testimonial}>
                <div className={styles.profile}>
                    <img src={'assets/profile.svg'} alt={'testimonial'} className={styles.picture}/>
                    <div className={styles.info}>
                        <p className={styles.info__name}>Edward Newgate</p>
                        <p className={styles.info__role}>Founder Circle</p>
                    </div>
                </div>
                <p className={styles.review}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
            </div>
            </article>

            <div className={styles.switch}>
                <img src={'assets/arrow_left.svg'} alt={'previous'} className={styles.arrow}/>
                <span className={styles.bullet}/>
                <span className={styles.bullet}/>
                <span className={styles.bullet}/>
                <span className={styles.bullet}/>
                <img src={'assets/arrow_right.svg'} alt={'next'} className={styles.arrow}/>
            </div>
        </>
        
    );
}

export default Testimonials;