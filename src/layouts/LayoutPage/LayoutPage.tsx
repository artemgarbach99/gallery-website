import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Header } from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'

export const LayoutPage = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<Breadcrumbs />
				<div className='container'>
					<Outlet />
				</div>
			</main>
		</div>
	)
}
