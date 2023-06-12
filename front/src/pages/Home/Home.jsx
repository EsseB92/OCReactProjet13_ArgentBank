import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';
import ChatIcon from '../../assets/icons/icon-chat.png';
import MoneyIcon from '../../assets/icons/icon-money.png';
import SecurityIcon from '../../assets/icons/icon-security.png';

import styles from './Home.module.scss';

const Home = () => {
    useEffect(() => {
        document.title = 'Home Page';
    });
    return (
        <main className={styles.main}>
            <Hero />
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                <Feature
                    img={ChatIcon}
                    title='You are our #1 priority'
                    content='Need to talk to a representative? You can get in touch through our	24/7 chat or through a phone call in less than 5 minutes.'
                />
                <Feature
                    img={MoneyIcon}
                    title='More savings means higher rates'
                    content='The more you save with us, the higher your interest rate will be!'
                />
                <Feature
                    img={SecurityIcon}
                    title='Security you can trust'
                    content='We use top of the line encryption to make sure your data and money is always safe.'
                />
            </section>
        </main>
    );
};

export default Home;
