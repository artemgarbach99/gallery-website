import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import userStyles from '@pages/UserPage/UserPage.module.scss'
import { getAuth } from 'firebase/auth'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { SliderPostsCard } from '@/components/SliderPostsCard/SliderPostsCard'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { fetchUserData } from '@/services/userService'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import '@assets/styles/_tabs.scss'
import { useEffect, useState } from 'react'
// import { TUserCustomProperty } from '@/types/post.types'
import { DocumentData } from 'firebase/firestore'
import { AuthorFollow } from '../AuthorFollow/AuthorFollow'

// type User = { customProperty: string }

export const UserPage = () => {
	// const [userData, setUserData] = useState<TUserCustomProperty | null>(null)
	const [userData, setUserData] = useState<DocumentData | null>(null)
	useEffect(() => {
		const auth = getAuth()
		const user = auth.currentUser

		if (user) {
			const userId = user.uid

			// Получаем данные пользователя
			fetchUserData(userId).then(data => {
				setUserData(data)
			})
		}
	}, [])
	const { email } = useSelector((state: RootState) => state.user)
	const { isAuth } = useAuth()

	const { images } = useSelector((state: RootState) => state.images)
	const { authors } = useSelector((state: RootState) => state.authors)

	const auth = getAuth()
	const user = auth.currentUser

	const navigate = useNavigate()
	if (!isAuth) {
		navigate('/')
		return null // Возвращаем null, чтобы компонент ничего не рендерил после перенаправления
	}

	const breadcrumbs = [{ name: 'Home', link: '/' }, { name: (user && user.displayName) || email }]

	return (
		<Tabs>
			<Breadcrumbs items={breadcrumbs} />
			<div className={userStyles.top}>
				<div className={userStyles.banner}>
					<img
						// src='https://images.unsplash.com/photo-1734784548166-a1ffe07dd7cd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						src={userData?.customProperty ?? ''}
						alt=''
					/>
				</div>
				<div className={userStyles.row}>
					{user && (
						<div className={userStyles.avatar}>
							<div className={userStyles.image}>
								<img src={user.photoURL ?? ''} alt='User Profile' />
							</div>
							<div className={userStyles.block}>
								<div className={userStyles.name}>{user.displayName}</div>
								<div className={userStyles.email}>{email}</div>
								{/* <div>{userData ? <div>{userData.customProperty}</div> : <div>Загрузка данных...</div>}</div> */}
							</div>
						</div>
					)}
					<TabList className={userStyles.menu}>
						<Tab className={userStyles.link}>Most liked posts</Tab>
						<Tab className={userStyles.link}>Subscriptions</Tab>
					</TabList>
					<Link className={userStyles.edit} to={'/profile-edit'}>
						<FaUserEdit size={16} />
						Edit Profile
					</Link>
				</div>
			</div>
			<div className={userStyles.content}>
				<TabPanel className={userStyles.list}>
					{images
						.filter(card => card.likes >= 50)
						.map((card, index) => (
							<SliderPostsCard key={index} card={card} />
						))}
				</TabPanel>
				<TabPanel>
					{authors.length > 0 ? (
						<div className={userStyles.list}>
							{authors.map((card, index) => (
								<AuthorFollow key={index} author={card} />
							))}
						</div>
					) : (
						<div>nothing in subscriptions!</div>
					)}
				</TabPanel>
			</div>
		</Tabs>
	)
}
