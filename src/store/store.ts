import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { newsSlice } from '@store/news/news.slice'
import { favoritesReducer } from './favorites/favorites.slice'
import { userReducer } from './user/user.slice'
import { modalReducer } from './modal/modal.slice'

const reducers = combineReducers({
	images: newsSlice.reducer,
	favorites: favoritesReducer,
	user: userReducer,
	modal: modalReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
