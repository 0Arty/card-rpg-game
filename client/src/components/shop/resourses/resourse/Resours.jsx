import React from 'react'
import styles from './Resours.module.scss';


const  Resours = ({count,name}) => {

    return (
        <div className={styles.box}>
            <span>{name} :</span>
            <span className={styles.count}> {count}</span>
        </div>
    );
};

export default Resours;
