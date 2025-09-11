import { IPostSlide } from '@/types/post.types'
import cardStyle from '@components/SliderPostsCard/SliderPostsCard.module.scss'
import global from '@assets/styles/global.module.scss'
import { HiMiniSquare3Stack3D } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { favoritesActions } from '@/store/favorites/favorites.slice'
import { Link } from 'react-router-dom'
import { modalActions } from '@/store/modal/modal.slice'

export const SliderPostsCard = ({ card }: { card: IPostSlide }) => {
	const dispatch: AppDispatch = useDispatch()

	const { favorites } = useSelector((state: RootState) => state.favorites)
	// const { images } = useSelector((state: RootState) => state.images)

	const isInFavorite: boolean = favorites.some(item => item.id === card.id)

	const handleAddToFavorites = () => {
		if (isInFavorite) {
			dispatch(favoritesActions.removeFavorites(card))
			dispatch(modalActions.modalOpen('Delete from favorites!'))
			// alert('уже есть в корзине!')
		} else {
			dispatch(favoritesActions.addToFavorites(card))
			dispatch(modalActions.modalOpen('Added to favorites!'))
			// console.log('Added to favorites!')
		}
	}

	// console.log(card.id)

	return (
		<div className={cardStyle.card}>
			<Link to={`/card/${card.id}`} className={cardStyle.image}>
				<img src={card.urls.regular} alt='' />
			</Link>
			<div className={cardStyle.block}>
				<Link to={`/card/${card.id}`} className={`${cardStyle.title} ${global.h5}`}>
					{card.alt_description}
				</Link>
				<div className={`${cardStyle.description} ${global.p}`}>{card.description}</div>
				<div className={cardStyle.user}>
					<div className={cardStyle.wrap}>
						<Link to={`/author-page/${card.id}`} className={cardStyle.icon}>
							<img src={card.user.profile_image.large} alt='' />
						</Link>
						<div className={cardStyle.content}>
							<Link to={`/author-page/${card.id}`} className={cardStyle.name}>
								{card.user.username}
							</Link>
							<div className={cardStyle.data}>{card.created_at}</div>
						</div>
					</div>
					<button onClick={handleAddToFavorites} className={cardStyle.favorite}>
						<HiMiniSquare3Stack3D size={20} color={isInFavorite ? '#F81539' : ''} />
					</button>
				</div>
			</div>
		</div>
	)
}
