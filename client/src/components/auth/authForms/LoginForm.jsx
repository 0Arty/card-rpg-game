import classNames from 'classnames';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import { loginUser, userSliceActions } from '../../../redux/userSlice';
import { useActionCreators } from '../../../hooks/useActionCreator'
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = ({ }) => {




    const userStore = useActionCreators(userSliceActions)
    const password = useSelector(state=> state.user.auth.login.password)
    const email = useSelector(state=> state.user.auth.login.email)
    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        // --------------------------Треба Антон----------------------------------------------------------------------------------------------------------------------------------------------------------------
        // userStore.loginUser({ email, password })

        dispatch(loginUser({ email, password }))
    }
   
    return (
        <>
            <span className={styles.title}>Авторизація</span>
            <form className={styles.form}
                onSubmit={e => e.preventDefault()}
            >
                <div className={styles.loginForm}>
                    <span className={styles.loginText}>
                        Введіть пошту:
                    </span>
                    <input type="text" className={classNames(styles.input, styles.username)}
                        onChange={e => userStore.loginSetEmail(e.target.value)}
                        value={email}
                    />

                    <span className={styles.loginText}>
                        Введіть пароль:
                    </span>
                    <input type="password" className={classNames(styles.input, styles.password)}
                        onChange={e => userStore.loginSetPassword(e.target.value)}
                        value={password}
                    />

                    <button type="submit" onClick={handleSubmit} className={styles.submitBTN}> Увійти</button>
                    <Link to='/register' className={styles.link}>Немає аккаунта?</Link>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
