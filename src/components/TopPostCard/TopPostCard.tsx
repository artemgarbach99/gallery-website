import { IPostSlide } from '@/types/post.types'
import styles from '@components/TopPostCard/TopPostCard.module.scss'
import global from '@assets/styles/global.module.scss'
import { Link } from 'react-router-dom'

export const TopPostCard = ({ card }: { card: IPostSlide }) => {
	return (
		<div key={card.id} className={styles.card}>
			<Link to={`/card/${card.id}`} className={styles.image}>
				<img src={card.urls.regular} alt='' />
			</Link>
			<div className={styles.content}>
				<Link to={`/card/${card.id}`} className={global.h5}>
					{card.alt_description}
				</Link>
				<div className={global.h6}>{card.likes} likes</div>
			</div>
		</div>
	)
}
