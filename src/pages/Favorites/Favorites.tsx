import { SliderPostsCard } from '@/components/SliderPostsCard/SliderPostsCard'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import style from '@pages/Favorites/Favorites.module.scss'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'

export interface Breadcrumb {
	name: string
	link?: string
}

export const Favorites = () => {
	const { favorites } = useSelector((state: RootState) => state.favorites)
	console.log(favorites)

	const breadcrumbs: Breadcrumb[] = [{ name: 'Home', link: '/' }, { name: 'Favorites' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<div className={style.list}>
				{favorites.map((card, index) => (
					<SliderPostsCard key={index} card={card} />
				))}
			</div>
		</div>
	)
}
