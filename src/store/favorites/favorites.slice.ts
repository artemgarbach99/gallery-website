import { IPostSlide } from '@/types/post.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavotitesState {
	favorites: IPostSlide[]
	loading: boolean
	error: string | null
}

const initialState: FavotitesState = {
	favorites: [],
	loading: false,
	error: null
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites: (state, action: PayloadAction<IPostSlide>) => {
			const card = action.payload
			state.favorites.push(card)
		},
		removeFavorites: (state, action: PayloadAction<IPostSlide>) => {
			const card = action.payload
			return {
				...state,
				favorites: state.favorites.filter(item => item.id !== card.id)
			}
		}
	}
})

export const { actions: favoritesActions, reducer: favoritesReducer } = favoritesSlice
