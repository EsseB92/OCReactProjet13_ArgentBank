import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import PrivateRoutes from './utils/PrivateRoutes/PrivateRoutes';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <ToastContainer />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
