import { fetchImages, fetchNews } from '@/store/news/news.actions'
import { AppDispatch, RootState } from '@store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TopSectionCard } from '@components/TopSectionCard/TopSectionCard'
import style from '@components/TopSectionCards/TopSectionCards.module.scss'

export const TopSectionCards = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [dispatch])

	return (
		<div className={style.cards}>
			<div className={style.list}>
				{images.slice(0, 2).map((card, index) => (
					<TopSectionCard key={index} card={card} />
				))}
			</div>
		</div>
	)
}
