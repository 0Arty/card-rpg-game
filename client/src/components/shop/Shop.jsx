import React from 'react'
import styles from './Shop.module.scss';

import Tabs from './tabs/Tabs';
import Resourses from './resourses/Resourses';
import Offers from './offers/Offers';
import Close from '../close/Close'
const Shop = ({ }) => {

    return (
        <div className={styles.box}>
            <div className={styles.resourses}>
            <Resourses />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.links}>
                <Tabs />
                </div>
                <div className={styles.offers}>
                <Offers /> 
                </div>
            </div>

        </div>
    );
};

export default Shop;
