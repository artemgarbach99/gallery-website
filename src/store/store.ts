import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { newsSlice } from '@store/news/news.slice'
import { favoritesReducer } from './favorites/favorites.slice'

const reducers = combineReducers({
	images: newsSlice.reducer,
	favorites: favoritesReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
