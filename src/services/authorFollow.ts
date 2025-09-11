import { followAuthorActions } from '@/store/follow-author/follow-author.slice'
import { modalActions } from '@/store/modal/modal.slice'
import { selectIsSubscribed } from './selectors'

export const toggleSubscription = card => (dispatch, getState) => {
	// getState() возвращает RootState
	const state = getState()

	// снова передаём весь state
	const isInSub = selectIsSubscribed(state, card.id)

	if (isInSub) {
		dispatch(followAuthorActions.removeSub(card))
		dispatch(modalActions.modalOpen('Unsubscribe!'))
	} else {
		dispatch(followAuthorActions.addToSub(card))
		dispatch(modalActions.modalOpen('Subscribe!'))
	}
}
