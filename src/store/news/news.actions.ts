import { IPostSlide } from '@/types/post.types'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface ApiResponse {
	results: IPostSlide[]
}

export const fetchImages = createAsyncThunk<IPostSlide[], void, { rejectValue: string }>(
	'images/fetchImages',
	async (images, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://api.unsplash.com/photos?page=2&&per_page=30&client_id=Y5sNf_2ibXSXDmY9kK3XWrVaDqIianhpaC7Fs3LZfqc'
			)
			const data: ApiResponse = await response.json()
			return data
			// return data.results
		} catch (error) {
			return rejectWithValue('Ошибка при получении данных!')
		}
	}
)
// https://newsdata.io/api/1/latest?apikey=pub_65185145078e5adcf24a9ac077079d7473a30 // news data
// https://api.mediastack.com/v1/news?access_key=5019fdbad571e729c64d584efd020548  // mediastack
// https://api.unsplash.com/photos/?client_id=Y5sNf_2ibXSXDmY9kK3XWrVaDqIianhpaC7Fs3LZfqc
// https://api.unsplash.com/photos?page=2&&per_page=30&client_id=Y5sNf_2ibXSXDmY9kK3XWrVaDqIianhpaC7Fs3LZfqc // unsplash 30шт. 2 страница
// https://api.unsplash.com/photos/?client_id=Y5sNf_2ibXSXDmY9kK3XWrVaDqIianhpaC7Fs3LZfqc // unsplash 10шт.
