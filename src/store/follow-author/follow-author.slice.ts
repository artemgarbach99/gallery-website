import { IPostSlide } from '@/types/post.types'
import { InitialState } from '@/types/store.types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: InitialState<'authors', IPostSlide> = {
	authors: [],
	loading: false,
	error: null
}

export const followAuthorSlice = createSlice({
	name: 'follow-author',
	initialState,
	reducers: {
		addToSub: (state, action) => {
			const author = action.payload
			state.authors.push(author)
		},
		removeSub: (state, action) => {
			const author = action.payload
			return {
				...state,
				authors: state.authors.filter(item => item.id !== author.id)
			}
		}
	}
})

export const { actions: followAuthorActions, reducer: followAuthorReducer } = followAuthorSlice
