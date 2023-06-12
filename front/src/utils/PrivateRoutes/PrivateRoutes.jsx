import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuth = useSelector((state) => state.authStatus.isAuth);
    return isAuth ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoutes;
