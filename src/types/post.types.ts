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
	}
	alt_description: string
	icon: string
	created_at: string
	topic_submissions: string
	likes: number
}
export type TtopSectionCard = Pick<IPostSlide, 'urls' | 'description' | 'alt_description'>
