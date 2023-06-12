import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import profileService from '../../services/profileService';
import { toast } from 'react-toastify';

const initialState = {
    newFirstName: '',
    newLastName: '',
};

const EditNameForm = ({ setShowEdit, firstName, lastName, token }) => {
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

    return (
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
                <button onClick={() => setShowEdit(false)}>Cancel</button>
            </div>
        </form>
    );
};

export default EditNameForm;
