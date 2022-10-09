import React from 'react';
import styles from './ArticleCard.module.scss';

const ArticleCard = (props) => {
    return (
        <div className={styles.card_container}>
            <img src={props.image_src} alt={props.title} className={styles.thumbnail}/>
            <div className={styles.text}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.children}</p>
                <a href='/' className={styles.link}>Read more <img src={'assets/arrow_right.svg'} alt={'read more'} className={styles.arrow}/> </a>
            </div>
        </div>
    );
}

export default ArticleCard;