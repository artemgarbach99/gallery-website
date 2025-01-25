import { SliderPostsCard } from '@/components/SliderPostsCard/SliderPostsCard'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import style from '@pages/Favorites/Favorites.module.scss'

export const Favorites = () => {
	const { favorites } = useSelector((state: RootState) => state.favorites)
	console.log(favorites)

	return (
		<div className={style.list}>
			{favorites.map((card, index) => (
				<SliderPostsCard key={index} card={card} />
			))}
		</div>
	)
}
