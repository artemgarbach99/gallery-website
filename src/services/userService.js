import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const fetchUserData = async userId => {
	const db = getFirestore()
	const userRef = doc(db, 'users', userId)

	try {
		const userSnapshot = await getDoc(userRef)
		if (userSnapshot.exists()) {
			return userSnapshot.data()
		} else {
			console.error('Документ пользователя не найден!')
			return null
		}
	} catch (error) {
		console.error('Ошибка при извлечении данных:', error)
		return null
	}
}
