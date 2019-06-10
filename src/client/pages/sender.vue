<script>
export default {
	data() {
		return {
			peerId: null,
		}
	},
	methods: {
		joinPeer() {
			if (this.peerId) {
				const conn = this.$peer.connect(this.peerId.trim())

				conn.on('open', () => {
					conn.send('Sending a new message')
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
					@click='joinPeer'
					color='primary'
					small
					>
						Connect
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
