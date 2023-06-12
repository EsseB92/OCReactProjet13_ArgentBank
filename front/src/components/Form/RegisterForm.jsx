import React, { useState } from 'react';

import { toast } from 'react-toastify';
import styles from './Form.module.scss';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const RegisterForm = () => {
    document.title = 'Register';

    const [formValue, setFormValue] = useState(initialState);
    const { firstName, lastName, email, password, confirmPassword } = formValue;

    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };

    const handleRegister = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleRegister}>
            <i className={`fa fa-user-circle ${styles.icon}`}></i>
            <h1>Register</h1>
            <div className={styles.input_wrapper}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    id='firstName'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    autoComplete='given-name'
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='lastName'>Last Name</label>
                <input
                    id='lastName'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    autoComplete='family-name'
                />
            </div>
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
            <div className={styles.input_wrapper}>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    id='confirmPassword'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    autoComplete='new-password'
                />
            </div>
            <button type='submit'>Register</button>
        </form>
    );
};

export default RegisterForm;
