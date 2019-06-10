<script>
const SIGNALS = [
	'fade',
	'go',
	'off',
	'reset',
]

export default {
	data() {
		return {
			SIGNALS,
			activeSignal: null,
			message: 'Waiting for input ...',
			peerId: null,
		}
	},
	methods: {
		joinPeer() {
			if (this.peerId) {
				this.$peer.conn = this.$peer.connect(this.peerId.trim(), { reliable: true })

				this.$peer.conn.on('open', () => {
					this.message = `Connected to peer ${this.peerId}`

					this.$peer.conn.send('Sending a new message')
				})
			}
		},
		signalPeer(signal) {
			const { conn } = this.$peer

			if (conn.open) {
				conn.send(signal)
				this.activeSignal = signal
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
				<v-flex>
					{{ message }}
				</v-flex>
				<v-flex>
					<v-btn
					@click='signalPeer'
					>
						Signaling
					</v-btn>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-flex
				:key='signal'
				v-for='signal in SIGNALS'
				>
					<v-btn
					:color='`${ signal === activeSignal ? "info" : "accent" }`'
					@click='signalPeer(signal)'
					>
						{{ signal }}
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
