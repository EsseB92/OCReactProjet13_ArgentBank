import React, { useState } from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import styles from './Form.module.scss';

const Form = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const form = isRegistering ? <RegisterForm /> : <LoginForm />;
    const text = isRegistering
        ? 'Already have an account'
        : "Don't have an account";
    const onClickText = isRegistering ? 'Login now' : 'Register now';

    return (
        <>
            {form}
            <div className={styles.link}>
                <p>{text}</p>
                <p onClick={() => setIsRegistering(!isRegistering)}>
                    {onClickText}
                </p>
            </div>
        </>
    );
};

export default Form;
