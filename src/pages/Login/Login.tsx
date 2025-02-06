import { Form } from '@/components/Form/Form'
// import { Modal } from '@/components/Modal/Modal'
import { modalActions } from '@/store/modal/modal.slice'
// import { RootState } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// export interface LoginData {
// 	email: string
// 	password: string
// }

export const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// const { isOpen, message } = useSelector((state: RootState) => state.modal)

	const errorMessage = (email: string, password: string) => {
		// console.log(email, password)
		if (!email || !password) {
			dispatch(modalActions.modalOpen('Empty fields!'))
		} else {
			dispatch(modalActions.modalOpen('Incorrect password or login!'))
		}
		dispatch(modalActions.setError(true))
	}

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					userActions.setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken
					})
				)
				navigate('/')
				dispatch(modalActions.setError(false))
			})
			.catch(() => errorMessage(email, password))
		// .catch(() => alert('Invalid user!'))
	}
	return (
		<div>
			<Form title='Login' handleClick={handleLogin} />
			{/* <Modal active={isOpen} message={message} /> */}
		</div>
	)
}
