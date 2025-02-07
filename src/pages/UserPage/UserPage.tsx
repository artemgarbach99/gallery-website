import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import userStyles from '@pages/UserPage/UserPage.module.scss'
import { getAuth } from 'firebase/auth'

export const UserPage = () => {
	const { email } = useSelector((state: RootState) => state.user)

	const auth = getAuth()
	const user = auth.currentUser

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
