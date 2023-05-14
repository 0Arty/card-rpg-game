import React, { useEffect } from 'react'
import Navigation from './Navigation';

import { useSelector } from 'react-redux';
import Auth from './auth/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ }) => {

    const navigate = useNavigate()
    const isAuth = useSelector(state => state.user.isAuth)

    useEffect(()=>{
        if (isAuth) {
           navigate('/game')
        } else {
            navigate('/')
        }
    }, [isAuth])


    return (
        <div>
            {isAuth ? <Navigation /> : <Auth />}
            <ToastContainer position='bottom-right'/>
        </div>
    );
};

export default App;
