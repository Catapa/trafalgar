import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <article className={styles.container}>
            <div className={styles.column}>
                <h1 className={styles.heading}>Virtual healthcare for you</h1>
                <p className={styles.description}>Trafalgar provides progressive, and affordable healthcare, accesible on mobile and online for everyone</p>
                <button className={styles.button}>Consult today</button>
            </div>
            <div className={styles.column}>
                <img src='assets/trafalgar-header illustration 1.svg' alt='trafalgar header illustration'/>
            </div>
        </article>
    )
}

export default Home;