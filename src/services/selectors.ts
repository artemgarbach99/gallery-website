import { RootState } from '@/store/store'

export const selectIsSubscribed = (state: RootState, cardId: string): boolean =>
	state.authors.authors.some(a => a.id === cardId)
