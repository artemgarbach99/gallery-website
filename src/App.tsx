import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/LayoutMain/LayoutMain'
import { Main } from './pages/Main/Main'
import { Favorites } from '@pages/Favorites/Favorites'
import { LayoutPage } from './layouts/LayoutPage/LayoutPage'
import { CardPage } from './pages/CardPage/CardPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LayoutLogin } from './layouts/LayoutLogin/LayoutLogin'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { useEffect } from 'react'
import { modalActions } from './store/modal/modal.slice'
import { UserPage } from './pages/UserPage/UserPage'
import { ProfileEdit } from './pages/ProfileEdit/ProfileEdit'

function App() {
	const dispatch = useDispatch()
	const modal = useSelector((state: RootState) => state.modal.isOpen)

	useEffect(() => {
		if (modal) {
			const timer = setTimeout(() => {
				dispatch(modalActions.modalClosed())
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [modal, dispatch])

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Main />} />
				</Route>
				<Route element={<LayoutPage />}>
					<Route path='/favorites' element={<Favorites />} />
					<Route path='card/:id' element={<CardPage />} />
					<Route path='user-page/:id' element={<UserPage />} />
					<Route path='/profile-edit' element={<ProfileEdit />} />
				</Route>
				<Route element={<LayoutLogin />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
