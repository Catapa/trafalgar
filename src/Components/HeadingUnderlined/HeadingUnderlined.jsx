import React from 'react';
import styles from './HeadingUnderlined.module.scss';

const HeadingUnderlined = (props) => {
    const {children: text, align} = props;
    let alignment, text_contrast, line_contrast = '';
    if (align === 'center')
        alignment = styles.center;
    else if (align === 'left')
        alignment = styles.left;
    else if (align === 'right')
        alignment = styles.right;
    
     if (props.contrast){
        text_contrast = styles.text_contrast;
        line_contrast = styles.line_contrast;
     }
     
    return (
        <section className={styles.container + ' ' + alignment}>
            <h1 className={styles.text + ' ' + text_contrast}>{text}</h1>
            <span className={styles.underline + ' ' + line_contrast}/>
        </section>
    );
}

export default HeadingUnderlined;