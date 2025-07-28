import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
	email: string
	token: string
	id: string
}

const initialState: IUser = {
	email: '',
	token: '',
	id: ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser(state) {
			state.email = ''
			state.token = ''
			state.id = ''
		}
	}
})

export const { actions: userActions, reducer: userReducer } = userSlice
