import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, Navigation, Pagination } from 'swiper/modules'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect } from 'react'
import { fetchImages } from '@/store/news/news.actions'
import 'swiper/scss'
import slider from '@components/Slider/Slider.module.scss'
import { SliderCard } from '@components/SliderCard/SliderCard'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export const Slider = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchImages())
	}, [dispatch])

	return (
		<div className={slider.wrapper}>
			<Swiper
				modules={[Virtual, Navigation, Pagination]}
				spaceBetween={20}
				slidesPerView={1}
				className={slider.sliderCards}
				pagination={{
					clickable: true,
					el: `.${slider.pagination}`,
					renderBullet: (index, className) => {
						return `<span class="${className} ${slider.bullet}"></span>`
					},
					bulletActiveClass: `${slider.bulletActive}` // Кастомный класс для активного bullet
				}}
				navigation={{ prevEl: `.${slider.prevButton}`, nextEl: `.${slider.nextButton}` }}>
				{images.slice(2, 7).map((card, index) => (
					<SwiperSlide key={index} virtualIndex={index}>
						<SliderCard key={index} card={card} />
					</SwiperSlide>
				))}
				<button className={slider.prevButton}>
					<MdOutlineArrowBackIos />
				</button>
				<button className={slider.nextButton}>
					<MdArrowForwardIos />
				</button>
				<div className={slider.pagination}></div>
			</Swiper>
		</div>
	)
}
