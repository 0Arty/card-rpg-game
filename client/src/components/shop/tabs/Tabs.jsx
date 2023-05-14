import React from 'react'
import Tab from './Tab/Tab';
import styles from './Tabs.module.scss';


const  Tabs = ({}) => {

    return (
        <div className={styles.box}>
            <Tab title={'Діаманти'} link={'diamonds'}/>
            <Tab title={'Смарагди'} link={'emeralds'}/>
            <Tab title={'Темні душі'} link={'souls'}/>
        </div>
    );
};

export default Tabs;
