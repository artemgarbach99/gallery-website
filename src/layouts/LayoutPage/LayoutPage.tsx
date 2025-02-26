import { Header } from '@/components/Header/Header'
import { Modal } from '@/components/Modal/Modal'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const LayoutPage = () => {
	const { isOpen, message } = useSelector((state: RootState) => state.modal)
	return (
		<div className='wrapper'>
			<Header />
			<main>
				{/* <Breadcrumbs items={breadcrumbs} /> */}
				<div className='container'>
					<Outlet />
				</div>
			</main>
			<Modal active={isOpen} message={message} />
		</div>
	)
}
