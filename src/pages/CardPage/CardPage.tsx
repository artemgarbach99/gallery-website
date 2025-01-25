import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import cardStyles from '@pages/CardPage/CardPage.module.scss'
import global from '@assets/styles/global.module.scss'
import { FaRegCalendar } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { CiFolderOn } from 'react-icons/ci'

export const CardPage = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const { id } = useParams()
	const card = images.find(card => card.id === id)

	return (
		<div>
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
					<div className={cardStyles.sidebar}>sidebar</div>
				</div>
			) : (
				''
			)}
		</div>
	)
}
