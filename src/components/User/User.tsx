import { useAuth } from '@/hooks/useAuth'
import { AppDispatch } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import user from '@components/User/User.module.scss'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const User = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, email } = useAuth()
	return (
		<div className={user.user}>
			<div className={user.avatar}>
				<FaUserAlt size={24} />
				{/* <img src='/user.png' alt='' /> */}
			</div>
			{/* <div className={user.name}>Behzad</div> */}
			{isAuth ? (
				<div className={user.links}>
					<div className={user.name}>{email}</div>
					<button onClick={() => dispatch(userActions.removeUser())}>log out</button>
				</div>
			) : (
				<div className={user.links}>
					<Link to={'/login'} className={user.name}>
						login
					</Link>
					{/* <Link to={'/register'} className={user.name}>
						register
					</Link> */}
				</div>
			)}
		</div>
	)
}
