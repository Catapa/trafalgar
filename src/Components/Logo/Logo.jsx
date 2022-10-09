import React from 'react';
import styles from './Logo.module.scss';

const Logo = (props) => {
    let logo_contrast, text_contrast = '';
    if (props.contrast) {
        logo_contrast = styles.logo_contrast;
        text_contrast = styles.text_contrast;
    }

    return (
        <span className={styles.logo}>
            <span className={styles.circle + ' ' + styles.color + ' ' + logo_contrast}>
                <span className={styles.symbol_text + ' ' + logo_contrast}>T</span>
            </span>
            <span className={styles.name_text + ' ' + text_contrast}>
                Trafalgar
            </span>
        </span>
    )
}

export default Logo;