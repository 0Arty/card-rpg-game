import React from 'react'
import Card from '../../../card/Card';
import styles from './OfferCard.module.scss';



const  OfferCard = ({cardInfo, price, offerIndex, resourse, buyCard}) => {



    const buyHandler = () =>{
        if(resourse >= price){
            buyCard(price, offerIndex, cardInfo)
        }
    }

    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <Card item={cardInfo}/>
            </div>
            <div className={styles.buy}>
                <span className={styles.price}> Ціна: {price}</span>
                <button className={styles.btn} onClick = {buyHandler}> Купити</button>
            </div>
        </div>
    );
};

export default OfferCard;
