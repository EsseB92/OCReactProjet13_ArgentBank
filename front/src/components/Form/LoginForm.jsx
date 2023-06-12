import React, { useState } from 'react';
import useHandleLogin from '../../hooks/useHandleLogin';

import styles from './Form.module.scss';

const initialState = {
    email: '',
    password: '',
    rememberMe: '',
};

const inputList = [
    {
        id: 'email',
        className: styles.input_wrapper,
        type: 'email',
        autoComplete: 'email',
        label: 'Email',
    },
    {
        id: 'password',
        className: styles.input_wrapper,
        type: 'password',
        autoComplete: 'current-password',
        label: 'Password',
    },
    {
        id: 'rememberMe',
        className: styles.input_remember,
        type: 'checkbox',
        autoComplete: null,
        label: 'Remember me',
    },
];

const LoginForm = () => {
    document.title = 'Log In';

    const [formValue, setFormValue] = useState(initialState);

    const handleChange = (event) => {
        const value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        setFormValue({ ...formValue, [event.target.name]: value });
    };

    const handleLogin = useHandleLogin(formValue);

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
