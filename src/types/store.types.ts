export type InitialState<K extends string, T> = {
	[P in K]: T[]
} & {
	loading: boolean
	error: string | null
}

export interface AlbumCard {
	title: string
	id: number
}
