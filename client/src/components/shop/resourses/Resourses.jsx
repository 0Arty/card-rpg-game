import React from 'react'
import Resours from './resourse/Resours';
import styles from './Resourses.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const  Resourses = ({}) => {

    const diamonds = useSelector(state => state.user.diamonds)
    const emeralds = useSelector(state => state.user.emeralds)
    const souls = useSelector(state => state.user.souls)

    return (
        <div className={styles.box}>
                
                   <Resours count={diamonds} name={'Діаманти'} /> 
                   <Resours count={emeralds} name={'Смарагди'} /> 
                   <Resours count={souls} name={'Душі'} /> 
                
                <Link to='/game' className={styles.link}>X</Link>

        </div>  
    );
};

export default Resourses;
