import React from 'react';
import logo from '../../assets/images/argentBankLogo.png';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/authService';

const Header = () => {
    const isAuth = useSelector((state) => state.authStatus.isAuth);
    const firstName = useSelector((state) => state.userProfile.firstName);
    const dispatch = useDispatch();
    let navContent;

    const handleSignOut = (event) => {
        event.preventDefault();
        dispatch(authService.logout());
    };

    if (isAuth) {
        navContent = (
            <nav>
                <Link to='/profile'>
                    <i className='fa fa-user-circle'></i> {firstName}
                </Link>
                <Link onClick={handleSignOut}>
                    <i className='fa fa-sign-out'></i> Log Out
                </Link>
            </nav>
        );
    } else {
        navContent = (
            <nav>
                <Link to='/auth'>
                    <i className='fa fa-user-circle'></i> Log In
                </Link>
            </nav>
        );
    }

    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={logo} alt='Argent Bank Logo' />
            </Link>

            {navContent}
        </header>
    );
};

export default Header;
