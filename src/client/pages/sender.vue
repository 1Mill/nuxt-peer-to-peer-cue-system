<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			peerId: null,
		}
	},
	computed: {
		...mapState([
			'peer',
		]),
		message() {
			return this.peer && this.peer.connect().open ? "Connected" : "Waiting for input ..."
		}
	},
	methods: {
		connectToPeer() {
			// * Remove whitespace from input
			if (this.peerId) {
				const conn = this.peer.connect(this.peerId.trim())

				conn.on('open', () => {
					conn.send('Sending a message')
				})
			}
		},
	},
}
</script>

<template>
	<div>
		<h1>Sender</h1>

		<v-container>
			<v-layout column>
				<v-flex>
					<v-text-field
					label="Peer ID"
					style='max-width: 300px;'
					v-model='peerId'
					/>
					<v-btn
					@click='connectToPeer'
					color='primary'
					small
					>
						Connect
					</v-btn>
				</v-flex>
				<v-flex xs12>
					<strong>{{ message }}</strong>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
