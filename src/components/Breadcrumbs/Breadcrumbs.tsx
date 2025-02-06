import { Link, useLocation } from 'react-router-dom'
import style from '@components/Breadcrumbs/Breadcrumbs.module.scss'
import global from '@assets/styles/global.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'

export const Breadcrumbs = () => {
	const location = useLocation()
	const path: string = location.pathname.split('/').pop() || ''

	return (
		<div className='container'>
			<ul className={style.wrap}>
				<li className={style.item}>
					<Link className={`${style.link} ${global.h5}`} to={'/'}>
						Home
					</Link>
					<MdArrowForwardIos size={14} />
				</li>
				{path && (
					<li className={style.item}>
						<Link className={`${style.link} ${global.h5} ${style.active}`} to={'/'}>
							{path}
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}
