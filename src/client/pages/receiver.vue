<template>
	<div>
		<h1>Reciever</h1>
		<div>
			My ID: <strong>{{ $peer.id }}</strong>
		</div>
		<div>
			<strong>{{ message }}</strong>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Waiting for connection ...',
		}
	},
	mounted() {
		// * Watch for connections from other peers
		this.$peer.on('connection', (conn) => {
			this.message = 'Connected'

			// * Watch for data transmitions (s.e.d conn.send) from other peers
			conn.on('open', () => {
				conn.on('data', (data) => {
					// * `data` is the data sent from the peer
					console.log(data)
				});
			});
		});
	},
}
</script>

