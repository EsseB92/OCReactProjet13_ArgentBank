import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h2 className='sr-only'>Promoted Content</h2>
                <p className={styles.subtitle}>No fees.</p>
                <p className={styles.subtitle}>No minimum deposit.</p>
                <p className={styles.subtitle}>High interest rates.</p>
                <p>Open a savings account with Argent Bank today!</p>
            </div>
        </section>
    );
};

export default Hero;
