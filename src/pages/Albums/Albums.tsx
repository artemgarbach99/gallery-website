import { fetchAlbums } from '@/store/albums/albums.actions'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '@pages/Albums/Albums.module.scss'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Breadcrumb } from '../Favorites/Favorites'

export const Albums = () => {
	const { albums, loading } = useSelector((state: RootState) => state.albums)
	const [page, setPage] = useState(1)
	const [fetching, setFetching] = useState(false)

	const dispatch: AppDispatch = useDispatch()
	const breadcrumbs: Breadcrumb[] = [{ name: 'Home', link: '/' }, { name: 'albums' }]

	// Обработчик прокрутки
	const handleScroll = e => {
		const distanceFetching =
			e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)

		if (distanceFetching < 10 && !fetching) {
			setFetching(true)
		}
	}

	useEffect(() => {
		if (!fetching) {
			setFetching(true) // Запускаем первую загрузку
		}
	}, []) // Пустой массив зависимостей, чтобы сработало только при монтировании

	// Загружаем данные при изменении `page`
	useEffect(() => {
		if (fetching) {
			console.log('fetching')
			setTimeout(() => {
				dispatch(fetchAlbums(page))
					.then(() => {
						setPage(prevPage => prevPage + 1) // Увеличиваем страницу
					})
					.finally(() => {
						setFetching(false)
					})
			}, 1000)
		}
	}, [fetching])

	// Добавляем и удаляем слушатель прокрутки
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={styles.body}>
			<Breadcrumbs items={breadcrumbs} />
			<div className={styles.list}>
				{albums.map((card, index) => (
					<div key={index} className={styles.card}>
						<div>id: {card.id}</div>
						{card.title}
					</div>
				))}
			</div>
			{(fetching || loading) && <div className={styles.loading}>loading...</div>}
		</div>
	)
}
