import { Link, useLocation } from 'react-router-dom'
import style from '@components/Breadcrumbs/Breadcrumbs.module.scss'
import global from '@assets/styles/global.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const Breadcrumbs = () => {
	const location = useLocation()
	const path: string = location.pathname.split('/').pop() || ''
	console.log(path)

	const { images } = useSelector((state: RootState) => state.images)
	const cardName = images.find(card => card.id === path) ?? ''
	console.log(cardName)

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
						<span className={`${style.link} ${global.h5} ${style.active}`}>
							{cardName ? cardName.alt_description : path}
						</span>
					</li>
				)}
			</ul>
		</div>
	)
}
