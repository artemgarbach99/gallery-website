import { Form } from '@/components/Form/Form'
// import { Modal } from '@/components/Modal/Modal'
import { modalActions } from '@/store/modal/modal.slice'
// import { RootState } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import { doc, getFirestore, setDoc } from 'firebase/firestore'
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
		// const db = getFirestore()
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

				// const userId = user.uid
				// // Добавляем или обновляем данные пользователя
				// setDoc(
				// 	doc(db, 'users', userId),
				// 	{
				// 		customProperty:
				// 			'https://images.unsplash.com/photo-1735238075869-365228c7cb68?q=80&w=1573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				// 	},
				// 	{ merge: true }
				// )
			})
			.catch(() => errorMessage(email, password))
	}

	return (
		<div>
			<Form title='Login' handleClick={handleLogin} />
			{/* <Modal active={isOpen} message={message} /> */}
		</div>
	)
}
