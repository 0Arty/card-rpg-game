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
       
    popUpInfo: {
        isVisible: false,
        info: {

        }
    },

    offers: {
        diamonds: [
            {
                price: 100,
                card: {
                    name: 'Borfey',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Borfey.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 1',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo1.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 2',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo2.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 3',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo3.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Cosmo 4',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/cosmo4.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Disturbed',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Disturbed.png',

                }
            },
            {
                price: 100,
                card: {
                    name: 'Druid',
                    level: 1,
                    damage: 120,
                    hitPoint: 250,
                    rank: 2,
                    stars: "\u2B50 \u2B50",
                    image: '/img/Druid.png',

                }
            },
        ],
        emeralds: [
            {
                price: 7,
                card: {
                    name: 'Axiel',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Axiel.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Azazel',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Azazel.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Balderon',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/balderon.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Barbarian',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Barbarian.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Bard',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Bard.png',
                },
            },
            {
                price: 12,
                card: {
                    name: 'Bloodbor',
                    level: 1,
                    damage: 100,
                    hitPoint: 250,
                    rank: 3,
                    stars: "\u2B50 \u2B50 \u2B50",
                    image: '/img/Bloodbor.png',
                },
            },
        ],
        souls: [
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant Zero',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant1.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 1',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant2.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 2',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant3.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 3',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant4.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 4',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant5.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 5',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant6.png',
                },

            },
            {
                price: 5,
                card: {
                    name: 'Atomic Deviant 6',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/atomic-deviant7.png',
                },

            },
        ],

    }
}

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setPopUpInfo: (state, action) => {
        state.popUpInfo.isVisible = false
        state.popUpInfo.info = action.payload
        state.popUpInfo.isVisible = true
        },
        closePopUp: (state) => {
        state.popUpInfo.isVisible = false
        },

        deleteCardByDiamonds: (state, action) => {
            state.offers.diamonds.splice(action.payload, 1 )
        },
        deleteCardByEmeralds: (state, action) => {
            state.offers.emeralds.splice(action.payload, 1 )
        },
        deleteCardBySouls: (state, action) => {
            state.offers.souls.splice(action.payload, 1 )
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


export const gameSliceActions = {
    // getSomething,
    ...gameSlice.actions
}
export default gameSlice.reducer