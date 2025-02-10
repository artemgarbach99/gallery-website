import { getAuth, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react'
import userStyles from '@pages/ProfileEdit/ProfileEdit.module.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export const ProfileEdit = () => {
	// const [userName, setUserName] = useState('')
	// const [userPhotoURL, setUserPhotoURL] = useState('')

	const auth = getAuth()
	const user = auth.currentUser

	const [userName, setUserName] = useState(user && user.displayName ? user.displayName : '')
	const [userPhotoURL, setUserPhotoURL] = useState(user && user.photoURL ? user.photoURL : '')
	console.log(userPhotoURL)

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
			photoURL: userPhotoURL
		})
			.then(() => {
				console.log('Успешно обновлено')
			})
			.catch(error => {
				console.error('Ошибка при обновлении displayName', error)
			})
	}

	return (
		<div>
			<div className={userStyles.input}>
				<input type='text' value={userName} onChange={e => setUserName(e.target.value)} placeholder='User name' />
			</div>
			<div className={userStyles.input}>
				<input
					type='text'
					value={userPhotoURL}
					onChange={e => setUserPhotoURL(e.target.value)}
					placeholder='photoURL'
				/>
			</div>
			<button onClick={saveUpdateProfile}>кнопка</button>
		</div>
	)
}
