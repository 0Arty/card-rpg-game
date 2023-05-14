import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardDeckSlice from './cardDeckSlice'
import gameSlice from './gameSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    card: cardDeckSlice,
    user: userSlice,
    game: gameSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
