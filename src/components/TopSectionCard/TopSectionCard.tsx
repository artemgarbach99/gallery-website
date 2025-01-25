import { TtopSectionCard } from '@/types/post.types'
import cardStyle from '@components/TopSectionCard/TopSectionCard.module.scss'
import global from '@assets/styles/global.module.scss'

export const TopSectionCard = ({ card }: { card: TtopSectionCard }) => {
	return (
		<div className={cardStyle.card}>
			<div className={cardStyle.image}>
				<img src={card.urls.regular} alt='' />
			</div>
			<div className={cardStyle.content}>
				<div className={cardStyle.wrap}>
					<div className={`${cardStyle.title} ${global.h4}`}>{card.alt_description}</div>
					<div className={`${cardStyle.description} ${global.p}`}>{card.description}</div>
				</div>
			</div>
		</div>
	)
}
