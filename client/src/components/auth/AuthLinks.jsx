import React from 'react'
import { Link } from 'react-router-dom';
import styles from './AuthLinks.module.scss';


const RegisterLinks = ({ }) => {

    return (
        <div className={styles.box}>
            <div className={styles.linksWrapper}>
                <Link to='/register' className={styles.link}>Реєстрація</Link>
                <Link to='/login' className={styles.link}>Логін</Link>
            </div>

            <div className={styles.anyIdeasForRegistration}>
              <p>  В розробці реєстрація за допомогою сервісів таких як Google, Facebook...</p>
            </div>
        </div>
    );
};

export default RegisterLinks;
