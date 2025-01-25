import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/LayoutMain/LayoutMain'
import { Main } from './pages/Main/Main'
import { Favorites } from '@pages/Favorites/Favorites'
import { LayoutPage } from './layouts/LayoutPage/LayoutPage'
import { CardPage } from './pages/CardPage/CardPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Main />} />
				</Route>
				<Route element={<LayoutPage />}>
					<Route path='/favorites' element={<Favorites />} />
					<Route path='card/:id' element={<CardPage />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
