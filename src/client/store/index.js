export const actions = {
	nuxtClientInit() {
		// * Check that peer object exists on page mount, otherwise redirect to homepage
		if (!this.$peer.id) this.app.router.push('/')
	},
}
