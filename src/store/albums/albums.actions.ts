import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (page: number, { rejectWithValue }) => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=15&_page=${page}`)
		const data = await response.json()
		return data
	} catch (error: unknown) {
		if (error instanceof Error) {
			return rejectWithValue(error.message)
		}
		return rejectWithValue('Неизвестная ошибка')
	}
})
