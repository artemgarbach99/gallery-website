import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import cardStyles from '@pages/CardPage/CardPage.module.scss'
import global from '@assets/styles/global.module.scss'
import { FaRegCalendar } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { CiFolderOn } from 'react-icons/ci'
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs'
import { TopPostCard } from '@components/TopPostCard/TopPostCard'

export const CardPage = () => {
	const location = useLocation()
	const path: string = location.pathname.split('/').pop() || ''

	const { images } = useSelector((state: RootState) => state.images)
	const { id } = useParams()
	const card = images.find(card => card.id === id)
	console.log(card)

	const cardName = images.find(card => card.id === path)
	const breadcrumbs = [{ name: 'Home', link: '/' }, { name: cardName ? `${cardName.alt_description}` : '' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			{card ? (
				<div className={cardStyles.card}>
					<div className={cardStyles.content}>
						<div className={cardStyles.wrap}>
							<div className={global.h1}>{card.alt_description}</div>
							<div className={cardStyles.image}>
								<img src={card.urls.regular} alt='' />
							</div>
							<div className={cardStyles.info}>
								<div className={cardStyles.item}>
									<FaRegCalendar />
									{card.created_at}
								</div>
								<div className={cardStyles.item}>
									<AiOutlineLike size={20} />
									likes:
									{card.likes}
								</div>
								<div className={cardStyles.item}>
									<CiFolderOn size={20} />
									{Object.keys(card.topic_submissions)}
								</div>
							</div>
						</div>
					</div>
					<div className={cardStyles.sidebar}>
						<div className={cardStyles.links}>
							<a href='#' className={cardStyles.link}>
								share
							</a>
							<a href='#' className={cardStyles.link}>
								marking
							</a>
							<a href='#' className={cardStyles.link}>
								comment
							</a>
						</div>
						<div className={cardStyles.block}>
							<div className={cardStyles.line}>
								<div className={cardStyles.avatar}>
									<img src={card.user.profile_image.large} alt='' />
								</div>
								<div className={cardStyles.inner}>
									<Link to={`/author-page/${card.id}`} className={global.h5}>
										{card.user.username}
									</Link>
									<div className={cardStyles.total}>{card.user.total_photos} photos</div>
								</div>
							</div>
						</div>
						<div className={cardStyles.block}>
							<div className={global.h4}>top post</div>
							<div className={cardStyles.list}>
								{[...images]
									.sort((a, b) => b.likes - a.likes)
									.slice(0, 5)
									.map(card => (
										<TopPostCard card={card} key={card.id} />
									))}
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	)
}
