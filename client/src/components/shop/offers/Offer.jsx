import React from 'react'
import styles from './Offers.module.scss';
import PopUp from '../../popup/PopUp';
import OfferCard from './offerCard/OfferCard';


const Offer = ({ offers, buyCard, resourse }) => {


    return (
        <div className={styles.offerBox}>
            <PopUp />
            <div className={styles.offers}>
                {
                    offers.map((offer, index) => {
                        return <OfferCard cardInfo={offer.card} price={offer.price}
                            key={index} offerIndex={index}
                            resourse={resourse} buyCard={buyCard} />
                    })
                }
            </div>
        </div>
    );
};

export default Offer;
