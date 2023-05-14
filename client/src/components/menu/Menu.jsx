import React from 'react'
import styles from './Menu.module.scss';
import video from '../../videos/forest.mp4'

import Routing from './routing/Routing';
import User from './user/User';

const Menu = ({ }) => {
    
    return (
        <div className={styles.box}>
            <video loop autoPlay muted className={styles.video} >
                <source src={video} type='video/mp4' />
            </video>
            <div className={styles.wrapper} >
                <User />
                <Routing />
            </div>
            <div className={styles.resourses}>
            </div>
        </div >
    );
};

export default Menu;
    