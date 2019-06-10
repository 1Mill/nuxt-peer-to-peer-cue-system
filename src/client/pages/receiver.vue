<template>
	<div>
		<h1>Reciever</h1>
		<v-container>
			<v-layout column>
				<v-flex>
					My ID: <strong>{{ $peer.id }}</strong>
				</v-flex>
				<v-flex>
					<strong>{{ message }}</strong>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-flex
				:key='signal'
				v-for='signal in SIGNALS'
				>
					<v-btn
					:color='`${ signal === active ? "info" : "accent" }`'
					large
					>
						{{ signal }}
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			message: 'Waiting for connection ...',
		}
	},
	computed: {
		...mapState('signals', [
			'SIGNALS',
			'active',
		]),
	},
	mounted() {
		// * Watch for connections from other peers
		this.$peer.on('connection', (conn) => {
			this.message = 'Connected'

			// * Watch for data transmitions (s.e.d conn.send) from other peers
			conn.on('open', () => {
				conn.on('data', (data) => {
					// * `data` is the data sent from the peer
					this.$store.commit('signals/SET_ACTIVE', data)
				});
			});
		});
	},
}
</script>

