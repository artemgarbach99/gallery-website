import { Posts } from '@/components/Posts/Posts'
import { TopSectionCards } from '@/components/TopSectionCards/TopSectionCards'
import { Slider } from '@/components/Slider/Slider'
import main from '@pages/Main/Main.module.scss'

export const Main = () => {
	return (
		<div className={main.main}>
			<div className='container'>
				<div className={main.section}>
					<TopSectionCards />
					<Slider />
				</div>
				<Posts />
			</div>
		</div>
	)
}
