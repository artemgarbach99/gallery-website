import { Modal } from '@/components/Modal/Modal'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const LayoutLogin = () => {
	const { isOpen, message } = useSelector((state: RootState) => state.modal)
	return (
		<div className='wrapper'>
			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
			<Modal active={isOpen} message={message} />
		</div>
	)
}
