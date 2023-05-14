import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from '../services/api'
import axios from "../utils/axios"

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
    auth: {
        login: {
            email: '',
            password: '',

        },
        register: {
            email: '',
            password: '',
            username: '',
            confirmPassword: '',
        }
    },
    isLoading: false,
    status: null,

    isAuth: false,
    name: null,
    lvl: null,
    diamonds: null,
    emeralds: null,
    souls: null,
    _id: null
}
export const registerUser = createAsyncThunk('userSlice/registerUser',
    async ({ username, password, email }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username, password, email
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        }
        catch (error) {
            console.log(error)
            return error
        }
    },
)
export const loginUser = createAsyncThunk('userSlice/loginUser',
    async ({ password, email }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                password, email
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        }
        catch (error) {
            console.log(error)
            return error
        }
    },
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,

    reducers: {
        loginSetEmail: (state, actions) => { state.auth.login.email = actions.payload },
        loginSetPassword: (state, actions) => { state.auth.login.password = actions.payload },
        registerSetUserName: (state, actions) => { state.auth.register.username = actions.payload },
        registerSetEmail: (state, actions) => { state.auth.register.email = actions.payload },
        registerSetPassword: (state, actions) => { state.auth.register.password = actions.payload },
        registerSetConfirmPassword: (state, actions) => { state.auth.register.confirmPassword = actions.payload },
        wrongPassword: (state, actions) => { state.status = actions.payload },

        buyCardByDiamonds: (state, actions) => {
            state.diamonds = state.diamonds - actions.payload
        },
        buyCardByEmeralds: (state, actions) => {
            state.emeralds = state.emeralds - actions.payload
        },
        buyCardBySouls: (state, actions) => {
            state.souls = state.souls - actions.payload
        }
    },
    extraReducers: (builder) => {
        //------------------Register------------------------------------------------------------------------------------------------------------
        builder.addCase(registerUser.pending, (state, action) => {
            state.status = ''
            state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {

            state.isLoading = false
            console.log(action.payload.response)
            // state.status = action.payload.response.data.message

            state.status = action.payload.response.data.message
            
            if (action.payload.response.status === 300) {
                state.auth.register.username = initialState.auth.register.username
                state.auth.register.email = initialState.auth.register.email
                state.auth.register.password = initialState.auth.register.password
                state.auth.register.confirmPassword = initialState.auth.register.confirmPassword
            }

        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = action.payload.response.data.message
            

            state.isLoading = false
        })

        //------------------Login------------------------------------------------------------------------------------------------------------
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = ''
            // state.status = action.payload.message
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.status = action.payload.response.data.message
            
            if (action.payload.response.status === 300) {
                state.isAuth = true
                state.status = action.payload.response.message               
                state.auth.login.email = initialState.auth.email
                state.auth.login.password = initialState.auth.password
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = action.payload.response.data.message
            state.isLoading = false
        })
    },
})


export const userSliceActions = {
    // getSomething,
    ...userSlice.actions
}
export default userSlice.reducer