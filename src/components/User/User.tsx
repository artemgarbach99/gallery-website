import { useAuth } from '@/hooks/useAuth'
import { AppDispatch, RootState } from '@/store/store'
import { userActions } from '@/store/user/user.slice'
import user from '@components/User/User.module.scss'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { useState } from 'react'

export const User = () => {
	const dispatch: AppDispatch = useDispatch()
	const { isAuth, email } = useAuth()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const { id } = useSelector((state: RootState) => state.user)

	console.log(id)

	const dropDownHandler = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<div className={user.user}>
			<div className={user.avatar}>
				<FaUserAlt size={24} />
				{/* <img src='/user.png' alt='' /> */}
			</div>
			{isAuth ? (
				<div className={user.links}>
					<Link to={`/user-page/${id}`} className={user.name}>
						{email}
					</Link>
					<button
						type='button'
						className={isMenuOpen ? `${user.button} ${user.open}` : user.button}
						onClick={dropDownHandler}>
						<IoIosArrowDown />
					</button>
					{isMenuOpen && (
						<div className={user.dropdown}>
							<button className={user.logout} onClick={() => dispatch(userActions.removeUser())}>
								<RiLogoutBoxRLine size={16} /> log out
							</button>
							<Link to={'/profile-edit'}>profile edit</Link>
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
