import React, { useState } from 'react';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import styles from './Form.module.scss';

const Form = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <>
            {!isRegistering ? (
                <>
                    <LoginForm />
                    <div className={styles.link}>
                        <p>Don't have an account</p>
                        <p onClick={() => setIsRegistering(!isRegistering)}>
                            Register now
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <RegisterForm />
                    <div className={styles.link}>
                        <p>Already have an account</p>
                        <p onClick={() => setIsRegistering(!isRegistering)}>
                            Login now
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default Form;
