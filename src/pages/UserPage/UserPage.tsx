import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import userStyles from '@pages/UserPage/UserPage.module.scss'
import { getAuth } from 'firebase/auth'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { SliderPostsCard } from '@/components/SliderPostsCard/SliderPostsCard'

export const UserPage = () => {
	const { email } = useSelector((state: RootState) => state.user)
	const { isAuth } = useAuth()

	const { images } = useSelector((state: RootState) => state.images)

	const auth = getAuth()
	const user = auth.currentUser

	const navigate = useNavigate()
	if (!isAuth) {
		navigate('/')
		return null // Возвращаем null, чтобы компонент ничего не рендерил после перенаправления
	}

	return (
		<div>
			<div className={userStyles.top}>
				<div className={userStyles.banner}>
					<img
						src='https://images.unsplash.com/photo-1734784548166-a1ffe07dd7cd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
					/>
				</div>
				<div className={userStyles.row}>
					<div className={userStyles.avatar}>
						<div className={userStyles.image}>
							<img src={user.photoURL} alt='User Profile' />
						</div>
						<div className={userStyles.block}>
							<div className={userStyles.name}>{user.displayName}</div>
							<div className={userStyles.email}>{email}</div>
						</div>
					</div>
					<ul className={userStyles.menu}>
						<li className={userStyles.link}>Liked posts</li>
						<li className={userStyles.link}>Interesting</li>
					</ul>
					<Link className={userStyles.edit} to={'/profile-edit'}>
						<FaUserEdit size={16} />
						Edit Profile
					</Link>
				</div>
			</div>
			<div className={userStyles.content}>
				{images.map((card, index) => (
					<SliderPostsCard key={index} card={card} />
				))}
			</div>
		</div>
	)
}
