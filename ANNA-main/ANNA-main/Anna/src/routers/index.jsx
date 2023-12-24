import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import PageNotFound from '../pages/PageNotFound/Pagenotfound';
import Register from '../pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../pages/Auth/Login';
import KindJourney from '../pages/ KindJourney/ KindJourney';
import ForAnna from '../pages/ForAnna/ForAnna';
// import HomePage from '../pages/HomePage/HomePage';
function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/' element={<HomePage />} /> */}
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path='/hanh-trnh-tu-te' element={<KindJourney />} />
                <Route path='/ve-anna' element={<ForAnna />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default AppRouter;