import user from '@components/User/User.module.scss'
import { FaUserAlt } from 'react-icons/fa'

export const User = () => {
	return (
		<div className={user.user}>
			<div className={user.avatar}>
				<FaUserAlt size={24} />
				{/* <img src='/user.png' alt='' /> */}
			</div>
			{/* <div className={user.name}>Behzad</div> */}
			<div className={user.name}>Login</div>
		</div>
	)
}
