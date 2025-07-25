import { useAuth } from '@/hooks/useAuth'
import { AppDispatch, RootState } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import user from '@components/User/User.module.scss'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { FaUserEdit } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'

export const User = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, email } = useAuth()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { id } = useSelector((state: RootState) => state.user)
	const auth = getAuth()
	const userFarebase = auth.currentUser

	console.log(userFarebase)

	const dropDownHandler = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<div className={user.user}>
			<div className={user.avatar}>
				{isAuth && userFarebase ? (
					<Link to={`/user-page/${id}`}>
						<img src={userFarebase.photoURL ?? undefined} alt='User Profile' />
					</Link>
				) : (
					<FaUserAlt size={24} />
				)}
			</div>
			{isAuth && userFarebase ? (
				<div className={user.content}>
					<Link to={`/user-page/${id}`} className={user.name}>
						{userFarebase.displayName ? userFarebase.displayName : email}
					</Link>
					<button
						type='button'
						className={isMenuOpen ? `${user.button} ${user.open}` : user.button}
						onClick={dropDownHandler}>
						<IoIosArrowDown />
					</button>
					{isMenuOpen && (
						<div className={user.dropdown}>
							<Link className={user.link} to={'/profile-edit'}>
								<FaUserEdit size={16} />
								profile edit
							</Link>
							<button className={user.link} onClick={() => dispatch(userActions.removeUser())}>
								<IoMdLogOut size={16} /> log out
							</button>
						</div>
					)}
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
