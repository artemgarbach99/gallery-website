import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import stylesAuthor from '@pages/AuthorPage/AuthorPage.module.scss'
import { SlLocationPin } from 'react-icons/sl'

export const AuthorPage = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const { id } = useParams()
	const author = images.find(author => author.id === id)

	const breadcrumbs = [{ name: 'Home', link: '/' }, { name: author ? `${author.user.first_name}` : '' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<div className={stylesAuthor.main}>
				<div className={stylesAuthor.top}>
					<div className={stylesAuthor.image}>
						<img src={author?.user.profile_image.large} alt='' />
					</div>
					<div className={stylesAuthor.content}>
						<div className={stylesAuthor.name}>{author?.user.name}</div>
						<div className={stylesAuthor.location}>
							<SlLocationPin size='20px' />
							{author?.user.location}
						</div>
						<div className={stylesAuthor.bio}>{author?.user.bio}</div>
					</div>
				</div>
				<ul className={stylesAuthor.statistic}>
					<div className={stylesAuthor.item}>
						<span>collections</span>
						{author?.user.total_collections}
					</div>
					<div className={stylesAuthor.item}>
						<span>illustrations</span>
						{author?.user.total_illustrations}
					</div>
					<div className={stylesAuthor.item}>
						<span>likes</span>
						{author?.user.total_likes}
					</div>
					<div className={stylesAuthor.item}>
						<span>photos</span>
						{author?.user.total_photos}
					</div>
					<div className={stylesAuthor.item}>
						<span>promoted illustrations</span>
						{author?.user.total_promoted_illustrations}
					</div>
					<div className={stylesAuthor.item}>
						<span>promoted photos</span>
						{author?.user.total_promoted_photos}
					</div>
				</ul>
				<a href={author?.user.links.html} className={stylesAuthor.link}>
					account
				</a>
			</div>
		</div>
	)
}
