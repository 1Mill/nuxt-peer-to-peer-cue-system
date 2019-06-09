import Peer from 'peerjs';

// TODO: Allow `peerjs` to mutate store because of race condition
export const strict = false

export const state = () => ({
	peer: null,
})

export const mutations = {
	INIT_PEER(state) {
		// * Create new instance of peer
		let peer = new Peer(null, { debug: 2 })

		// * Open peer instance to connections from other peers
		peer.on('open', (id) => {
			// * `id` is your peerjs instance id
		});

		// * Watch for connections from other peers
		peer.on('connection', (conn) => {
			// * Watch for data transmitions (s.e.d conn.send) from other peers
			conn.on('open', () => {
				conn.on('data', (data) => {
					// * `data` is the data sent from the peer
					console.log(data)
				});
			});
		});

		// TODO: Find a way to make peer load before inject occures (e.g. async / await?)
		// TODO: as currently there is a race condition between vue mounting and peer
		// TODO: being ready
		state.peer = peer;
	}
}

export const actions = {
	nuxtClientInit({ commit, state }) {
		commit('INIT_PEER')

		// * Check that peer object exists on page mount, otherwise, redirect to index
		if (!state.peer.id) this.app.router.push('/')
	},
}

