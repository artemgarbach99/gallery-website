import { SliderPostsCard } from '@/components/SliderPostsCard/SliderPostsCard'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import style from '@pages/Favorites/Favorites.module.scss'
import { Breadcrumb, Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'

export const Favorites = () => {
	const { favorites } = useSelector((state: RootState) => state.favorites)

	const breadcrumbs: Breadcrumb[] = [{ name: 'Home', link: '/' }, { name: 'Favorites' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			{favorites.length > 0 ? (
				<div className={style.list}>
					{favorites.map((card, index) => (
						<SliderPostsCard key={index} card={card} />
					))}
				</div>
			) : (
				<div className={style.info}>nothing in favorites!</div>
			)}
		</div>
	)
}
