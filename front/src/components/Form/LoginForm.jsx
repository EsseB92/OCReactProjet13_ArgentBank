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

const inputList = [
    {
        id: 'email',
        className: `${styles.input_wrapper}`,
        type: 'email',
        autoComplete: 'email',
        label: 'Email',
    },
    {
        id: 'password',
        className: `${styles.input_wrapper}`,
        type: 'password',
        autoComplete: 'current-password',
        label: 'Password',
    },
    {
        id: 'rememberMe',
        className: `${styles.input_remember}`,
        type: 'checkbox',
        autoComplete: '',
        label: 'Remember me',
    },
];

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
        if (
            token !== null ||
            JSON.parse(localStorage.getItem('token')) !== null
        ) {
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
            {inputList.map(({ id, className, type, autoComplete, label }) => (
                <div key={id} className={className}>
                    <label htmlFor={id}>{label}</label>
                    <input
                        id={id}
                        type={type}
                        name={id}
                        value={formValue[id]}
                        onChange={handleChange}
                        autoComplete={autoComplete}
                    />
                </div>
            ))}
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginForm;
