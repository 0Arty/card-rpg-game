import React, { useState } from 'react'
import styles from './RegisterForm.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, userSliceActions } from '../../../redux/userSlice';
import { useActionCreators } from '../../../hooks/useActionCreator'



const RegisterForm = ({ }) => {

    const dispatch = useDispatch()
    const userStore = useActionCreators(userSliceActions)
    
    const username = useSelector(state=> state.user.auth.register.username)
    const email = useSelector(state=> state.user.auth.register.email)
    const password = useSelector(state=> state.user.auth.register.password)
    const confirmPassword = useSelector(state=> state.user.auth.register.confirmPassword)


    const handleSubmit = () => {

        if(password !== confirmPassword){
            userStore.wrongPassword('')
            userStore.wrongPassword('Паролі не співпадають')
            return
        }
        dispatch(registerUser({ username, email, password }))
    }

    return (
        <>
            <span className={styles.title}>
                {/* Реєстрація */}
                Register
            </span>

            <form className={styles.form}
                onSubmit={e => e.preventDefault()}
            >
                <div className={styles.registrationBody}>

                    <span className={styles.registerText}>
                        Введіть ігрове ім'я:
                    </span>
                    <input type="text" className={classNames(styles.input, styles.username)}
                        onChange={e => userStore.registerSetUserName(e.target.value)}
                        value={username}
                    />

                    <span className={styles.registerText}>
                        Введіть пошту:
                    </span>
                    <input type="text" className={classNames(styles.input, styles.username)}
                        onChange={e => userStore.registerSetEmail(e.target.value)}
                        value={email}
                    />

                    <span className={styles.registerText}>
                        Введіть пароль:
                    </span>
                    <input type="password" className={classNames(styles.input, styles.password)}
                        onChange={e => userStore.registerSetPassword(e.target.value)}
                        value={password}
                    />

                    <span className={styles.registerText}>
                        Підтвердіть пароль:
                    </span>
                    <input type="password" className={classNames(styles.input, styles.password)}
                        onChange={e =>  userStore.registerSetConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <button type="submit" onClick={handleSubmit} className={styles.submitBTN}>
                        Зареєструватись
                    </button>

                    <Link to='/login' className={styles.link}>
                        Вже є аккаунт?
                    </Link>

                </div>
            </form>
        </>
    );
};

export default RegisterForm;
