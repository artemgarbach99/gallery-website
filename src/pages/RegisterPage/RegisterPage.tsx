import { Link } from 'react-router-dom'
import { Register } from '../Register/Register'
import login from '@assets/styles/login.module.scss'
import global from '@assets/styles/global.module.scss'

export const RegisterPage = () => {
	return (
		<div className={login.login}>
			<div className={login.form}>
				<h1 className={global.h1}>Register</h1>
				<Register />
				<div className={login.link}>
					Have an account? <Link to='/login'>Login</Link>
				</div>
			</div>
		</div>
	)
}
