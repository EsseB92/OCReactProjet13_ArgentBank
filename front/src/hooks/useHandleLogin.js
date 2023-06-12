import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { toast } from 'react-toastify';
import { resetError } from '../features/authSlice';

const useHandleLogin = (formValue) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.authStatus.token);
    const error = useSelector((state) => state.authStatus.error);

    const handleLogin = (event) => {
        event.preventDefault();
        const { email, password, rememberMe } = formValue;
        if (email && password) {
            dispatch(authService.login(email, password, rememberMe));
        } else if (email) {
            toast.warning('Please fill password field');
        } else if (password) {
            toast.warning('Please fill email field');
        } else {
            toast.warning('Please fill all input field');
        }
    };

    useEffect(() => {
        if (
            token !== null ||
            JSON.parse(localStorage.getItem('token')) !== null
        ) {
            toast.success('User Login Successfully');
            navigate('/profile');
        }
    }, [navigate, token]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(resetError());
        }
    }, [dispatch, error]);

    return handleLogin;
};

export default useHandleLogin;
