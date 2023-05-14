import React from 'react'
import styles from './DeckStats.module.scss';
import { GiCentaurHeart } from 'react-icons/gi'
import { GiBouncingSword } from 'react-icons/gi'
import { useActionCreators } from '../../../hooks/useActionCreator';
import { cardDeckActions } from '../../../redux/cardDeckSlice';

const DeckStats = React.memo(({ id, items, boardID}) => {

    const cardDeckStore = useActionCreators(cardDeckActions)

    const filteredItems = id.map( id => items[id]) 
    const totalHP = filteredItems.reduce( (acc, card) => acc + card.hitPoint, 0) 
    const totalAttack = filteredItems.reduce( (acc, card) => acc + card.damage, 0) 
    const totalPowerRank = (totalHP + totalAttack) /2
    
    cardDeckStore.setUserBoardStats({id: boardID, stats: {
        totalHP,
        totalAttack,
        totalPowerRank: totalPowerRank,
    }})

    return (
        <div className={styles.deckStats}>

            <div className={styles.collomns}>
                <div className={styles.stat}>
                    <GiCentaurHeart color='red' />
                    <span className={styles.title}>Загальне здоров'я: {totalHP}</span>
                </div>
                <div className={styles.stat}>
                    <GiBouncingSword color='#77a6a6' />
                    <span className={styles.title}>Загальна шкода: {totalAttack}</span>
                </div>
                <div className={styles.stat}>
                    <GiBouncingSword color='#77a6a6' />
                    <span className={styles.title}>Power rank: {totalPowerRank}</span>
                </div>
            </div>
        </div>
    );
})

export default DeckStats;
