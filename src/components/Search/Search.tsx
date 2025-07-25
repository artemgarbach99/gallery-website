import { FaSearch } from 'react-icons/fa'
import search from '@components/Search/Search.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Link } from 'react-router-dom'
import { FaUserNinja } from 'react-icons/fa'

export const Search = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const [searchTerm, setSearchTerm] = useState('')
	const [isDropdownVisible, setIsDropdownVisible] = useState(false)
	const inputRef = useRef(null) // Ссылка на input
	const dropdownRef = useRef(null) // Ссылка на dropdown

	const filteredCards = images.filter(
		card => searchTerm && card.alt_description.toLowerCase().includes(searchTerm.toLowerCase())
	)

	// Обработчик кликов вне элемента
	const handleOutsideClick = (event: MouseEvent) => {
		if (
			inputRef.current &&
			!inputRef.current.contains(event.target) && // Проверяем, что клик был вне input
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target) // И вне dropdown
		) {
			setIsDropdownVisible(false) // Закрываем dropdown
		}
	}

	// Добавляем/удаляем обработчик событий
	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick)
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [])

	return (
		<div className={search.body}>
			<div className={search.search}>
				<input
					type='text'
					placeholder='Search anything'
					value={searchTerm}
					onChange={e => {
						setSearchTerm(e.target.value)
						setIsDropdownVisible(true)
					}}
					ref={inputRef}
				/>
				<button className={search.button}>
					<FaSearch />
				</button>
			</div>
			{isDropdownVisible &&
				searchTerm &&
				(filteredCards.length > 0 ? (
					<div className={search.dropdown} ref={dropdownRef}>
						{filteredCards.map(card => (
							<Link to={`/card/${card.id}`} key={card.id} className={search.card}>
								<div className={search.image}>
									<img src={card.urls.thumb} alt='' />
								</div>
								<div className={search.content}>
									<div className={search.title}>{card.alt_description}</div>
									<div className={search.user}>
										<FaUserNinja color='#f81539' size={16} />
										{card.user.username}
									</div>
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className={search.dropdown}>
						<div className={search.title}>not found!</div>
					</div>
				))}
			{/* {searchTerm && filteredCards.length > 0 ? (
				<div className={search.dropdown}>
					{filteredCards.map(card => (
						<Link to={`/card/${card.id}`} key={card.id} className={search.card}>
							<div className={search.image}>
								<img src={card.urls.thumb} alt='' />
							</div>
							<div className={search.content}>
								<div className={search.title}>{card.alt_description}</div>
								<div className={search.user}>
									<FaUserNinja color='#f81539' size={16} />
									{card.user.username}
								</div>
							</div>
						</Link>
					))}
				</div>
			) : ('123')} */}
		</div>
	)
}
