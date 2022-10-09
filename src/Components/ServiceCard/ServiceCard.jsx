import React from 'react';
import styles from './ServiceCard.module.scss';

const ServiceCard = (props) => {
    const {image_src, title, children} = props;
    return (
        <div className={styles.card_container}>
            <img src={image_src} alt={title} className={styles.icon}/>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{children}</p>
        </div>
    );
}

export default ServiceCard;