import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { resetError } from '../../features/authSlice';

import styles from './Form.module.scss';

const initialState = {
    email: '',
    password: '',
    rememberMe: '',
};

const LoginForm = () => {
    document.title = 'Log In';

    const [formValue, setFormValue] = useState(initialState);
    const { email, password, rememberMe } = formValue;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.authStatus.token);
    const error = useSelector((state) => state.authStatus.error);

    const handleChange = (event) => {
        const value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        setFormValue({ ...formValue, [event.target.name]: value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (email && password) {
            dispatch(authService.login(email, password, rememberMe));
        } else if (email) {
            toast.warning('Please fill password field');
        } else if (password) {
            toast.warning('Please fill email field');
        } else {
            toast.warning('Please fill all input field');
        }
    };

    useEffect(() => {
        if (token !== null || localStorage.getItem('token') !== null) {
            toast.success('User Login Successfully');
            navigate('/profile');
        }
    }, [navigate, token]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(resetError());
        }
    }, [dispatch, error]);

    return (
        <form onSubmit={handleLogin} className={styles.form}>
            <i className={`fa fa-user-circle ${styles.icon}`}></i>
            <h1>Login</h1>
            <div className={styles.input_wrapper}>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    autoComplete='email'
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    autoComplete='new-password'
                />
            </div>
            <div className={styles.input_remember}>
                <input
                    type='checkbox'
                    id='rememberMe'
                    name='rememberMe'
                    value={rememberMe}
                    onChange={handleChange}
                />
                <label htmlFor='rememberMe'>Remember me</label>
            </div>
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginForm;
