import { Link } from 'react-router-dom'
import style from '@components/Breadcrumbs/Breadcrumbs.module.scss'
import global from '@assets/styles/global.module.scss'
import { MdArrowForwardIos } from 'react-icons/md'

export interface Breadcrumb {
	name: string
	link?: string
}

interface BreadcrumbProps {
	items: Breadcrumb[]
}

export const Breadcrumbs = ({ items = [] }: BreadcrumbProps) => {
	// const location = useLocation()
	// const path: string = location.pathname.split('/').pop() || ''

	// const { images } = useSelector((state: RootState) => state.images)
	// const cardName = images.find(card => card.id === path) ?? ''

	// const { email } = useSelector((state: RootState) => state.user)

	return (
		<div>
			<ul className={style.wrap}>
				{items.map((item, index) => (
					<li key={index} className={style.item}>
						{item.link ? (
							<Link className={`${style.link} ${global.h5}`} to={item.link}>
								{item.name}
							</Link>
						) : (
							<span className={`${style.link} ${global.h5} ${style.active}`}>{item.name}</span>
						)}
						{index < items.length - 1 && <MdArrowForwardIos size={14} />}
					</li>
				))}
			</ul>
			{/* <ul className={style.wrap}>
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
			</ul> */}
		</div>
	)
}
