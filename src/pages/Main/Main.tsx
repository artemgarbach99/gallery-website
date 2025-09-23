import { Posts } from '@/components/Posts/Posts'
import { TopSectionCards } from '@/components/TopSectionCards/TopSectionCards'
import { Slider } from '@/components/Slider/Slider'
import main from '@pages/Main/Main.module.scss'
import { PostsShowmore } from '@/components/PostsShowmore/PostsShowmore'
// import { useDispatch } from 'react-redux'
// import { useAuth } from '@/hooks/useAuth'
// import { Navigate } from 'react-router-dom'
// import { userActions } from '@/store/user/user.slice'

export const Main = () => {
	// const dispatch = useDispatch()

	// const { isAuth, email } = useAuth()
	// return isAuth ? (
	// 	<div className={main.main}>
	// 		<div className='container'>
	// 			Welcome {email}
	// 			<button onClick={() => dispatch(userActions.removeUser())}>log out</button>
	// 			<div className={main.section}>
	// 				<TopSectionCards />
	// 				<Slider />
	// 			</div>
	// 			<Posts />
	// 		</div>
	// 	</div>
	// ) : (
	// 	<Navigate to={'/login'} />
	// )
	return (
		<div className={main.main}>
			{/* Welcome {email} */}
			{/* <button onClick={() => dispatch(userActions.removeUser())}>log out</button> */}
			<div className={main.section}>
				<TopSectionCards />
				<Slider />
			</div>
			<Posts />
			<PostsShowmore />
		</div>
	)
}
