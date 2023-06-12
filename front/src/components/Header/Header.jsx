import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import profileService from '../../services/profileService';
import { toast } from 'react-toastify';
import EditNameForm from './EditNameForm';

const initialState = {
    firstName: '',
    lastName: '',
};

const Header = () => {
    const token = useSelector((state) => state.authStatus.token);
    const error = useSelector((state) => state.authStatus.error);
    const firstName = useSelector((state) => state.userProfile.firstName);
    const lastName = useSelector((state) => state.userProfile.lastName);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <section className={styles.header}>
            <h1>
                Welcome back
                <br />
                {!showEdit ? firstName + ' ' + lastName : ''}
            </h1>
            {!showEdit ? (
                <button onClick={() => setShowEdit(true)}>Edit Name</button>
            ) : (
                <EditNameForm
                    setShowEdit={setShowEdit}
                    firstName={firstName}
                    lastName={lastName}
                    token={token}
                />
            )}
        </section>
    );
};

export default Header;
