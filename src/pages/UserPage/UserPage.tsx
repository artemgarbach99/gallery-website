import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import userStyles from '@pages/UserPage/UserPage.module.scss'
import { getAuth } from 'firebase/auth'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const UserPage = () => {
	const { email } = useSelector((state: RootState) => state.user)
	const { isAuth } = useAuth()

	const auth = getAuth()
	const user = auth.currentUser

	const navigate = useNavigate()
	if (!isAuth) {
		navigate('/')
		return null // Возвращаем null, чтобы компонент ничего не рендерил после перенаправления
	}

	return (
		<div>
			<div>UserPage: {email}</div>
			<div className={userStyles.avatar}>
				<div className={userStyles.image}>
					<img src={user.photoURL} alt='User Profile' />
				</div>
				<div className={userStyles.name}>{user.displayName}</div>
			</div>
		</div>
	)
}
