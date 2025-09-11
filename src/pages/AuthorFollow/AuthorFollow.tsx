import { toggleSubscription } from '@/services/authorFollow'
import { selectIsSubscribed } from '@/services/selectors'
import { AppDispatch, RootState } from '@/store/store'
import style from '@pages/AuthorFollow/AuthorFollow.module.scss'
import cardStyles from '@pages/CardPage/CardPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const AuthorFollow = ({ author }) => {
	const dispatch: AppDispatch = useDispatch()

	// const { images } = useSelector((state: RootState) => state.images)
	// const { id } = useParams()
	// const card = images.find(card => card.id === id)

	const isInSub = useSelector((state: RootState) => selectIsSubscribed(state, author.id))

	return (
		<div className={style.card}>
			<Link to={`/author-page/${author.id}`} className={style.image}>
				<img src={author?.user.profile_image.large} alt='' />
			</Link>
			<div className={style.content}>
				<Link to={`/author-page/${author.id}`} className={style.name}>
					{author.user.username}
				</Link>
				<div className={style.total}>{author.user.total_photos} photos</div>
				<button onClick={() => dispatch(toggleSubscription(author))} type='button' className={cardStyles.follow}>
					{isInSub ? 'unsubscribe' : 'subscribe'}
				</button>
			</div>
		</div>
	)
}
