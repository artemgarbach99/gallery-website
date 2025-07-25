// export interface INews {
// 	author: string
// 	user: {
// 		bio: string
// 	}
// 	slug: string
// 	alt_description: string
// 	urls: {
// 		regular: string
// 	}
// 	language: string
// 	published_at: string
// }

// export type TCardPost = Pick<INews, 'urls' | 'user' | 'alt_description'>

export interface IPostSlide {
	id: string
	author: string
	description: string
	urls: {
		regular: string
		thumb: string
	}
	user: {
		bio: string
		profile_image: {
			large: string
		}
		username: string
		total_photos: string
		first_name: string
		name: string
		location: string
		total_collections: string
		total_illustrations: string
		total_likes: string
		total_promoted_illustrations: string
		total_promoted_photos: string
	}
	alt_description: string
	icon: string
	created_at: string
	topic_submissions: string
	likes: number
}

export type TtopSectionCard = Pick<IPostSlide, 'urls' | 'description' | 'alt_description' | 'id'>

export type TUserCustomProperty = { customProperty: string }
