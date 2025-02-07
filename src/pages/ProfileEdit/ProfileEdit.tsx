import { getAuth, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import userStyles from '@pages/ProfileEdit/ProfileEdit.module.scss'

export const ProfileEdit = () => {
	const [userName, setUserName] = useState('')
	const [userPhotoURL, setUserPhotoURL] = useState('')

	const auth = getAuth()
	const user = auth.currentUser

	const saveUpdateProfile = () => {
		updateProfile(user, {
			displayName: userName,
			photoURL: userPhotoURL
			// photoURL: 'https://twam.ru/wp-content/uploads/2024/02/panda-v-ochkakh-1.webp'
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
