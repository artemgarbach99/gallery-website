import { AlbumCard } from '@/types/store.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

type Response<T> = {
	data: T | null
	error: string | null
}

export const fetchAlbums = createAsyncThunk<Response<AlbumCard[]>, number>(
	'albums/fetchAlbums',
	async (page, { rejectWithValue }) => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=15&_page=${page}`)
			const data: AlbumCard[] = await response.json()
			return { data, error: null }
		} catch (error: unknown) {
			if (error instanceof Error) {
				return rejectWithValue(error.message)
			}
			return rejectWithValue('Неизвестная ошибка')
		}
	}
)
