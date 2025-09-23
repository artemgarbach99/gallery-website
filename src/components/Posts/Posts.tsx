import posts from '@components/Posts/Posts.module.scss'
import { SliderPosts } from '../SliderPosts/SliderPosts'
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import sliderPostsStyles from '@components/SliderPosts/SliderPosts.module.scss'

export const Posts = () => {
	return (
		<div className={posts.wrap}>
			<div className={posts.top}>
				<div className={posts.title}>popular posts</div>
				<div className={posts.navigation}>
					<button className={sliderPostsStyles.prevButton}>
						<MdOutlineArrowBackIos />
					</button>
					<button className={sliderPostsStyles.nextButton}>
						<MdArrowForwardIos />
					</button>
				</div>
			</div>
			<SliderPosts />
		</div>
	)
}
