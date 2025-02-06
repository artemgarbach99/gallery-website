import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	message: '',
	error: false
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		modalOpen: (state, action) => {
			state.isOpen = true
			state.message = action.payload
		},
		modalClosed: state => {
			state.isOpen = false
			state.message = ''
		},
		setError: (state, action) => {
			state.error = action.payload
		}
	}
})

export const { actions: modalActions, reducer: modalReducer } = modalSlice
