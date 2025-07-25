import { getAuth, updateEmail, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import userStyles from '@pages/ProfileEdit/ProfileEdit.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import global from '@assets/styles/global.module.scss'
import { BsFillSaveFill } from 'react-icons/bs'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Breadcrumb } from '../Favorites/Favorites'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { modalActions } from '@/store/modal/modal.slice'

export const ProfileEdit = () => {
	// const [userName, setUserName] = useState('')
	// const [userPhotoURL, setUserPhotoURL] = useState('')

	const auth = getAuth()
	const user = auth.currentUser
	const db = getFirestore()
	const dispatch = useDispatch()

	const [userName, setUserName] = useState(user && user.displayName ? user.displayName : '')
	const [userPhotoURL, setUserPhotoURL] = useState(user && user.photoURL ? user.photoURL : '')
	const [userEmail, setUserEmail] = useState(user && user.email ? user.email : '')
	const [userImageBanner, setUserImageBanner] = useState('')

	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (user && user.uid) {
			const userDocRef = doc(db, 'users', user.uid)
			getDoc(userDocRef)
				.then(docSnap => {
					if (docSnap.exists()) {
						const data = docSnap.data()
						setUserImageBanner(data.customProperty || '')
					} else {
						console.log('Документа для пользователя нет')
					}
				})
				.catch(error => console.error('Ошибка получения данных пользователя из Firestore:', error))
		}
	}, [user])

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
		// const db = getFirestore()
		if (user) {
			updateProfile(user, {
				displayName: userName,
				photoURL: userPhotoURL
				// email: userEmail
			})
				.then(() => {
					console.log('Профиль успешно обновлен')
					// Обновляем email через отдельную функцию
					return updateEmail(user, userEmail)
				})
				.then(() => {
					console.log('Успешно обновлен email')
					dispatch(modalActions.modalOpen('Successfully added!'))
					// После успешного обновления профиля обновляем Firestore
					const userId = user.uid
					setDoc(
						doc(db, 'users', userId),
						{
							customProperty: `${userImageBanner}`
						},
						{ merge: true }
					)
						.then(() => {
							console.log('Дополнительное свойство успешно обновлено в Firestore')
						})
						.catch(error => {
							console.error('Ошибка при обновлении дополнительного свойства!', error)
						})
				})
				.catch(error => {
					console.error('Ошибка при обновлении!', error)
				})
		}
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
					<div className={userStyles.item}>
						<span className={global.h5}>Image for banner</span>
						<div className={userStyles.input}>
							<input
								type='text'
								value={userImageBanner}
								onChange={e => setUserImageBanner(e.target.value)}
								placeholder='image banner'
							/>
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
