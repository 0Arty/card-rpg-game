import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from '../services/api'
import axios from "axios"

// const getSomething = createAsyncThunk(
//     'cardDeckSlice/getSomething',
//     async({id}, {rejectWithValue}) => {
//         return api('get', 'getCocksFuckingDeep', {data: id}, rejectWithValue)
//     }
// )
// const getUser = createAsyncThunk(
//     'cardDeckSlice/getSomething',
//     async({id}, {rejectWithValue}) => {
//         return api('get', 'getCocksFuckingDeep', {data: id}, rejectWithValue)
//     }
// )




const initialState = {
    _id: null,
    currentBoardId: null,
    currentItemId: null,
    decksIds: [
        [],
        [],
        [],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29
        ]
    ],
    stats: [
        {
            totalHP: 0,
            totalAttack: 0,
            totalPowerRank: 0,
        },
        {
            totalHP: 0,
            totalAttack: 0,
            totalPowerRank: 0,
        },
        {
            totalHP: 0,
            totalAttack: 0,
            totalPowerRank: 0,
        },
    ],
    cards: [
        {
            name: 'Lucifer',
            level: 1,
            damage: 120,
            hitPoint: 250,
            rank: 2,
            stars: "\u2B50 \u2B50",
            image: '/img/lucifer.png',

        },
        {
            name: 'Wizard',
            level: 1,
            damage: 100,
            hitPoint: 250,
            rank: 3,
            stars: "\u2B50 \u2B50 \u2B50",
            image: '/img/wizard.png',
        },
        {
            name: 'War Elephant',
            level: 1,
            damage: 75,
            hitPoint: 350,
            rank: 4,
            stars: "\u2B50 \u2B50 \u2B50 \u2B50",
            image: '/img/WarElephant.png',
        },
        {
            name: 'Mio Miao',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 5,
            stars: "\u2B50 \u2B50 \u2B50 \u2B50 \u2B50",
            image: '/img/mioMiao.png',
        },
        {
            name: 'Arfet',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Arfet.png',
        },
        {
            name: 'Artificer',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Artificer.png',
        },
        {
            name: 'Fighter',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Fighter.png',
        },
        {
            name: 'Firetare',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Firetare.png',
        },
        {
            name: 'Gate of tranquility',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/gate-of-tranquility.png',
        },
        {
            name: 'God of Deth',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/god-of-deth.png',
        },
        {
            name: 'LTC-78',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/LTC-78.png',
        },
        {
            name: 'Markus Bitner',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/markus-bitner.png',
        },
        {
            name: 'Moon',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Moon.png',
        },
        {
            name: 'Inquisitor ',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Paladin-01.png',
        },
        {
            name: 'Supreme Paladin ',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Paladin-02.png',
        },
        {
            name: 'Paradoxica',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/paradoxica.png',
        },
        {
            name: 'PSX-94',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/PSX-94.png',
        },
        {
            name: 'QWE-45',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/QWE-45.png',
        },
        {
            name: 'Ranger',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Ranger.png',
        },
        {
            name: 'Sandu',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/sandu.png',
        },
        {
            name: 'Sfiro',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/sfiro.png',
        },
        {
            name: 'Sinky',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Sinky.png',
        },
        {
            name: 'Snow Gigant',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/snow-gigant.png',
        },
        {
            name: 'Sorcerer',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Sorcerer.png',
        },
        {
            name: 'T1-G3r',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/T1-g3r.png',
        },
        {
            name: 'The light of the eternity',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/the-light-of-eternity.png',
        },
        {
            name: 'Thief Assasin',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/thief-assasin.png',
        },
        {
            name: 'World Watcher',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/world-watcher.png',
        },
        {
            name: 'World Wyvern',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/world-wyvern.png',
        },
        {
            name: 'Zibob',
            level: 1,
            damage: 170,
            hitPoint: 150,
            rank: 1,
            stars: "\u2B50",
            image: '/img/Zibob.png',
        },
    ],
    cardIndex: 30,
    diamonds: 100,
    emeralds: 100,
    souls: 100,

}



export const cardDeckSlice = createSlice({
    name: 'cardDeckSlice',
    initialState,
    reducers: {
        setCurrentItemId: (state, actions) => {
            state.currentItemId = actions.payload
        },
        setCurrentBoardId: (state, action) => {
             state.currentBoardId = action.payload
        },
        setBoardIds: (state, action) => {
            state.decksIds[state.currentBoardId] = action.payload
        },
        setBoardsIds: (state, action) => {
            state.decksIds[action.payload.boardId] = action.payload.newIds1
            state.decksIds[action.payload.currentBoardId] = action.payload.newIds2
        },
        setUserBoardStats: (state, action) => {
            const { id, stats } = action.payload
            state.stats[id] = stats
        },
        buyOffer: (state, action) => {
            state.decksIds[3].push(state.cardIndex)
            state.cardIndex++
            state.cards.push(action.payload)  
        },

    },
    // extraReducers: builder => builder
    // .addCase(getSomething.pending, (state, action) => {
    //     state.loading = true
    // })
    // .addCase(getSomething.fullfiled, (state, action) => {
    //     state.data = action.payload
    // })



})


export const cardDeckActions = {
    // getSomething,
    ...cardDeckSlice.actions
}
export default cardDeckSlice.reducer