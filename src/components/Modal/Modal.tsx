import modal from '@components/Modal/Modal.module.scss'

interface ModalProps {
	active: boolean
	message: string
}

export const Modal = ({ active, message }: ModalProps) => {
	return (
		<div className={active ? `${modal.modal} ${modal.active}` : modal.modal}>
			<div className={modal.content}>
				<div className={modal.title}>{message}</div>
			</div>
		</div>
	)
}
