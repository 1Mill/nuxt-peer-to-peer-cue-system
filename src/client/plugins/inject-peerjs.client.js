import Peer from 'peerjs'

const peer = new Peer(null, { debug: 3 })

// TODO: Find a way to make peer load before inject occures (e.g. async / await?)
// TODO: as currently there is a race condition between vue mounting and peer
// TODO: being ready
export default ({ app }, inject) => {
	inject('peer', peer)
}
