import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../../components/Form/Form';

import styles from './Auth.module.scss';

const Auth = () => {
    return (
        <main className={`${styles.main} bg-dark`}>
            <section className={styles.section}>
                <Form />
            </section>
        </main>
    );
};

export default Auth;
