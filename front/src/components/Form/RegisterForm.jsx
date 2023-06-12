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

const inputList = [
    {
        id: 'firstName',
        type: 'text',
        autoComplete: 'given-name',
        label: 'First Name',
    },
    {
        id: 'lastName',
        type: 'text',
        autoComplete: 'family-name',
        label: 'Last Name',
    },
    {
        id: 'email',
        type: 'email',
        autoComplete: 'email',
        label: 'Email',
    },
    {
        id: 'password',
        type: 'password',
        autoComplete: 'new-password',
        label: 'Password',
    },
    {
        id: 'confirmPassword',
        type: 'password',
        autoComplete: 'new-password',
        label: 'Confirm Password',
    },
];

const RegisterForm = () => {
    document.title = 'Register';

    const [formValue, setFormValue] = useState(initialState);

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
            {inputList.map(({ id, type, autoComplete, label }) => (
                <div key={id} className={styles.input_wrapper}>
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
            <button type='submit'>Register</button>
        </form>
    );
};

export default RegisterForm;
