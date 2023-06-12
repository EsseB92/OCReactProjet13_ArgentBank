import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import profileService from '../../services/profileService';
import { toast } from 'react-toastify';

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

    const [formValue, setFormValue] = useState(initialState);
    const { newFirstName, newLastName } = formValue;

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFirstName && newLastName) {
            dispatch(
                profileService.updateProfile(newFirstName, newLastName, token)
            );
            setShowEdit(false);
        } else if (newFirstName) {
            toast.warning('Please fill last name field');
        } else if (newLastName) {
            toast.warning('Please fill first name field');
        } else {
            toast.warning('Please fill all input field');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            id='newFirstName'
                            type='text'
                            name='newFirstName'
                            value={newFirstName}
                            placeholder={firstName}
                            onChange={handleChange}
                        />
                        <input
                            id='newLastName'
                            type='text'
                            name='newLastName'
                            value={newLastName}
                            placeholder={lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                        <button onClick={() => setShowEdit(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
};

export default Header;
