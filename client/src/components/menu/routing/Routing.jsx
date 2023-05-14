import React from 'react'
import styles from './Routing.module.scss';
import { Link } from 'react-router-dom'

const  Routing = ({}) => {

    

    return (
        <div className={styles.box} >


            <Link to='map' >Вихід на карту</Link>
            <Link to='player-inventory'>Інвентар</Link>
            <Link to='deck-of-cards'>Колода карт</Link>
            <Link to='upgrade'>Покращення</Link>
            <Link to='shop/diamonds'>Магазин</Link>

        </div>
    );
};

export default Routing;
