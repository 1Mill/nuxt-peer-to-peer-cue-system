export const state = () => ({
	SIGNALS: [
		'fade',
		'go',
		'off',
		'reset',
		'standby',
	],
	active: 'standby',
})

export const mutations = {
	SET_ACTIVE(state, payload) {
		state.active = payload
	},
}
