import React from 'react';
import s from './PopUp.module.scss'
import { useActionCreators } from '../../hooks/useActionCreator';

import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux';
import { gameSliceActions } from '../../redux/gameSlice';

const PopUp = () => {

    const gameStore = useActionCreators(gameSliceActions)
    
    const popUpInfo = useSelector(state => state.game.popUpInfo)
    const { name, level, damage, hitPoint, rank, image, stars } = { ...popUpInfo.info }

    const onClickHandler = (e) => {
        gameStore.closePopUp()
    }

    return (

            <AnimatePresence>
                {popUpInfo.isVisible && <motion.div
                    initial={{
                        x: -2000,
                        position: 'absolute',
                        zIndex: 100,
                        rotate: 30,
                        y:200,
                    }}
                    animate={{
                        x: 0,
                        position: 'absolute',
                        zIndex: 100,
                        rotate: 0,
                        y: 0,
                    }}
                    exit={{
                        x: 2000,
                        position: 'absolute',
                        zIndex: 100,
                        rotate: 30,
                        y: 500,
                    }}
                    transition={{ duration: 0.7}}
                >
                    <div className={s.box}>
                        <div className={s.cardFont} style={{ backgroundImage: 'url(' + image + ')' }}>
                            <div className={s.left}>

                            </div>
                            <div className={s.right}>

                                <div className={s.btnBox} >
                                    <span className={s.btn} onClick={onClickHandler}>X</span>
                                </div>

                                <div className={s.information}>

                                    <div className={s.damage}>
                                        <span className={s.text}> Шкода:</span> {damage}
                                    </div>

                                    <div className={s.hitPoint}>
                                        <span className={s.text}>Здоров'я:</span>  {hitPoint}
                                    </div>

                                    <div className={s.level}>
                                        <span className={s.text}>Рівень:</span> {level}
                                    </div>

                                    <div className={s.stars}>
                                        {stars}
                                    </div>

                                    <div className={s.name}>
                                        {name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
    )
}

export default PopUp;