import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Tab.module.scss';


const Tab = ({ title, link }) => {


    const setActive = ({isActive}) => isActive ? styles.active : ''

    return (
        <div className={styles.box}>

                <Link to={link} className={setActive} >
                    <span>{title}</span>
                </Link>

        </div>
    );
};

export default Tab;
