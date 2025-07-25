import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const AuthorPage = () => {
	const { images } = useSelector((state: RootState) => state.images)
	const { id } = useParams()
	const author = images.find(author => author.id === id)

	const breadcrumbs = [{ name: 'Home', link: '/' }, { name: author ? `${author.user.first_name}` : '' }]

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<div>
				<img src={author?.user.profile_image.large} alt='' />
			</div>
			<div>{author?.user.name}</div>
			<div>{author?.user.location}</div>
			<div>{author?.user.bio}</div>
			<div>
				<span>statistic</span>
				<div>{author?.user.total_collections}</div>
				<div>{author?.user.total_illustrations}</div>
				<div>{author?.user.total_likes}</div>
				<div>{author?.user.total_photos}</div>
				<div>{author?.user.total_promoted_illustrations}</div>
				<div>{author?.user.total_promoted_photos}</div>
			</div>
			<div>
				<a href='https://unsplash.com/@lgnwvr'>account</a>
			</div>
		</div>
	)
}
