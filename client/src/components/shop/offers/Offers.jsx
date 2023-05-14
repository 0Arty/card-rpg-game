import React from 'react'
import styles from './Offers.module.scss';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { useActionCreators } from '../../../hooks/useActionCreator';

import { userSliceActions } from '../../../redux/userSlice';
import { cardDeckActions } from '../../../redux/cardDeckSlice';
import { gameSliceActions } from '../../../redux/gameSlice';
import Offer from './Offer';




const Offers = ({ }) => {

    const userStore = useActionCreators(userSliceActions)
    const cardDeckStore = useActionCreators(cardDeckActions)
    const gameStore = useActionCreators(gameSliceActions)

    const diamodsOffers = useSelector(state => state.game.offers.diamonds)
    const diamondsCount = useSelector(state => state.user.diamonds)

    const emeraldsOffers = useSelector(state => state.game.offers.emeralds)
    const emeraldsCount = useSelector(state => state.user.emeralds)

    const soulsOffers = useSelector(state => state.game.offers.souls)
    const soulsCount = useSelector(state => state.user.souls)

    const buyCardByDiamond = (price, offerIndex, card) => {
        userStore.buyCardByDiamonds(price)
        cardDeckStore.buyOffer(card)
        gameStore.deleteCardByDiamonds(offerIndex)
    }
    const buyCardByEmeralds = (price, offerIndex, card) => {
        userStore.buyCardByEmeralds(price)
        cardDeckStore.buyOffer(card)
        gameStore.deleteCardByEmeralds(offerIndex)
    }
    const buyCardBySouls = (price, offerIndex, card) => {
        userStore.buyCardBySouls(price)
        cardDeckStore.buyOffer(card)
        gameStore.deleteCardBySouls(offerIndex)
    }

    return (

        <div className={styles.box}>
            <Routes>
                <Route path="/" element={
                    <Offer offers={diamodsOffers} buyCard={buyCardByDiamond} 
                    resourse={diamondsCount}
                    />
                } />
                <Route path="/diamonds" element={
                    <Offer offers={diamodsOffers} buyCard={buyCardByDiamond} 
                    resourse={diamondsCount}
                    />
                } />
                <Route path="/emeralds" element={
                    <Offer offers={emeraldsOffers} buyCard={buyCardByEmeralds} 
                    resourse={emeraldsCount}
                    />
                } />
                <Route path="/souls" element={
                    <Offer offers={soulsOffers} buyCard={buyCardBySouls} 
                    resourse={soulsCount}
                    />
                } />

            </Routes>
        </div>
    );
};

export default Offers;
