import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from './albums.actions'
import { AlbumCard, InitialState } from '@/types/store.types'

// export interface AlbumsState {
// 	albums: IAlbumCard[]
// 	loading: boolean
// 	error: string | null
// }

const initialState: InitialState<'albums', AlbumCard> = {
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
				if (action.payload.data) {
					state.albums = [...state.albums, ...action.payload.data]
				}
				// state.albums = [...state.albums, ...action.payload] // Добавляем новые альбомы
				state.loading = false
			})
			.addCase(fetchAlbums.rejected, (state, action) => {
				const error = action.payload as string
				state.loading = false
				state.error = error
			})
	}
})

export const { actions: albumsActions, reducer: albumsReducer } = albumsSlice
