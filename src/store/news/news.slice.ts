import { IPostSlide } from '@/types/post.types'
import { InitialState } from '@/types/store.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchImages } from '@store/news/news.actions'

// export interface ImagesState {
// 	images: IPostSlide[]
// 	loading: boolean
// 	error: string | null
// }

const initialState: InitialState<'images', IPostSlide> = {
	images: [],
	loading: false,
	error: null
}

export const newsSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchImages.pending, state => {
				state.loading = true
			})
			.addCase(fetchImages.fulfilled, (state, action: PayloadAction<IPostSlide[]>) => {
				state.images = action.payload
				state.loading = false
			})
			.addCase(fetchImages.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	}
})

export const { actions: newsActions, reducer: newsReducer } = newsSlice
