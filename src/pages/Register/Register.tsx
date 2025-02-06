import { Form } from '@/components/Form/Form'
import { AppDispatch } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
	const dispatch: AppDispatch = useDispatch()
	const navigate = useNavigate()

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth()
		console.log(auth)
		createUserWithEmailAndPassword(auth, email, password)
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
			})
			.catch(console.error)
	}

	return (
		<div>
			<Form title='register' handleClick={handleRegister} />
		</div>
	)
}
