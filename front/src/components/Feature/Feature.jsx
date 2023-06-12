import React from 'react';
import styles from './Feature.module.scss';

const Feature = ({ img, title, content }) => {
    return (
        <div className={styles.feature}>
            <img src={img} alt='Feature Icon' />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Feature;
