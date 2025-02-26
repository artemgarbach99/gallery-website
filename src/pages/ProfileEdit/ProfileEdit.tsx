import { getAuth, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import userStyles from '@pages/ProfileEdit/ProfileEdit.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import global from '@assets/styles/global.module.scss'
import { BsFillSaveFill } from 'react-icons/bs'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Breadcrumb } from '../Favorites/Favorites'

export const ProfileEdit = () => {
	// const [userName, setUserName] = useState('')
	// const [userPhotoURL, setUserPhotoURL] = useState('')

	const auth = getAuth()
	const user = auth.currentUser

	const [userName, setUserName] = useState(user && user.displayName ? user.displayName : '')
	const [userPhotoURL, setUserPhotoURL] = useState(user && user.photoURL ? user.photoURL : '')
	const [userEmail, setUserEmail] = useState(user && user.email ? user.email : '')

	const { isAuth } = useAuth()
	const navigate = useNavigate()

	// if (!isAuth) {
	// 	navigate('/')
	// 	return null // Возвращаем null, чтобы компонент ничего не рендерил после перенаправления
	// }

	useEffect(() => {
		if (!isAuth) {
			navigate('/')
		}
	}, [isAuth, navigate])

	if (!isAuth) {
		return null // Возвращаем null, чтобы компонент ничего не рендерил после перенаправления
	}

	const saveUpdateProfile = () => {
		updateProfile(user, {
			displayName: userName,
			photoURL: userPhotoURL,
			email: userEmail
		})
			.then(() => {
				console.log('Успешно обновлено')
			})
			.catch(error => {
				console.error('Ошибка при обновлении!', error)
			})
	}

	const breadcrumbs: Breadcrumb[] = [{ name: 'Home', link: '/' }, { name: 'Profile edit' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<div className={userStyles.body}>
				<div className={userStyles.list}>
					<div className={userStyles.item}>
						<span className={global.h5}>User name</span>
						<div className={userStyles.input}>
							<input type='text' value={userName} onChange={e => setUserName(e.target.value)} placeholder='User name' />
						</div>
					</div>
					<div className={userStyles.item}>
						<span className={global.h5}>Add image</span>
						<div className={userStyles.input}>
							<input
								type='text'
								value={userPhotoURL}
								onChange={e => setUserPhotoURL(e.target.value)}
								placeholder='photoURL'
							/>
						</div>
					</div>
					<div className={userStyles.item}>
						<span className={global.h5}>Email</span>
						<div className={userStyles.input}>
							<input type='text' value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder='email' />
						</div>
					</div>
				</div>
				<button className={userStyles.button} onClick={saveUpdateProfile}>
					<BsFillSaveFill />
					save
				</button>
			</div>
		</div>
	)
}
