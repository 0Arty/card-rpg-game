import React from 'react'
import styles from './User.module.scss';


const  User = ({}) => {

    return (
        <div className={styles.box}>
            <div className={styles.icon}></div>

            <div className={styles.profileInfo}>
                <p>pavlo : 20</p>
                <div>
                    <progress id="file" max={20} value={10}> </progress>
                </div>
            </div>
        </div>
    );
};

export default User;
