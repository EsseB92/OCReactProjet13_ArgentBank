import axios from 'axios';
import { loginSuccess, loginFail, logoutSuccess } from '../features/authSlice';

const BASE_URL = 'http://localhost:3001/api/v1';

const login = (email, password, rememberMe) => (dispatch) => {
    axios
        .post(BASE_URL + '/user/login', { email, password })
        .then((response) => {
            if (rememberMe) {
                localStorage.setItem(
                    'token',
                    JSON.stringify(response.data.body.token)
                );
            } else {
                sessionStorage.setItem(
                    'token',
                    JSON.stringify(response.data.body.token)
                );
            }
            dispatch(loginSuccess(response.data));
            return response.data;
        })
        .catch((error) => {
            dispatch(loginFail(error.response.data.message));
        });
};

const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
};

const authService = { login, logout };
export default authService;
