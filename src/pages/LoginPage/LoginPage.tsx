import { Link } from 'react-router-dom'
import { Login } from '../Login/Login'
import global from '@assets/styles/global.module.scss'
import login from '@assets/styles/login.module.scss'

export const LoginPage = () => {
	return (
		<div className={login.login}>
			<div className={login.form}>
				<h1 className={global.h1}>Login</h1>
				<Login />
				<div className={login.link}>
					No account? <Link to='/register'>register</Link>
				</div>
			</div>
		</div>
	)
}
