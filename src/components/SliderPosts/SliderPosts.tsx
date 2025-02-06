import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect } from 'react'
import { fetchImages } from '@/store/news/news.actions'
import 'swiper/scss'
import sliderPostsStyles from '@components/SliderPosts/SliderPosts.module.scss'
import { SliderPostsCard } from '../SliderPostsCard/SliderPostsCard'

export const SliderPosts = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [dispatch])

	return (
		<div className={sliderPostsStyles.wrapper}>
			<Swiper
				modules={[Virtual, Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={4}
				className={sliderPostsStyles.sliderPosts}
				navigation={{ prevEl: `.${sliderPostsStyles.prevButton}`, nextEl: `.${sliderPostsStyles.nextButton}` }}>
				{images.map((card, index) => (
					<SwiperSlide key={index} virtualIndex={index}>
						<SliderPostsCard key={index} card={card} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
