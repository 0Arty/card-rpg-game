import React, { useEffect } from 'react'
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom'

import Menu from './menu/Menu';
import Inventory from './inventory/Inventory';
import DeckOfCard from './deck-of-card/DeckOfCard';
import Shop from './shop/Shop'


const Navigation = ({ }) => {
    return (
        <div className={styles.box}>
            <Routes>
                <Route path="game/" element={<Menu />} />
                <Route path="game/player-inventory/" element={<Inventory />} />
                <Route path="game/deck-of-cards/" element={<DeckOfCard />} />
                <Route path="game/shop/*" element={<Shop />} />
            </Routes>
        </div>
    );
};

export default Navigation;
