import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import profileService from '../../services/profileService';
import Header from '../../components/Header/Header';

import styles from './Profile.module.scss';
import Account from '../../components/Account/Account';

const Profile = () => {
    useEffect(() => {
        document.title = 'Profile';
    });

    const dispatch = useDispatch();
    const token = useSelector((state) =>
        state.authStatus.token !== null
            ? state.authStatus.token
            : localStorage.getItem('token') !== null
            ? localStorage.getItem('token')
            : null
    );

    dispatch(profileService.userProfile(token));

    return (
        <main className={`${styles.main} bg-dark`}>
            <Header />
            <h2 className='sr-only'>Accounts</h2>
            <section className='accounts'>
                <Account
                    title='Argent Bank Checking (x8349)'
                    amount='$2,082.79'
                    desc='Available Balance'
                />
                <Account
                    title='Argent Bank Savings (x6712)'
                    amount='$10,928.42'
                    desc='Available Balance'
                />
                <Account
                    title='Argent Bank Credit Card (x8349)'
                    amount='$184.30'
                    desc='Current Balance'
                />
            </section>
        </main>
    );
};

export default Profile;
