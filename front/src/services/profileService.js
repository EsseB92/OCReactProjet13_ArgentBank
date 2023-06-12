import axios from 'axios';
import {
    userProfileSuccess,
    userProfileFail,
    userUpdateSuccess,
    userUpdateFail,
} from '../features/profileSlice';

const BASE_URL = 'http://localhost:3001/api/v1';

const userProfile = (value_token) => (dispatch) => {
    const token =
        localStorage.getItem('token') !== null
            ? localStorage
                  .getItem('token')
                  .slice(1, localStorage.getItem('token').length - 1)
            : value_token;
    axios
        .post(
            BASE_URL + '/user/profile',
            { token },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userProfileSuccess(response.data));
        })
        .catch((error) => {
            dispatch(userProfileFail(error.response));
        });
};

const updateProfile = (firstName, lastName, value_token) => (dispatch) => {
    const token =
        localStorage.getItem('token') !== null
            ? localStorage
                  .getItem('token')
                  .slice(1, localStorage.getItem('token').length - 1)
            : value_token;
    axios
        .put(
            BASE_URL + '/user/profile',
            { firstName: firstName, lastName: lastName },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
            dispatch(userUpdateSuccess(response.data));
        })
        .catch((error) => {
            dispatch(userUpdateFail(error.response));
        });
};

const profileService = { userProfile, updateProfile };
export default profileService;
