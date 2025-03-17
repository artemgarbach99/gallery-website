import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { SliderPostsCard } from '../SliderPostsCard/SliderPostsCard'
import global from '@assets/styles/global.module.scss'
import posts from '@components/Posts/Posts.module.scss'
import styles from '@components/PostsShowmore/PostsShowmore.module.scss'
import { useState } from 'react'

export const PostsShowmore = () => {
	const { images } = useSelector((state: RootState) => state.images)

	const [visibleItems, setVisibleItems] = useState(8)

	const loadMore = () => {
		setVisibleItems(prevItems => prevItems + 8)
	}

	return (
		<div className={posts.wrap}>
			<div className={global.h4}>All Posts</div>
			<div className={styles.list}>
				{images
					.slice(0, visibleItems)
					// .filter(card => card.likes >= 50)
					.map((card, index) => (
						<SliderPostsCard key={index} card={card} />
					))}
			</div>
			<div className={styles.bottom}>
				<button onClick={loadMore} className={styles.button}>
					showmore
				</button>
			</div>
		</div>
	)
}
