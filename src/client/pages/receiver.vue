<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState([
			'peer',
		]),
		message() {
			// * Is there an open connection with a peer?
			return (this.peer && this.peer.connect().open) ? "Connected to peer" : "Awaiting connection ..."
		},
	},
}
</script>


<template>
	<div>
		<h1>Reciever</h1>

		<v-container>
			<v-layout>
				<v-flex>
					Status:
					<br/>
					Your peer ID: <strong>{{ peer && peer.id }}</strong>
					<br/>
					<strong>{{ message }}</strong>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>
