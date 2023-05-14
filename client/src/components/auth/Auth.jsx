import React, { useEffect, useState } from 'react'
import styles from './Auth.module.scss';
import video from '../../videos/register.mp4'
import RegisterForm from './authForms/RegisterForm';
import RegisterLinks from './AuthLinks';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './authForms/LoginForm';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Auth = ({ }) => {
    const status = useSelector(state => state.user.status)
     useEffect(()=>{
        if(status){
            toast(status)
        }
    }, [status])

    return (
        <div className={styles.box}>

            <video loop autoPlay muted className={styles.video} >
                <source src={video} type='video/mp4' />
            </video>
            <div className={styles.wrapper}>
                {/* <RegisterForm /> */}
                <Routes>
                    <Route path="/" element={<RegisterLinks />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>
        </div>
    );
};

export default Auth;
