import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from './albums.actions'

export interface IAlbumCard {
	title: string
	id: number
}

export interface AlbumsState {
	albums: IAlbumCard[]
	loading: boolean
	error: string | null
}

const initialState: AlbumsState = {
	albums: [],
	loading: false,
	error: null
}

export const albumsSlice = createSlice({
	name: 'albums',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAlbums.pending, state => {
				state.loading = true
			})
			.addCase(fetchAlbums.fulfilled, (state, action) => {
				state.albums = [...state.albums, ...action.payload] // Добавляем новые альбомы
				state.loading = false
			})
			.addCase(fetchAlbums.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { actions: albumsActions, reducer: albumsReducer } = albumsSlice
