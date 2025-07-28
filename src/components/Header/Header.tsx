import header from '@components/Header/Header.module.scss'
import { Navigation } from '@/components/Navigation/Navigation'
import { Search } from '@components/Search/Search'
import { User } from '@components/User/User'
import { HiMiniSquare3Stack3D } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const Header = () => {
	const { favorites } = useSelector((state: RootState) => state.favorites)
	// const { email } = useSelector((state: RootState) => state.user)
	// console.log(email)

	return (
		<header className={header.header}>
			<div className='container'>
				<div className={header.body}>
					<div className={header.left}>
						<Link to={'/main'} className={header.logo}>
							<img src='/gallery-website/gallery.png' alt='' />
							<span className={header.logoName}>gallery</span>
						</Link>
						<Navigation />
					</div>
					<div className={header.right}>
						<Search />
						<User />
						<Link to={'/favorites'} className={header.favorite}>
							<HiMiniSquare3Stack3D size={24} />
							{favorites.length >= 1 && <span className={header.count}>{favorites.length}</span>}
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
