<template>
	<div>
		<h1>Nuxt peer-to-peer Cue example</h1>

		<v-btn
		:key='link'
		:to='`/${link}`'
		color='primary'
		large
		target='_blank'
		v-for='link in links'
		>
			{{ link }}
		</v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				'receiver',
				'sender',
			],
		}
	}
}
</script>

