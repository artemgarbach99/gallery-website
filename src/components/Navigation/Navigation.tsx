import global from '@assets/styles/global.module.scss'
import menu from '@components/Navigation/Navigation.module.scss'
import { Link } from 'react-router-dom'

export const Navigation = () => {
	return (
		<ul className={menu.menu}>
			<li>
				<Link to={'/albums'} className={global.h6}>
					Albums
				</Link>
			</li>
			<li>
				<a href='' className={global.h6}>
					Categories
				</a>
			</li>
			<li>
				<a href='' className={global.h6}>
					Pages
				</a>
			</li>
			<li>
				<a href='' className={global.h6}>
					contact us
				</a>
			</li>
			<li>
				<a href='' className={global.h6}>
					about us
				</a>
			</li>
		</ul>
	)
}
