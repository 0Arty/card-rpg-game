import React from 'react'
import { useActionCreators } from '../../hooks/useActionCreator';
import { gameSliceActions } from '../../redux/gameSlice';
import styles from './Card.module.scss';



const Card = ({ item }) => {

    const gameStore = useActionCreators(gameSliceActions)
    const { name, level, damage, hitPoint, rank, image, stars, id } = { ...item }
    
    const dblClickHandler = (e) => {
        gameStore.setPopUpInfo(item)
    }

    return (
        <div className={styles.cardBox} onDoubleClick={dblClickHandler}  >


            <div className={styles.border} >
                <div className={styles.cardFont} style={{ backgroundImage: 'url(' + image + ')' }}>

                    <div className={styles.stats} >
                        <div className={styles.nameBox}> 
                            <span className={styles.name}>{name}</span>
                            <span>{stars}</span>
                        </div>
                        <div className={styles.characters}>
                            <span>Рівень: {level}</span>
                            <span>Aтака: {damage}</span>
                            <span>Життя: {hitPoint}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
